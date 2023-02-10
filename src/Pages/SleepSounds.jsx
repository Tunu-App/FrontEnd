import React, { useState, useEffect } from "react";
import CardCarousel from "../Components/CardCarousel";
import { Link } from "react-router-dom";
import {
  generateMeditateCardArray,
  generateSleepCarouselCards,
} from "../Components/GenerateCarouselCards";
import TunuActionCard from "../Components/TunuActionCard";

function SleepSounds() {
  const [selectedMenu, setSelectedMenu] = useState("ALL");
  const allSounds = displayAllSounds();
  const sleepSounds = generateSleepCarouselCards().array;
  const meditationSounds = generateMeditateCardArray();
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
          onClick={() => {
            setSelectedMenu(item.text.toUpperCase());
          }}
          key={index * Math.ceil(Math.random() * 10000 * 4)}
          className={
            item.text.toUpperCase() == selectedMenu
              ? "px-[8px] py-[4px] bg-[#aba3d9] text-white rounded-full mr-[8px]"
              : "px-[8px] py-[4px] bg-[#E7E3FF] rounded-full mr-[8px]"
          }
        >
          {item.text}
        </div>
      );
    });
  }

  function displayAllSounds() {
    const meditateSounds = generateMeditateCardArray();
    const sleepSounds = generateSleepCarouselCards().array;
    const allSounds = meditateSounds.concat(sleepSounds);
    return allSounds;
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
          <div className="w-full mt-[17px] rounded-[15px] h-[345px] bg-center bg-cover bg-[url('https://tunu-media.s3.eu-west-2.amazonaws.com/Tunusleepwallpaper.jpeg')]"></div>
        </div>

        <h1 className="text-white text-[24px] mt-[25px] mb-[21px] font-bold">
          Explore
          {/* <span className="text-[#A5B9FF]">My downloads</span> */}
        </h1>
        {/* {showDownloads && showDownloads()} */}
        <div>
          <CardCarousel
            cardArray={{ array: generateMenus() }}
            showItems={3.2}
          />
        </div>

        <div className="mt-[48px] mb-[172px] grid grid-cols-2 gap-4">
          {/* {generateSleepCarouselCards().array}
          {generateMeditateCardArray()} */}
          {selectedMenu == "ALL" && allSounds}
          {selectedMenu === "SOUNDS" && sleepSounds}
          {selectedMenu === "MEDITATION" && meditationSounds}
          {selectedMenu === "STORIES" && (
            <p className="text-center w-full text-white">Coming Soon</p>
          )}
          {selectedMenu === "MUSIC" && (
            <p className="text-center w-full text-white">Coming Soon</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SleepSounds;

// function showDownloads() {
//   return (
//     <div className="mb-[17px]">
//       <TunuActionCard
//         heading={"You do not have any downloaded sounds"}
//         paragraph={
//           "Explore our collection of sleep stories and sounds and download your favourites. "
//         }
//         btnText={"Explore sleep sounds"}
//         color={"#12A187"}
//         btnRoute={{ link: "/sleepsounds", data: {} }}
//       />
//     </div>
//   );
// }

function sleepSoundsCarouselCards(
  index,
  heading,
  time,
  image,
  icon,
  link,
  item
) {
  return (
    <div key={index} className="w-full">
      <Link to={{ pathname: link, state: item }}>
        <div
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          className="w-full bg-center h-[200px] rounded-[16px] p-[10px] flex flex-col justify-between "
        >
          <div className="flex justify-end">
            <div
              style={{ backgroundImage: `url(${icon})` }}
              className="w-[24px] h-[24px] bg-cover bg-no-repeat bg-[url('./assets/images/play-icon.png')]"
            ></div>
          </div>
          <div>
            <h1 id="font-lato" className="font-bold font-lato text-white">
              {heading}
            </h1>
            <div className="flex justify-between">
              <p className="text-[12px] font-[500] text-white ">{time}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
