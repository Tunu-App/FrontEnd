import React, { useState, useEffect } from "react";
import FilterTabs from "../Components/FilterTabs";
import { generateMeditateCardArray } from "../Components/GenerateCarouselCards";

function Meditate() {
  return (
    <div className="flex relative flex-col mt-[172px]">
      <div className="w-full fixed top-0 z-[-10] h-[200px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/meditation.png')]"></div>
      <div
        className={
          "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <h1 className="text-[#111111] text-[28px] font-bold mb-[16px]">
          Meditation
        </h1>

        <div>
          <FilterTabs />
        </div>

        <div className="mt-[48px] mb-[172px] grid grid-cols-2 gap-4">
          {generateMeditateCardArray()}
        </div>
      </div>
    </div>
  );
}

export default Meditate;
