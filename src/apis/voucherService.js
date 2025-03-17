import axiosClient from './axiosClient';

const voucherService = {
    getVouchers: async () => {
        try {
            const response = await axiosClient.get('/api/Voucher');
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
//     {
//   "$id": "1",
//   "$values": [
//     {
//       "$id": "2",
//       "voucherId": 1,
//       "voucherName": "DISCOUNT10",
//       "discountPercent": 10,
//       "minOrderAmount": 100,
//       "startDate": "2025-01-01T00:00:00",
//       "endDate": "2025-12-31T23:59:59",
//       "quantity": 98,
//       "status": "Active",
//       "description": "Giảm giá 10% cho đơn hàng từ 100k",
//       "orders": {
//         "$id": "3",
//         "$values": []
//       }
//     },
//     {
//       "$id": "4",
//       "voucherId": 2,
//       "voucherName": "DISCOUNT20",
//       "discountPercent": 20,
//       "minOrderAmount": 200,
//       "startDate": "2025-01-01T00:00:00",
//       "endDate": "2025-12-31T23:59:59",
//       "quantity": 50,
//       "status": "Active",
//       "description": "Giảm 20% cho đơn từ 200k",
//       "orders": {
//         "$id": "5",
//         "$values": []
//       }
//     },
//     {
//       "$id": "6",
//       "voucherId": 3,
//       "voucherName": "FREESHIP",
//       "discountPercent": 5,
//       "minOrderAmount": 50,
//       "startDate": "2025-01-01T00:00:00",
//       "endDate": "2025-12-31T23:59:59",
//       "quantity": 200,
//       "status": "Active",
//       "description": "Giảm 5% phí ship",
//       "orders": {
//         "$id": "7",
//         "$values": []
//       }
//     }
//   ]
    getVoucherById: async (id) => {
        try {
            const response = await axiosClient.get(`/api/Voucher/${id}`);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
    createVoucher: async (voucher) => {
        try {
            const response = await axiosClient.post('/api/Voucher', voucher);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
    updateVoucher: async (id, voucher) => {
        try {
            const response = await axiosClient.put(`/api/Voucher/${id}`, voucher);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
    deleteVoucher: async (id) => {
        try {
            const response = await axiosClient.delete(`/api/Voucher/${id}`);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
};

export default voucherService; 
