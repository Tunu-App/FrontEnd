import React from "react";

function ButtonSelect({ text, link, selected }) {
  return (
    <div>
      <button
        className={
          selected
            ? "text-[#111111] bg-[#FFBD3D] w-full py-4 my-2 rounded-full"
            : "border-[#DCDEE0] border-[2px]  w-full py-4 my-2 rounded-full"
        }
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonSelect;
