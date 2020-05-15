export const decoratePrice = price => {
    const strPrice = '' + price;
    const dotPos = strPrice.indexOf('.');
    let newPrice;
    let tempPrice = '';

    if (dotPos >= 1) {
        newPrice = strPrice.substring(0, dotPos);
        tempPrice = strPrice.substring(dotPos, dotPos + 3);
    }
    else {
        newPrice = price;
    }

    newPrice = +newPrice;

    return '$' + newPrice.toLocaleString('en-EN') + tempPrice;
};

export const reverseDecoratePrice = price => {
    let temp = '';

    if (price.substring(0, 1) === '$') {
        temp = price.substring(1);
        temp = temp.replace(/(,)/g, '');
        return +temp;
    }

    return price;
};
