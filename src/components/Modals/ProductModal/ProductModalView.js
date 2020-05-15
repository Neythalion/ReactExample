import React from 'react';

import TextField from '../../TextField';
import fieldTypes from './constants/field-types';
import { decoratePrice } from '../../../utils/decorators';

const ProductModalView = props => {
    const { product, confirmButtonText, onChange, onConfirm, onClose } = props;

    return (<div className='product-modal'>
        <TextField
            labelText='Product Name:'
            value={product[fieldTypes.name].value}
            error={product[fieldTypes.name].error}
            onChange={e => onChange(e.target.value, fieldTypes.name)}/>
        <TextField
            labelText='Email:'
            value={product[fieldTypes.email].value}
            error={product[fieldTypes.email].error}
            onChange={e => onChange(e.target.value, fieldTypes.email)}/>
        <TextField
            labelText='Count:'
            value={product[fieldTypes.count].value}
            error={product[fieldTypes.count].error}
            onChange={e => onChange(e.target.value, fieldTypes.count)}/>
        <TextField
            labelText='Price:'
            value={decoratePrice(product[fieldTypes.price].value)}
            error={product[fieldTypes.price].error}
            onChange={e => onChange(e.target.value, fieldTypes.price)}/>
        <div className='confirm-modal-actions'>
            <button onClick={onConfirm}>{confirmButtonText}</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    </div>);
};

export default ProductModalView;
