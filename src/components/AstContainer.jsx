import React from "react";
import Button from "./Button";

function AstContainer() {
  const btnClasses = "text-md px-4 py-2 cursor-pointer rounded-lg";

  return (
    <div className="bg-white rounded-xl shadow-md p-12 m-10 font-poppins max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text on the left */}
        <div className="text-xl md:text-2xl font-bold max-w-3xl">
          Test NextBillion.ai route planning APIs with your logistics data and
          constraints.
        </div>

        {/* Buttons on the right */}
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Button
            className={`${btnClasses} text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 transition-opacity duration-300`}
            text="Request a Live Demo"
          />
          <Button
            className={`${btnClasses} border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors duration-300`}
            text="Read the Docs"
          />
        </div>
      </div>
    </div>
  );
}

export default AstContainer;
