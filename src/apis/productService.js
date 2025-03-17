import axiosClient from "./axiosClient"
import { API_ENDPOINTS } from "./apiConstants"

const productService = {
    // Lấy tất cả sản phẩm
    getAllProducts: async () => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.LIST);
            if (response && Array.isArray(response)) {
                return { $values: response };
            } else if (response && response.$values) {
                return response;
            } else {
                return { $values: [] };
            }
        } catch (error) {
            console.error('Error fetching all products:', error);
            return { $values: [] };
        }
    },

    // Lấy tất cả sản phẩm với phân trang
    getProductsPaginated: async (page = 1, pageSize = 20) => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.LIST, {
                params: {
                    page,
                    pageSize
                }
            });
            return response;
        } catch (error) {
            console.error('Error fetching paginated products:', error);
            return { $values: [] };
        }
    },

    // Lấy sản phẩm theo ID
    getProductById: async (id) => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.DETAIL(id));
            return response;
        } catch (error) {
            console.error(`Error fetching product with id ${id}:`, error);
            return null;
        }
    },

    // Lấy tất cả danh mục
    getAllCategories: async () => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.CATEGORIES.LIST);
            
            // Đảm bảo dữ liệu trả về có đầy đủ thông tin
            let categories = [];
            if (Array.isArray(response)) {
                categories = response;
            } else if (response && response.$values && Array.isArray(response.$values)) {
                categories = response.$values;
            }
            
            // Kiểm tra và đảm bảo mỗi category có đủ thông tin
            categories = categories.map(category => ({
                ...category,
                categoryType: category.categoryType || 'Unknown',
                categoryName: category.categoryName || 'Unknown'
            }));
            
            return { $values: categories };
        } catch (error) {
            console.error('Error fetching all categories:', error);
            return { $values: [] };
        }
    },

    // Lấy sản phẩm theo category
    getProductsByCategory: async (categoryId) => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.BY_CATEGORY(categoryId));
            return response;
        } catch (error) {
            console.error(`Error fetching products for category ${categoryId}:`, error);
            return { $values: [] };
        }
    },

    // Tìm kiếm sản phẩm
    searchProducts: async (searchTerm) => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.SEARCH, { 
                params: { 
                    name: searchTerm
                } 
            });
            return response;
        } catch (error) {
            console.error('Error searching products:', error);
            return { $values: [] };
        }
    },

    // Lấy sản phẩm theo brand
    getProductsByBrand: async (brandName) => {
        try {
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.LIST);
            
            let allProducts = [];
            if (response && response.$values) {
                allProducts = response.$values;
            } else if (Array.isArray(response)) {
                allProducts = response;
            }
            
            const filteredProducts = allProducts.filter(product => 
                product.brand && product.brand.toLowerCase() === brandName.toLowerCase()
            );
            
            console.log(`Found ${filteredProducts.length} products for brand ${brandName}`);
            return filteredProducts;
        } catch (error) {
            console.error('Error fetching products by brand:', error);
            return [];
        }
    },

    // Lấy sản phẩm theo skin type
    getProductsBySkinType: async (skinType) => {
        try {
            // Sử dụng endpoint chung và lọc ở client
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.LIST);
            
            let allProducts = [];
            if (response && response.$values) {
                allProducts = response.$values;
            } else if (Array.isArray(response)) {
                allProducts = response;
            }
            
            const filteredProducts = allProducts.filter(product => 
                product.skinType && product.skinType.toLowerCase() === skinType.toLowerCase()
            );
            
            return { $values: filteredProducts };
        } catch (error) {
            console.error(`Error fetching products for skin type ${skinType}:`, error);
            return { $values: [] };
        }
    },

    // Lấy sản phẩm theo khoảng giá
    getProductsByPrice: async (minPrice, maxPrice) => {
        try {
            // Sử dụng endpoint chung và lọc ở client
            const response = await axiosClient.get(API_ENDPOINTS.PRODUCTS.LIST);
            
            let allProducts = [];
            if (response && response.$values) {
                allProducts = response.$values;
            } else if (Array.isArray(response)) {
                allProducts = response;
            }
            
            const filteredProducts = allProducts.filter(product => 
                product.price >= minPrice && product.price <= maxPrice
            );
            
            return { $values: filteredProducts };
        } catch (error) {
            console.error(`Error fetching products by price range:`, error);
            return { $values: [] };
        }
    }
};

export default productService;
