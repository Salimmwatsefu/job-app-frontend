import React from "react";

function Modal({ onClose, children }) {
  return (
    <div className="fixed flex inset-0 items-center justify-center z-50 bg-black/90 bg ">
      <div className="bg-white  p-8 md:w-[800px] w-[380px]">
        <button
          className="absolute top-0 right-0 m-4 p-2 rounded-lg  text-black font-bold bg-white hover:text-red-800"
          onClick={onClose}
        >
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
