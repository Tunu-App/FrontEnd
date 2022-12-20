import React from "react";

function StyledParagraph({ text, marginBtm }) {
  return (
    <div style={{ marginBottom: `${marginBtm}` }} className="text-[#404142]">
      {text}
    </div>
  );
}

export default StyledParagraph;
