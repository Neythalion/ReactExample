import BaseModal from './BaseModal';
import ConfirmModal from './ConfirmModal';
import ProductModal from './ProductModal';
import modalTypes from '../../constants/modal-types';

export const modals = {
    [modalTypes.product]: ProductModal,
    [modalTypes.confirm]: ConfirmModal
};

export default BaseModal;
