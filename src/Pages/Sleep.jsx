import React, { useState, useEffect } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import TunuActionCard from "../Components/TunuActionCard";
import CardCarousel from "../Components/CardCarousel";
import { generateMoodLftCardArray } from "../Components/GenerateCarouselCards";
import { generateSleepCarouselCards } from "../Components/GenerateCarouselCards";

function Sleep({ nightMode }) {
  return (
    <div className="flex relative flex-col mb-[48px] mt-[172px]">
      <div
        className={
          nightMode()
            ? "w-full h-[210px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/sleep-banner.png')]"
            : "w-full h-[210px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/sleep-banner.png')]"
        }
      ></div>
      <div
        className={
          nightMode()
            ? "w-full h-full bg-[#3D55AB] pt-[15px] px-4 rounded-[24px] mt-[-20px]"
            : "w-full h-full bg-white pt-[15px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <div className="mb-[17px]">
          <TunuActionCard
            heading={"Listen to a sleep story or sound"}
            paragraph={
              "Explore our collection of sleep stories and sounds curated for you."
            }
            btnText={"Explore sleep sounds"}
            color={"#12A187"}
            btnRoute={{ link: "/sleepsounds", data: {} }}
          />
        </div>
        <div className="">
          <TunuActionCard
            heading={"Track your sleep"}
            paragraph={
              "Take a moment to assess some basic parameters of your sleep to see what needs improving. "
            }
            btnText={"Track your sleep"}
            color={"#4994EC"}
            btnRoute={{ link: "/sleeptracker", data: {} }}
          />
        </div>

        <div className="mt-[68px]"></div>
      </div>
    </div>
  );
}

export default Sleep;
