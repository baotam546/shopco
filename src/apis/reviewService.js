import axiosClient from './axiosClient';

const reviewService = {
    // Lấy tất cả đánh giá
    getAllReviews: async () => {
        try {
            const response = await axiosClient.get('/api/Reviews');
            // Kiểm tra cấu trúc response
            if (response && response.$values) {
                return response.$values;
            } else if (Array.isArray(response)) {
                return response;
            }
            return [];
        } catch (error) {
            console.error('Error fetching all reviews:', error);
            return [];
        }
    },

    getReviewsProductId: async (productId) => {
        try {
            const response = await axiosClient.get(`/api/Reviews/product/${productId}`);
            const data = response?.$values || [];
            return data;
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    },
//     {
//   "$id": "1",
//   "$values": [
//     {
//       "$id": "2",
//       "reviewId": 16,
//       "userId": 4,
//       "productId": 7,
//       "rating": 5,
//       "reviewDate": "2025-03-12T12:45:04.397",
//       "reviewComment": "viet anh review",
//       "product": null,
//       "user": null
//     }
//   ]
// }
    postReview: async (review) => {
//         {
//   "userId": 0,
//   "productId": 0,
//   "rating": 0,
//   "reviewComment": "string",
// }
        try {
            const response = await axiosClient.post(`/api/Reviews`, review);
            return response;
        } catch (error) {
            console.error('Error posting review:', error);
            throw error;
        }
    },
    getAverageRating: async (productId) => {
        try {
            const response = await axiosClient.get(`/api/Reviews/product/${productId}/average-rating`);
            return response;
        } catch (error) {
            console.error('Error fetching average rating:', error);
            throw error;
        }
    },
    
    confirmPayment: async (orderId, deliveryAddress) => {
        try {
            const response = await axiosClient.post(`/api/Orders/confirm-payment`,{
                orderId,
                deliveryAddress
            });
            return response; 
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error; 
        }
    }
};

export default reviewService; 