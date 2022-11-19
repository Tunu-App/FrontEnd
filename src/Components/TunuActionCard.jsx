import React from "react";
import ButtonMain from "./ButtonMain";

function TunuActionCard({ heading, paragraph, color, btnText, btnRoute }) {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="w-full px-4 py-[24px] rounded-[15px]"
    >
      <div>
        <h1 className="font-bold text-[22px] w-3/4 leading-[30px]">{heading}</h1>
        <p className="w-3/4 mt-2">{paragraph}</p>
        <div className="mt-4">
          <ButtonMain text={btnText} route={btnRoute} actionCard={true} />
        </div>
      </div>
    </div>
  );
}

export default TunuActionCard;
