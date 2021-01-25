import React from 'react';

import TextField from '../../TextField';
import fieldTypes from './constants/field-types';
import { decoratePrice } from '../../../utils/decorators';

const ProductModalView = props => {
    const { product, confirmButtonText, onChange, onConfirm, onClose } = props;

    return (<div className='product-modal'>
        <TextField
            labelText='Product Name:'
            name={fieldTypes.name}
            value={product[fieldTypes.name].value}
            error={product[fieldTypes.name].error}
            onChange={onChange}/>
        <TextField
            labelText='Email:'
            name={fieldTypes.email}
            value={product[fieldTypes.email].value}
            error={product[fieldTypes.email].error}
            onChange={onChange}/>
        <TextField
            labelText='Count:'
            name={fieldTypes.count}
            value={product[fieldTypes.count].value}
            error={product[fieldTypes.count].error}
            onChange={onChange}/>
        <TextField
            labelText='Price:'
            name={fieldTypes.price}
            value={decoratePrice(product[fieldTypes.price].value)}
            error={product[fieldTypes.price].error}
            onChange={onChange}/>
        <div className='confirm-modal-actions'>
            <button onClick={onConfirm}>{confirmButtonText}</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    </div>);
};

export default ProductModalView;
