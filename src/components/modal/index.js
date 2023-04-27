import React, { useState } from 'react';
import './styles.scss';


function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{props.title}</h3>
              <button onClick={handleClose}>X</button>
            </div>
            <div className="modal-body">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
