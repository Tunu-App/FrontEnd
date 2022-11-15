import React from "react";

function ButtonSelect({ text, link }) {
  return (
    <div>
      <button className="border-[#DCDEE0] border-[2px] w-full py-4 my-2 rounded-full">
        {text}
      </button>
    </div>
  );
}

export default ButtonSelect;
