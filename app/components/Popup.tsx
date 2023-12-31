import React from 'react';

const Popup = (props:any) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 overflow-auto ${
        props.isOpen ? 'block' : 'hidden'
      } bg-black bg-opacity-40`}
    >
      <div className="bg-[#333] rounded-lg shadow-lg w-10/12 text-center border-2 border-black relative">
        {props.children}
        <button
          onClick={props.onClose}
          className="mt-4 bg-[#a1e611] hover:bg-white text-[#333] font-semibold py-2 px-6 opacity-70 hover:opacity-100 rounded uppercase absolute bottom-0 right-0"
        >
          Thoát
        </button>
      </div>
    </div>
  );
};

export default Popup;