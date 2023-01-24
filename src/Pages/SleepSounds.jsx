import React, { useState, useEffect } from "react";
import CardCarousel from "../Components/CardCarousel";
import { getToken } from "../service/AuthService";
import { Link } from "react-router-dom";
import FilterTabs from "../Components/FilterTabs";
import axios from "axios";
import {
  generateMeditateCardArray,
  generateSleepCarouselCards,
} from "../Components/GenerateCarouselCards";
import TunuActionCard from "../Components/TunuActionCard";

function SleepSounds() {
  const [showDownloads, setShowDownloads] = useState(false);
  const [sleepData, setSleepData] = useState([]);
  // THIS FUNCTION LISTS ALL THE USER'S SAVED MOODS

  // GET THE USER'S SESSION TOKEN FROM THE SESSION STORAGE AND USE
  const AUTHTOKEN = getToken();

  // MAKE A SIMPLE REQUEST TO GET THE USER'S DATA FROM THE API ENDPOINT ONCE THE PAGE LOADS
  const API =
    "http://tunuapi-staging.eu-west-2.elasticbeanstalk.com/v1/sound/sleep";

  function getSleepSounds() {
    axios({
      method: "get",
      url: API,
      headers: {
        Authorization: AUTHTOKEN,
      },
    }).then(
      (response) => {
        if (response.status == 200) {
          setSleepData(response.data);
        } else {
          // setError(response.data.errors[0]);
          // console.log(response.data.data)
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    getSleepSounds();
  }, []);

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
          {sleepData.map((item, index) => {
            return sleepSoundsCarouselCards(
              item.id,
              item.title,
              "8am",
              item.thumbnail,
              "",
              `/sleepsounds/${item.id}`,
              item
            );
          })}
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
