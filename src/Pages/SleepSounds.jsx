import React, { useState, useEffect } from "react";
import CardCarousel from "../Components/CardCarousel";
import FilterTabs from "../Components/FilterTabs";
import {
  generateMeditateCardArray,
  generateSleepCarouselCards,
} from "../Components/GenerateCarouselCards";
import TunuActionCard from "../Components/TunuActionCard";

function SleepSounds() {
  const [showDownloads, setShowDownloads] = useState(false);
  const data = [
    {
      text: "all",
    },
    {
      text: "Stories",
    },
    {
      text: "Sounds",
    },
    {
      text: "Meditation",
    },
    {
      text: "Music",
    },
  ];

  function generateMenus() {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="px-[12px] py-[4px] bg-[#E7E3FF] rounded-full mr-[8px]"
        >
          {item.text}
        </div>
      );
    });
  }

  return (
    <div className="flex relative flex-col mt-[172px]">
      <div className="w-full fixed top-0 z-[-10] h-[200px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/sleep-banner.png')]"></div>
      <div
        className={
          "w-full h-full bg-[#31458C] pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <h1 className="text-white text-[24px] font-bold">
          Recommended for you
        </h1>
        <p className="text-[#A5B9FF]">Tap to play</p>

        <div>
          <div className="w-[345px] mt-[17px] rounded-[15px] h-[345px] bg-[url('./assets/images/sleep-sounds.png')]"></div>
        </div>

        <h1 className="text-white text-[24px] mt-[25px] mb-[21px] font-bold">
          Explore <span className="text-[#A5B9FF]">My downloads</span>
        </h1>
        {showDownloads && showDownloads()}
        <div>
          <CardCarousel
            cardArray={{ array: generateMenus() }}
            showItems={3.2}
          />
        </div>

        <div className="mt-[48px] mb-[172px] grid grid-cols-2 gap-4">
          {generateSleepCarouselCards().array}
        </div>
      </div>
    </div>
  );
}

export default SleepSounds;

function showDownloads() {
  return (
    <div className="mb-[17px]">
      <TunuActionCard
        heading={"You do not have any downloaded sounds"}
        paragraph={
          "Explore our collection of sleep stories and sounds and download your favourites. "
        }
        btnText={"Explore sleep sounds"}
        color={"#12A187"}
        btnRoute={{ link: "/sleepsounds", data: {} }}
      />
    </div>
  );
}
