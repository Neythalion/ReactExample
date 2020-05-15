import React from 'react';
import cn from 'classnames';

import { ModalContextConsumer } from '../../../context/modalContext';
import { modals } from '../index';

import './BaseModal.css';

const BaseModal = () => (<ModalContextConsumer>
    {({ state }) => {
        const { isOpen, props, type } = state;
        const ModalContent = modals[type];

        return (<div className={cn({ hidden: !isOpen })}>
            {ModalContent && <div className='modal'><ModalContent {...props}/></div>}
            <div onClick={props.onClose} className='modal-overlay'/>
        </div>);
    }}
</ModalContextConsumer>);

export default BaseModal;
