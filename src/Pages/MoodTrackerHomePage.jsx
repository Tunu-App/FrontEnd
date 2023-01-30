import React, { useState, useEffect } from "react";
import TunuActionCard from "../Components/TunuActionCard";
import { checkTime } from "../Layout/Utils";

function MoodTrackerHomePage() {
  const nightMode = checkTime;
  return (
    <div className="flex relative flex-col mb-[48px] mt-[172px]">
      <div
        className={
          nightMode()
            ? "w-full h-full bg-[#3D55AB] pt-[15px] px-4 rounded-[24px] mt-[-20px]"
            : "w-full h-full bg-white pt-[15px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <div className="mb-[17px]">
          <TunuActionCard
            heading={"Mood tracker"}
            paragraph={"Take a moment to reflect on how you’re feeling today"}
            btnText={"Track my mood"}
            color={"#FFBD3D"}
            btnRoute={{ link: "/moodtracker", data: {} }}
          />
        </div>
        <div className="">
          <TunuActionCard
            heading={"Mood history"}
            paragraph={
              "See how your mood has changed since you started tracking. "
            }
            btnText={"See my mood history"}
            color={"#5AA4FB"}
            btnRoute={{ link: "/moodhistory", data: {} }}
          />
        </div>

        <div className="mt-[68px]"></div>
      </div>
    </div>
  );
}

export default MoodTrackerHomePage;
