import React, { useState } from "react";

function Checkbox({ getFunction }) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => {
        setChecked(!checked);
        getFunction();
      }}
      className={
        checked
          ? " w-[24px] h-[24px] flex items-center bg-[#0E816C] justify-center rounded-[6px] "
          : " w-[24px] h-[24px] flex items-center justify-center border-2 border-[#DADADA] rounded-[6px] "
      }
    >
      {checked && (
        <div className="w-[9px] h-[5.5px] bg-cover bg-no-repeat bg-[url('./assets/images/tick.png')]"></div>
      )}
    </div>
  );
}

export default Checkbox;
