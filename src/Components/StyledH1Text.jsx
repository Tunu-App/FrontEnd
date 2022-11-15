import React from "react";

function StyledH1Text({ text, marginBtm }) {
  return (
    <div
      style={{ marginBottom: `${marginBtm}` }}
      className="text-[#111111] text-[24px] font-bold"
    >
      {text}
    </div>
  );
}

export default StyledH1Text;
