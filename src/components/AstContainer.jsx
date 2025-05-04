import React from "react";
import Button from "./Button";
import Btnlg from "./Btnlg";
import Btnplain from "./btnplain";

function AstContainer() {


  return (
    <div className="bg-white rounded-xl shadow-md p-12 m-10 font-poppins max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text on the left */}
        <div className="text-xl md:text-2xl font-bold max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis!
        </div>

        {/* Buttons on the right */}
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Btnlg text="elit. Omnis" />
          <Btnplain text="amet consectetur" />
        </div>
      </div>
    </div>
  );
}

export default AstContainer;
