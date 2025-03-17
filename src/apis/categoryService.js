import axiosClient from "./axiosClient"

const categoryService = {
    // Lấy tất cả categories
    getCategories: async () => {
        try {
            console.log('Calling category API...');
            const response = await axiosClient.get('/api/Category');
            console.log('Category API response:', response);
            
            // Kiểm tra cấu trúc response
            if (!response || (Array.isArray(response) && response.length === 0)) {
                console.error('API trả về dữ liệu rỗng');
                return [];
            }
            
            return response;
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    },

    // Lấy category theo id
    getCategoryById: async (id) => {
        try {
            return await axiosClient.get(`/api/Category/${id}`);
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
};

export default categoryService; 