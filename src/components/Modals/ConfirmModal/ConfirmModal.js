import React from 'react';

import './ConfirmModal.css';

const ConfirmModal = props => {
    const { onConfirm, message, onClose } = props;

    return (<div className='confirm-modal'>
        <div className='confirm-modal-message'>{message}</div>
        <div className='confirm-modal-actions'>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    </div>);
};

export default ConfirmModal;
