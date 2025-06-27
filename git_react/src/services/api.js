const BASE_URL = 'https://dummyjson.com'

export const api = {

    getProducts: async (limit = 30, skip = 0) => {
        const respone = await fetch('${BASE_URL}/products?limit=${limit}&skip=${skip}');
        return response.json();
    },

    getProduct: async (id) => {
        const respone = await fetch('${BASE_URL}/products/${id}');
        return response.json();
    },

    searchProduct: async (query) => {
        const respone = await fetch('${BASE_URL}/products/search?h{query}');
        return response.json();
    },

    getCategories: async () => {
        const respone = await fetch('${BASE_URL}/products/categories');
        return response.json();
    },

    getProductByCategory: async (limit = 30, skip = 0) => {
        const respone = await fetch('${BASE_URL}/products/categories${category}');
        return response.json();
    },
}