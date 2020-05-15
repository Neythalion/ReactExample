import React, { Component } from 'react';

import columnDefinitions, { columns } from './constants/columnDefinitions';
import { decoratePrice } from '../../../../utils/decorators';
import ActionsCell from './components/ActionsCell';

import './Table.css';

class Table extends Component {
    getHeader = () => (<tr>
        {columnDefinitions.map(c => <td key={c.displayName}>{c.displayName}</td>)}
    </tr>);

    getRow = product => (<tr className='table-row' key={product.id}>
        {columnDefinitions.map((c, i) => this.getCell(product, c.column, i))}
    </tr>);

    getCell = (product, column, index) => {
        const { onProductUpdate, onProductDelete } = this.props;
        const value = product[column];

        switch (column) {
            case columns.price:
                return (<td key={index}>{decoratePrice(value)}</td>);
            case columns.actions:
                return (<td key={index}>
                    <ActionsCell
                        onUpdate={() => onProductUpdate(product)}
                        onDelete={() => onProductDelete(product)}/>
                </td>);
            default:
                return (<td key={index}>{value}</td>);
        }
    };

    render() {
        const { products } = this.props;

        return (<table className='table'>
            <thead className='table-header'>{this.getHeader()}</thead>
            <tbody>{products.map(p => this.getRow(p))}</tbody>
        </table>)
    }
}

export default Table;
