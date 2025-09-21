import React from 'react';

export function Modal({ onClose, children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">×</button>
        {children}
      </div>
    </div>
  );
}