import React from "react";

function ButtonSelect({ text, link, selected, icon, nightMode }) {
  return (
    <div>
      <button
        className={
          selected
            ? "text-[#111111] bg-[#FFBD3D] hover:bg-[#FFBD3D] w-full  flex items-center justify-center py-4 my-2 rounded-full"
            : "border-[#DCDEE0] border-[2px] hover:bg-[#FFBD3D] hover:text-[#111111] hover:border-none  w-full text-[#0E816C] flex items-center justify-center py-4 my-2 rounded-full"
        }
      >
        <div className="mr-[11px]">{icon}</div>
        <p
          className={
            nightMode ? " text-white" : " text-[#111111]"
          }
        >
          {text}{" "}
        </p>
      </button>
    </div>
  );
}

export default ButtonSelect;
