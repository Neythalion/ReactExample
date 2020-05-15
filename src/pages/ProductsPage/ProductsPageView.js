import React from 'react';

import Table from './components/Table';
import FilterPanel from './components/FilterPanel';

const ProductsPageView = props => {
    const {
        products,
        onFiltration,
        onProductUpdate,
        onProductDelete,
        onProductCreate
    } = props;

    return (<div>
        <div className='products-page-panel'>
            <FilterPanel onFiltration={onFiltration}/>
            <button onClick={onProductCreate}>Add Product</button>
        </div>
        {products.length
            ? <Table
            products={products}
            onProductUpdate={onProductUpdate}
            onProductDelete={onProductDelete}/>
            : <div>No Products Found</div>}
    </div>)
};

export default ProductsPageView;
