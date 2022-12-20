import React from "react";

function SlidingCard({ image, heading, caption, time }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-[255px] h-[160px] rounded-[16px] p-[10px] flex flex-col justify-between "
    >
      <div>
        <div className="w-[24px] h-[24px] bg-cover bg-no-repeat bg-[url('./assets/images/play-icon.png')]"></div>
      </div>
      <div>
        <h1 id="font-lato" className="font-bold font-lato text-white">
          {heading}
        </h1>
        <div className="flex justify-between">
          <p className="text-[12px] text-white">{caption}</p>
          <p className="text-[12px] font-[500] text-white ">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default SlidingCard;
