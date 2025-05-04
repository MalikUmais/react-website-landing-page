import React from "react";

function Btnplain({ text, className }) {
  return (
    <button
      className={` border border-[var(--custom-green)] text-[var(--custom-green)] px-6 py-3 rounded-md transform transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}

export default Btnplain;
