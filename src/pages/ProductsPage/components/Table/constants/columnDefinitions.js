export const columns = {
    name: 'name',
    email: 'email',
    count: 'count',
    price: 'price',
    actions: 'actions'
};

const columnDefinitions = [
    {
        column: columns.name,
        displayName: 'Product Name'
    },
    {
        column: columns.email,
        displayName: 'Email'
    },
    {
        column: columns.count,
        displayName: 'Count'
    },
    {
        column: columns.price,
        displayName: 'Price'
    },
    {
        column: columns.actions,
        displayName: 'Actions'
    }
];

export default columnDefinitions;