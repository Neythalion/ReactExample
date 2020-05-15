import React, { Component } from 'react';

import { getProducts, createProduct, updateProduct, deleteProduct } from '../../api/products';
import { ModalContext } from '../../context/modalContext';
import ProductsPageView from './ProductsPageView';
import modalTypes from '../../constants/modal-types';

import './ProductsPage.css';

class ProductsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            products: null,
            filteredProducts: null,
            error: null
        };
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = () => {
        this.setState({
            isFetching: true
        });

        getProducts()
            .then(res => {
                this.setState({
                    isFetching: false,
                    products: res.Data,
                    filteredProducts: res.Data
                });
            }, err => {
                this.setState({
                    isFetching: false,
                    error: err.message
                });
            });
    };

    handleFiltration = filterValue => {
        const { products } = this.state;

        this.setState({
            filteredProducts: products.filter(p => p.name.includes(filterValue))
        });
    };

    handleProductCreate = () => {
        const { openModal, closeModal } = this.context;

        openModal(modalTypes.product, {
            isEditMode: false,
            product: {},
            onConfirm: newProduct => createProduct(newProduct).then(() => {
                closeModal();
                this.loadProducts();
            }),
            onClose: closeModal
        });
    };

    handleProductUpdate = product => {
        const { openModal, closeModal } = this.context;

        openModal(modalTypes.product, {
            isEditMode: true,
            product: product,
            onConfirm: newProduct => updateProduct(newProduct).then(() => {
                closeModal();
                this.loadProducts();
            }),
            onClose: closeModal
        });
    };

    handleProductDelete = product => {
        const { openModal, closeModal } = this.context;

        openModal(modalTypes.confirm, {
            message: `Are you sure you want to delete ${product.name}?`,
            onConfirm: () => deleteProduct(product.id).then(() => {
                closeModal();
                this.loadProducts();
            }),
            onClose: closeModal
        });
    };

    render() {
        const { filteredProducts, isFetching, error } = this.state;

        return (<div className='products-page'>
            {error && <div>Error: {error}</div>}
            {isFetching && <div>Loading Products...</div>}
            {!isFetching && filteredProducts && <ProductsPageView
                products={filteredProducts}
                onFiltration={this.handleFiltration}
                onProductCreate={this.handleProductCreate}
                onProductUpdate={this.handleProductUpdate}
                onProductDelete={this.handleProductDelete}/>}
        </div>);
    }
}

ProductsPage.contextType = ModalContext;

export default ProductsPage;
