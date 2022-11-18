import React, { useState } from "react";

function TextInput({ placeholder, getFunction, type, seeText }) {
  const [showPassword, setShowPassword] = useState(seeText);
  return (
    <div className="relative border-[#DCDEE0] items-center outline-[#DCDEE0] rounded-[8px] border-2 flex">
      <p className="absolute bg-white p-2 text-[#7B7D7E] top-[-20px] left-[6px]">
        {placeholder}
      </p>
      <input
        onChange={getFunction}
        type={showPassword ? "text" : "password"}
        className="w-full  px-[12px]  rounded-[8px] text-[#111111] focus:outline-none py-[16px]"
      />
      {type == "password" && (
        <div
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="w-[24px] mr-[18px] h-[24px] bg-contain bg-no-repeat bg-[url('./assets/images/password-eye.png')]"
        ></div>
      )}
    </div>
  );
}

export default TextInput;
