// components/Button.jsx
import React from "react";

function Button({ className = "", text, ...rest }) {
  return (
    <button
      className={`font-poppins text-md px-4 py-2 rounded-lg ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
