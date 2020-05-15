const baseURL = 'https://api-crud-mongo.herokuapp.com/api/v1';

export default {
    getProducts: `${baseURL}/products`,
    updateProduct: `${baseURL}/products/update`,
    deleteProduct: `${baseURL}/products/delete`,
    createProduct: `${baseURL}/products/add`
};
