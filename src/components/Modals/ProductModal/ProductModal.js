import React, { Component } from 'react';

import fieldTypes, { fieldTypesArray } from './constants/field-types';
import { reverseDecoratePrice } from '../../../utils/decorators';
import { validate } from './utils/validation';
import ProductModalView from './ProductModalView';

import './ProductModal.css';

class ProductModal extends Component {
    constructor(props) {
        super();
        const { isEditMode, product } = props;

        this.state = {
                [fieldTypes.name]: {
                    value: isEditMode ? product[fieldTypes.name] : '',
                    error: null
                },
                [fieldTypes.email]: {
                    value: isEditMode ? product[fieldTypes.email] : '',
                    error: null
                },
                [fieldTypes.count]: {
                    value: isEditMode ? product[fieldTypes.count] : 0,
                    error: null
                },
                [fieldTypes.price]: {
                    value: isEditMode ? product[fieldTypes.price] : 0,
                    error: null
                }
            };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Product modal get derived state from props');

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Product modal did update');
    }

    componentDidMount() {
        console.log('Product modal did mount');
    }

    componentWillUnmount() {
        console.log('Product modal will unmount');
    }

    handleChange = (value, fieldType) => {
        let newValue;

        switch (fieldType) {
            case fieldTypes.price:
                newValue = reverseDecoratePrice(value);
                break;
            case fieldTypes.count:
                newValue = +value;
                break;
            default:
                newValue = value;
        }

        this.setState({
            [fieldType]: {
                value: newValue,
                error: null
            }
        });
    };

    handleConfirm = () => {
        const { onConfirm, isEditMode, product } = this.props;
        const newProduct = {};

        fieldTypesArray.forEach(type => {
            newProduct[type] = this.state[type].value;
        });

        const validation = validate(newProduct);

        if (validation.isValid) {
            onConfirm({
                ...newProduct,
                id: isEditMode ? product.id : null
            });
        } else {
            validation.errors.forEach(err => {
                this.setState({
                    [err.instancePath.slice(1)]: {
                        ...this.state[err.instancePath.slice(1)],
                        error: err.message
                    }
                });
            });
        }
    };

    render() {
        const { onClose, isEditMode } = this.props;
        const confirmButtonText = isEditMode ? 'Edit' : 'Create';

        console.log('Product modal render');

        return (<ProductModalView
            product={this.state}
            confirmButtonText={confirmButtonText}
            onChange={this.handleChange}
            onConfirm={this.handleConfirm}
            onClose={onClose}/>);
    }
}

export default ProductModal;
