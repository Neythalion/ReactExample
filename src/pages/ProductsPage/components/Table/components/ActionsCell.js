import React, { Fragment } from 'react';

const ActionsCell = props => {
    const { onUpdate, onDelete } = props;

    return (<Fragment>
        <button onClick={onUpdate}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </Fragment>);
};

export default ActionsCell;
