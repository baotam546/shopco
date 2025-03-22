import axiosClient from './axiosClient';

const orderService = {
    getOrders: async (userId) => {
        // {
        //     "userId": 0,
        //     "productId": 0,
        //     "quantity": 0
        //   }
        try {
            const response = await axiosClient.get('/api/Orders');
            const values = response['$values'];
            const orderByUser = values.filter(order => order.userId === userId);
            return orderByUser;
            // {
            //     "$id": "1",
            //     "$values": [
            //       {
            //         "$id": "2",
            //         "orderId": 14,
            //         "userId": 1,
            //         "orderDate": "2025-03-05T15:37:02.253",
            //         "orderStatus": "Paid",
            //         "deliveryStatus": "Not Delivered",
            //         "deliveryAddress": null,
            //         "totalAmount": 498000,
            //         "note": null,
            //         "voucherId": null,
            //         "cancelRequests": {
            //           "$id": "3",
            //           "$values": []
            //         },
            //         "orderItems": {
            //           "$id": "4",
            //           "$values": []
            //         },
            //         "payments": {
            //           "$id": "5",
            //           "$values": []
            //         },
            //         "user": null,
            //         "voucher": null
            //       },
            //       {
            //         "$id": "6",
            //         "orderId": 15,
            //         "userId": 2,
            //         "orderDate": "2025-03-05T15:38:38.337",
            //         "orderStatus": "Paid",
            //         "deliveryStatus": "Not Delivered",
            //         "deliveryAddress": null,
            //         "totalAmount": 646380,
            //         "note": null,
            //         "voucherId": 1,
            //         "cancelRequests": {
            //           "$id": "7",
            //           "$values": []
            //         },
            //         "orderItems": {
            //           "$id": "8",
            //           "$values": []
            //         },
            //         "payments": {
            //           "$id": "9",
            //           "$values": []
            //         },
            //         "user": null,
            //         "voucher": null
            //       },
            //       {
            //         "$id": "10",
            //         "orderId": 17,
            //         "userId": 2,
            //         "orderDate": "2025-03-05T15:52:04.953",
            //         "orderStatus": "Paid",
            //         "deliveryStatus": "Not Delivered",
            //         "deliveryAddress": null,
            //         "totalAmount": 850500,
            //         "note": null,
            //         "voucherId": 1,
            //         "cancelRequests": {
            //           "$id": "11",
            //           "$values": []
            //         },
            //         "orderItems": {
            //           "$id": "12",
            //           "$values": []
            //         },
            //         "payments": {
            //           "$id": "13",
            //           "$values": []
            //         },
            //         "user": null,
            //         "voucher": null
            //       },
            //       {
            //         "$id": "14",
            //         "orderId": 18,
            //         "userId": 1,
            //         "orderDate": "2025-03-07T03:12:07.303",
            //         "orderStatus": "Pending",
            //         "deliveryStatus": "Not Delivered",
            //         "deliveryAddress": null,
            //         "totalAmount": 1603000,
            //         "note": null,
            //         "voucherId": null,
            //         "cancelRequests": {
            //           "$id": "15",
            //           "$values": []
            //         },
            //         "orderItems": {
            //           "$id": "16",
            //           "$values": []
            //         },
            //         "payments": {
            //           "$id": "17",
            //           "$values": []
            //         },
            //         "user": null,
            //         "voucher": null
            //       }
            //     ]
            //   }
        } catch (error) {
            console.error('Error:', error);
            throw error; 
        }
    },
    getOrderById: async (orderId) => {
        try {
            const response = await axiosClient.get(`/api/Orders/${orderId}`);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
    getCurrentCart: async (userId) => {
        try {
            const response = await axiosClient.get(`/api/Orders/current/${userId}`);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    

// {
//   "$id": "1",
//   "orderId": 19,
//   "userId": 1,
//   "orderStatus": "Pending",
//   "totalAmount": 1050000,
//   "items": {
//     "$id": "2",
//     "$values": [
//       {
//         "$id": "3",
//         "orderItemId": 19,
//         "productId": 2,
//         "quantity": 2,
//         "price": 1050000,
//         "product": {
//           "$id": "4",
//           "productId": 2,
//           "productCode": "LSD002",
//           "categoryId": 1,
//           "productName": "Nước Tẩy Trang Bioderma Dành Cho Da Nhạy Cảm 500ml",
//           "quantity": 1,
//           "capacity": "110ml, 250ml, 500ml",
//           "price": 525000,
//           "brand": "Bioderma",
//           "origin": "Pháp",
//           "status": "Available",
//           "imgUrl": "2",
//           "skinType": "Da nhạy cảm",
//           "description": "Dành Cho Da Nhạy Cảm Bioderma Sensibio H2O là sản phẩm nước tẩy trang công nghệ Micellar đầu tiên trên thế giới, do thương hiệu dược mỹ phẩm Bioderma nổi tiếng của Pháp phát minh. Dung dịch giúp làm sạch sâu da và loại bỏ lớp trang điểm nhanh chóng mà không cần rửa lại bằng nước. Công thức dịu nhẹ, không kích ứng, không gây khô căng da, đặc biệt phù hợp với làn da nhạy cảm  HSD: ~3 năm (chưa mở), ~6-12 tháng (sau khi mở)",
//           "ingredients": "NULL\"1. Nước Tẩy Trang Bioderma Dành Cho Da Nhạy Cảm\r\n- Thành phần chính: Công nghệ Micellar: Các hạt micelle, có thành phần được lấy cảm hứng từ lipid của da, là những hạt làm sạch vô hình siêu nhỏ. Chúng có khả năng thu giữ các tạp chất trong khi vẫn duy trì lớp màng bảo vệ tự nhiên của da.\r\n- Sáng chế D.A.F: Các tác động từ bên ngoài có thể làm cho da trở nên kích ứng và nhạy cảm. Hợp chất này giúp làm tăng khả năng dung nạp của làn da - bất kể đối với loại da nào - nhằm tăng cường sức đề kháng cho da.\r\n- Thành phần chi tiết: Aqua/Water/Eau, Peg-6 Caprylic/Capric Glycerides, Fructooligosaccharides, Mannitol, Xylitol, Rhamnose, Cucumis Sativus (Cucumber) Fruit Extract, Propylene Glycol, Cetrimonium Bromide, Disodium Edta. [Bi 446]\r\n\r\n2. Nước Tẩy Trang Bioderma Dành Cho Da Dầu & Hỗn Hợp\r\n - Thành phần chính: Công nghệ Micellar: Các hạt micelle, có thành phần được lấy cảm hứng từ lipid của da, là những hạt làm sạch vô hình siêu nhỏ. Chúng có khả năng thu giữ các tạp chất trong khi vẫn duy trì lớp màng bảo vệ tự nhiên của da.\r\n- Sáng chế D.A.F: Các tác động từ bên ngoài có thể làm cho da trở nên kích ứng và nhạy cảm. Hợp chất này giúp làm tăng khả năng dung nạp của làn da - bất kể đối với loại da nào - nhằm tăng cường sức đề kháng cho da.\r\n- Thành phần đầy đủ: Water (Aqua), Peg-6 Caprylic/Capric Glycerides, Sodium Citrate , Zinc Gluconate, Copper Sulfate, Ginkgo Biloba Extract – Chiết Xuất Lá Bạch Quả, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides, Propylene Glycol, Citric Acid, Disodium Edta, Cetrimonium Bromide, Fragrance (Parfum).\"",
//           "usageInstructions": "\"- Thấm nước tẩy trang lên bông tẩy trang.\n- Nhẹ nhàng làm sạch vùng mặt và mắt.\n- Không cần rửa lại với nước.\n- Sử dụng vào hằng ngày để làm sạch da.\"",
//           "manufactureDate": "2024-03-26T00:00:00"
//         }
//       }
//     ]
//   }
// }
// Response headers


        
    },
    countBoughtProducts: async (productId) => {
        try {
            const response = await axiosClient.get(`/api/Orders/sold-count/${productId}`);
            return response;
        } catch (error) {
            console.error('Error:', error);
        }
    },
    addtocard: async (userId, productId, quantity) => {
        // {
        //     "userId": 0,
        //     "productId": 0,
        //     "quantity": 0
        //   }
        try {
            const response = await axiosClient.post('/api/Orders/addtocart', {
                userId,
                productId,
                quantity
            });
            return response; 
        } catch (error) {
            console.error('Error:', error);
            throw error; 
        }
    },
    updatecartitem: async (orderItemId, quantity) => {
        try {
            const response = await axiosClient.put('/api/Orders/updatecartitem', {
                orderItemId,
                quantity
            });
            return response; 
        } catch (error) {
            console.error('Error:', error);
            throw error; 
        }
    },
    removefromcart: async (orderItemId) => {
        try {
            const response = await axiosClient.delete(`/api/Orders/removefromcart/${orderItemId}`);
            return response;
        } catch (error) {
            console.error('Error saving skin type:', error);
            throw error;
        }
    },
    applyvoucher: async (orderId,voucherId) => {
        try {
            const response = await axiosClient.post(`/api/Orders/applyvoucher`,{
                orderId,
                voucherId
            });
            return response; 
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error; 
        }
    },
    confirmpayment: async (orderId,deliveryAddress,paymentMethod) => {
        try {
            const response = await axiosClient.post(`/api/Orders/confirm-payment`,{
                orderId,
                deliveryAddress,
                paymentMethod
            });
            return response; 
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error; 
        }
    },
    getOrderItems: async (orderId) => {
        try {
            const response = await axiosClient.get(`/api/OrderItems/${orderId}`);
            return response;
        } catch (error) {
            console.error('Error fetching order items:', error);
            throw error;
        }
    }
};

export default orderService; 