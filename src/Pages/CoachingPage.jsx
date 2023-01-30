import React, { useState, useEffect } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import TunuActionCard from "../Components/TunuActionCard";
import CardCarousel from "../Components/CardCarousel";
import { generateMoodLftCardArray } from "../Components/GenerateCarouselCards";
import { generateSleepCarouselCards } from "../Components/GenerateCarouselCards";
import ButtonSelect from "../Components/ButtonSelect";
import { checkTime } from "../Layout/Utils";

function CoachingPage() {
  const nightMode = checkTime;
  return (
    <div className="flex relative flex-col mb-[48px] mt-[172px]">
      <div
        className={
          nightMode()
            ? "w-full h-[350px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/home-night-mode.png')]"
            : "w-full h-[350px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/coaching-banner.png')]"
        }
      ></div>
      <div
        className={
          nightMode()
            ? "w-full h-full bg-[#3D55AB] pt-[29px] px-4 rounded-[24px] mt-[-20px]"
            : "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <h1
          className={
            nightMode()
              ? "text-white text-[24px] font-bold "
              : "text-[#111111] text-[24px] font-bold "
          }
        >
          What kind of coaching would you like to schedule?
        </h1>
        <p
          className={
            nightMode()
              ? "text-[16px] mt-[5px] text-[#A5B9FF] "
              : "text-[16px] mt-[5px] text-[#404142] "
          }
        >
          Select one option to start your journey.
        </p>

        <div className="mt-[16px] mb-[100px] grid grid-cols-1 gap 5">
          <ButtonSelect
            text={"Stress management"}
            link={"/coaching/book"}
            nightMode={nightMode()}
          />
          <ButtonSelect
            text={"Personal development"}
            link={"/coaching/book"}
            nightMode={nightMode()}
          />
          <ButtonSelect
            text={"Sleep therapy"}
            link={"/coaching/book"}
            nightMode={nightMode()}
          />
          <ButtonSelect
            text={"Career development"}
            link={"/coaching/book"}
            nightMode={nightMode()}
          />
          <ButtonSelect
            text={"Not sure"}
            link={"/coaching/book"}
            nightMode={nightMode()}
          />
        </div>

        <div className="mt-[48px]"></div>
      </div>
    </div>
  );
}

export default CoachingPage;
