import React from "react";

function ButtonMain({ text, disabled }) {
  return (
    <div>
      <button
        className={
          disabled
            ? "text-white bg-[#DCDEE0] w-full py-4 my-2 rounded-full"
            : "text-white bg-[#0E816C] w-full py-4 my-2 rounded-full"
        }
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonMain;
