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
    <div className={styles.overlay} onClick={handelBackdropClick}>
      <button
        className={styles.modalBtn}
        type="button"
        onClick={handelButtonClick}
      >
        X
      </button>
      <div className={styles.modalContainer}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
