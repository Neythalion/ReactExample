import Ajv from 'ajv';

import fieldTypes from '../constants/field-types';

const ajv = new Ajv({ allErrors: true });
const schema = {
    properties: {
        [fieldTypes.name]: {
            type: 'string',
            minLength: 2
        },
        [fieldTypes.email]: {
            type: 'string',
            minLength: 3
        },
        [fieldTypes.count]: {
            type: 'number',
            minimum: 1
        },
        [fieldTypes.price]: {
            type: 'number'
        }
    },
    required: [
        fieldTypes.name,
        fieldTypes.email,
        fieldTypes.count,
        fieldTypes.price
    ]
};

export const validate = product => {
    const isValid = ajv.validate(schema, product);

    return {
        isValid,
        errors: ajv.errors
    };
};
