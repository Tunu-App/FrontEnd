import React, { useState, useEffect, useContext } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import TunuActionCard from "../Components/TunuActionCard";
import CardCarousel from "../Components/CardCarousel";
import { generateMoodLftCardArray } from "../Components/GenerateCarouselCards";
import { generateSleepCarouselCards } from "../Components/GenerateCarouselCards";
import { Link } from "react-router-dom";
import UserContext from "../Layout/UserContext";
import { checkTime, getSleepSoundsApiData, getUserName } from "../Layout/Utils";
import { getUser } from "../service/AuthService";

function Home() {
  const nightMode = checkTime;

  return (
    <div className="flex relative flex-col mb-[48px] mt-[172px]">
      <div
        className={
          nightMode()
            ? "w-full h-[350px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/home-night-mode.png')]"
            : "w-full h-[350px] fixed top-0 z-[-10] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/tunu-home-banner.png')]"
        }
      ></div>
      <div
        className={
          nightMode()
            ? "w-full h-full bg-[#3D55AB] pt-[29px] px-4 rounded-[24px] mt-[-20px]"
            : "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <h1 className="text-[#111111] text-[28px] font-bold mb-[16px]">
          Hey{" "}
          <span className={nightMode() ? "text-[#A5B9FF]" : "text-[#12A187]"}>
            {getUserName()},
          </span>
        </h1>
        <StyledH1Text
          mode={nightMode()}
          text={"Improve your mood"}
          marginBtm={"21px"}
        />

        <div className="">
          <TunuActionCard
            heading={"How are you feeling today?"}
            paragraph={"Take a moment to reflect on how you’re feeling today"}
            btnText={"Track my mood"}
            color={"#FFBD3D"}
            btnRoute={{ link: "/moodtracker", data: {} }}
          />
        </div>
        <div className="mt-[25px] flex justify-between">
          <h1 id="font-lato" className="font-bold font-lato">
            Moodlifters for you
          </h1>
          <div className="flex items-center ">
            <Link to={"/explore/moodlifters"}>
              <p id="font-lato" className="mr-2 text-[#0E816C]">
                View More
              </p>
            </Link>

            <div>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L6 6L2 10"
                  stroke="#0E816C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <CardCarousel
            cardArray={generateMoodLftCardArray()}
            showItems={1.2}
          />
        </div>

        <div className="mt-[24px]">
          <StyledH1Text text={"Enhance your sleep"} marginBtm={"14px"} />
        </div>

        <div className="">
          <TunuActionCard
            heading={"Listen to a sleep story or sound"}
            paragraph={
              "Explore our collection of sleep stories and sounds curated for you."
            }
            btnText={"Explore sleep sounds"}
            color={"#12A187"}
            btnRoute={{ link: "/sleep", data: {} }}
          />
        </div>

        <div className="mt-[25px] flex justify-between">
          <h1 id="font-lato" className="font-bold font-lato">
            Sleep sounds for you
          </h1>
          <div className="flex items-center ">
            <Link to={"/sleepsounds"}>
              <p id="font-lato" className="mr-2 text-[#0E816C]">
                View More
              </p>
            </Link>
            <div>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L6 6L2 10"
                  stroke="#0E816C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <CardCarousel
            cardArray={generateSleepCarouselCards()}
            showItems={1.8}
          />
        </div>

        <div className="mt-[20px]">
          <TunuActionCard
            heading={"Track your sleep"}
            paragraph={
              "Take a moment to assess some basic parameters of your sleep to see what needs improving. "
            }
            btnText={"Coming soon"}
            color={"#4994EC"}
            btnRoute={{ link: "/", data: {} }}
          />
        </div>
        <div className="mt-[48px]"></div>
      </div>
    </div>
  );
}

export default Home;
