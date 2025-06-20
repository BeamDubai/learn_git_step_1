const BASE_URL = 'https://dummyjson.com/' ;

export const api = {
    getProducts: async( limit = 30 ,skip =0)=>{
        const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
        return response.json();
    } ,

    getProducts: async(id) => {
        const response = await fetch(`${BASE_URL}/products/${id}`)
        return response.json();
    } ,

    searchProduct:async( query ) => {
        const response = await fetch(`${BASE_URL}/products/search?q=${query}`) ;
        return response.json();
    },

    getCategorie : async (category) => {
        const response = await fetch(`${BASE_URL}/product/categories`) ;
        return response.json();
    },

    getProductsByCategory:async (category) => {
        const response = await fetch(`${BASE_URL}/product/category=${query}`) ;
        return response.json();
    }


}
