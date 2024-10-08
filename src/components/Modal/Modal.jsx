import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handelKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handelKeyDown);
    return () => document.removeEventListener('keydown', handelKeyDown);
  });

  const handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handelButtonClick = () => {
    onClose();
  };

  return createPortal(
    <div onClick={handelBackdropClick} className={styles.modal}>
      <button
        type="button"
        onClick={handelButtonClick}
        className={styles.modalClose}
      >
        X
      </button>
      <div className={styles.modalContent}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
