import React from "react";

function TextInput({ placeholder, getFunction, type }) {
  return (
    <div className="relative">
      <p className="absolute bg-white p-2 text-[#7B7D7E] top-[-20px] left-[6px]">
        {placeholder}
      </p>
      <input
        onChange={getFunction}
        type="text"
        className="w-full border-[#DCDEE0] outline-[#DCDEE0] px-[12px] text-[#111111]  rounded-[8px] border-2 py-[16px]"
      />
    </div>
  );
}

export default TextInput;
