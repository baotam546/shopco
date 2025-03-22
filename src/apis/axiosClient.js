import axios from "axios";

// Tạo một đối tượng để lưu trữ các request có thể hủy
const cancelTokens = {};

// const axiosClient = axios.create({
//     baseURL: 'https://localhost:7175',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     timeout: 30000, // Tăng timeout lên 30 giây
// });

const axiosClient = axios.create({
    baseURL: 'https://58.186.99.227:7175',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // Tăng timeout lên 30 giây
});
// Danh sách các endpoint không nên bị hủy khi trùng lặp (các API nào có thể được gọi nhiều lần)
const excludeFromCancellation = [
    '/api/Users/profile',
    '/api/Users/',
    '/api/Orders/current/',
    '/api/Voucher'
];

// Hàm kiểm tra xem một endpoint có nên được loại trừ khỏi cơ chế hủy không
const shouldExcludeFromCancellation = (endpoint, method) => {
    // Không áp dụng hủy cho các method GET hoặc các endpoint trong danh sách loại trừ
    if (method.toLowerCase() === 'get') {
        return excludeFromCancellation.some(prefix => endpoint.startsWith(prefix));
    }
    return false;
};

// Hàm trợ giúp để hủy request trước đó trên cùng một endpoint
const cancelPreviousRequest = (endpoint, method, requestId) => {
    // Tạo key duy nhất cho từng cặp endpoint và method
    const key = `${method}:${endpoint}`;
    
    // Kiểm tra xem có nên loại trừ endpoint này không
    if (shouldExcludeFromCancellation(endpoint, method)) {
        // Tạo key có requestId để tránh hủy các request khác đến cùng endpoint
        return `${key}:${requestId}`;
    }
    
    // Nếu không loại trừ, hủy request trước đó
    if (cancelTokens[key]) {
        cancelTokens[key].cancel('Request cancelled due to duplicate request');
        delete cancelTokens[key];
    }
    
    return key;
};

axiosClient.interceptors.request.use(
    (config) => {
        console.log('Requesting:', config.url, config.method);
        
        // Tạo một requestId ngẫu nhiên
        const requestId = Math.random().toString(36).substring(2, 15);
        
        // Tạo cancel token cho request này
        const source = axios.CancelToken.source();
        config.cancelToken = source.token;
        
        // Lưu cancel token cho endpoint này với method
        const endpoint = config.url;
        const method = config.method || 'get';
        
        if (endpoint) {
            // Hủy request trước đó nếu có và lấy key
            const key = cancelPreviousRequest(endpoint, method, requestId);
            cancelTokens[key] = source;
        }
        
        // Lấy thông tin người dùng từ localStorage
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                const user = JSON.parse(userStr);
                // Thêm userId vào header để xác thực
                if (user && user.userId) {
                    config.headers['User-Id'] = user.userId;
                }
            } catch (error) {
                console.error('Error parsing user data:', error);
            }
        }
        
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        // Xóa cancel token sau khi request thành công
        const endpoint = response.config.url;
        const method = response.config.method || 'get';
        const key = `${method}:${endpoint}`;
        
        if (endpoint && cancelTokens[key]) {
            delete cancelTokens[key];
        }
        
        // Kiểm tra xem response có tồn tại không
        if (!response) {
            console.error('API response is undefined');
            return Promise.reject(new Error('API response is undefined'));
        }
        
        // Với các phương thức PUT, DELETE hoặc PATCH, có thể không có dữ liệu trả về
        // (thường chỉ trả về status code 200/204)
        const methodsWithoutData = ['put', 'delete', 'patch'];
        if (!response.data && methodsWithoutData.includes(method.toLowerCase())) {
            console.log(`${method.toUpperCase()} thành công cho ${endpoint}`, response.status);
            return { success: true, status: response.status };
        }
        
        // Kiểm tra xem response.data có tồn tại không cho các phương thức khác
        if (!response.data) {
            console.warn('API response.data is undefined, returning empty object');
            return {};
        }
        
        console.log('API Response:', response.data);
        return response.data;
    },
    (error) => {
        // Xóa cancel token khi request thất bại
        if (error.config && error.config.url) {
            const endpoint = error.config.url;
            const method = error.config.method || 'get';
            const key = `${method}:${endpoint}`;
            
            if (cancelTokens[key]) {
                delete cancelTokens[key];
            }
        }
        
        // Xử lý lỗi hủy request
        if (axios.isCancel(error)) {
            console.log('Request cancelled:', error.message);
            return Promise.reject(error);
        }
        
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            
            if (error.response.status === 401) {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
            
            // Xử lý lỗi timeout
            if (error.code === 'ECONNABORTED') {
                console.error('Request timeout, please check your network connection');
            }
        } else {
            console.error('Request setup error:', error.message);
        }
        
        return Promise.reject(error);
    }
);

// Thêm hàm hủy tất cả các request khi người dùng chuyển trang
axiosClient.cancelAllRequests = () => {
    Object.keys(cancelTokens).forEach(key => {
        cancelTokens[key].cancel('Navigation cancelled all requests');
        delete cancelTokens[key];
    });
};

export default axiosClient;