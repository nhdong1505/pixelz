import React, { useState, useEffect } from 'react';
import './styles.scss';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content">
              {children}
            </div>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
