import React from "react";

function Btnlg({text,className}) {
  return (
    <button className={` bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-md cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 ${className}`}>
      {text}
    </button>
  );
}

export default Btnlg;
