import { apiRoutes } from '../constants/api-routes';
import { apiMethodTypes } from '../constants/api-method-types';

export const getProducts = () => {
    return fetch(apiRoutes.getProducts).then(res => res.json());
};

export const deleteProduct = id => {
    return fetch(`${apiRoutes.deleteProduct}/${id}`, {
        method: apiMethodTypes.delete
    }).then(res => res.json());
};

export const updateProduct = product => {
    return fetch(`${apiRoutes.updateProduct}/${product.id}`, {
        method: apiMethodTypes.put,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res => res.json());
};

export const createProduct = product => {
    return fetch(`${apiRoutes.createProduct}`, {
        method: apiMethodTypes.post,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res => res.json());
};
