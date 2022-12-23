import React, { useState, useEffect } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import TunuActionCard from "../Components/TunuActionCard";
import CardCarousel from "../Components/CardCarousel";
import { generateMoodLftCardArray } from "../Components/GenerateCarouselCards";
import { generateSleepCarouselCards } from "../Components/GenerateCarouselCards";

function ExplorePage({ nightMode }) {
  return (
    <div className="flex relative flex-col mb-[48px] mt-[172px]">
      <div
        className={
          nightMode()
            ? "w-full h-[350px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/home-night-mode.png')]"
            : "w-full h-[350px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/explore.png')]"
        }
      ></div>
      <div
        className={
          nightMode()
            ? "w-full h-full bg-[#3D55AB] pt-[29px] px-4 rounded-[24px] mt-[-20px]"
            : "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <h1 className="text-[#111111] text-[28px] font-bold ">Explore</h1>
        <p className="text-[16px] text-[#404142]">
          Resources to help you become better
        </p>

        <div className="mt-[18px]">
          <TunuActionCard
            heading={"Relax and relieve stress with meditation"}
            paragraph={
              "Listen to our guided meditation created for Africans just like you"
            }
            btnText={"Meditate"}
            color={"#FFBD3D"}
            btnRoute={{ link:"/meditate", data: {} }}
          />
        </div>

        <div className="mt-[16px]">
          <TunuActionCard
            heading={"Improve your performance"}
            paragraph={
              "Explore our library of wellness content to help you improve your wellbeing and performance. "
            }
            btnText={"Explore"}
            color={"#5AA4FB"}
            btnRoute={{ link: "/explore/mental-wellness", data: {} }}
          />
        </div>

        <div className="mt-[48px]"></div>
      </div>
    </div>
  );
}

export default ExplorePage;
