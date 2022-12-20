import React from "react";

function StyledH1Text({ text, marginBtm, mode }) {
  return (
    <div
      style={{ marginBottom: `${marginBtm}` }}
      className={
        mode
          ? "text-white text-[24px] font-bold"
          : "text-[#111111] text-[24px] font-bold"
      }
    >
      {text}
    </div>
  );
}

export default StyledH1Text;
