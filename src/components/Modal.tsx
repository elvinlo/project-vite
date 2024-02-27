import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const modalContent = isOpen ? (
    createPortal(
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        fontFamily: 'Arial',
        color: 'black',
      }}>
        <div style={{
          width: '20rem',
          height: '20rem',
          background: 'white',
          padding: '20px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontWeight: 'bold' }}>
            Modal baby :D
          </p>
          <button onClick={handleClose} style={{
            width: "18rem",
            fontSize: '14px',
            border: '1px solid #555',
            borderRadius: '5px',
            padding: '5px',
          }}>
            Close modal :(
          </button>
        </div>
      </div>,
      modalRoot
    )
  ) : null;

  return (
    <>
      <button onClick={handleOpen} style={{
        fontSize: '18px',
        width: '800px',
        border: '1px solid #555',
        borderRadius: '5px',
        padding: '5px',
        marginTop: '10px',
        fontWeight: 'bold'
      }}>
        CLICK ME
      </button>
      {modalContent}
    </>
  );
}
