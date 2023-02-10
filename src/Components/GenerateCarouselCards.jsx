import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { meditateData } from "./CarouselData";
import SlidingCard from "./SlidingCard";
import { getMeditateApiData, getSleepSoundsApiData } from "../Layout/Utils";
import { getMoodliftersApiData } from "../Layout/Utils";

export function generateSleepCarouselCards() {
  const [sleepSoundsData, setSleepSoundsData] = useState([]);

  async function getData() {
    let result = await getSleepSoundsApiData();
    setSleepSoundsData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  const cardArray = sleepSoundsData.map((item, index) => {
    return sleepSoundsCarouselCards(
      index,
      item.title,
      item.time,
      item.thumbnail,
      item.icon,
      `/sleepsounds/:${item.id}`,
      item
    );
  });

  const data = {
    config: {
      itemsToShow: 1.4,
    },
    array: cardArray,
  };

  return data;
}

function sleepSoundsCarouselCards(
  index,
  heading,
  time,
  image,
  icon,
  link,
  data
) {
  return (
    <div key={index} className="w-full">
      <Link to={{ pathname: link, state: data }}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className=" h-[200px] bg-center bg-cover rounded-[16px] p-[10px] flex flex-col justify-between "
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

export function generateMoodLftCardArray() {
  const [moodLiftersData, setMoodliftersData] = useState([]);

  // THIS FUNCTION GETS THE MOODLIFTERS DATA FROM THE API
  async function getData() {
    let result = await getMoodliftersApiData();
    setMoodliftersData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  const cardArray = moodLiftersData.map((item, index) => (
    <SlidingCard
      key={index}
      heading={item.heading}
      image={item.image}
      caption={item.caption}
      time={item.time}
      link={item.link}
    />
  ));

  const data = {
    config: {
      itemsToShow: 1.9,
    },
    array: cardArray,
  };

  return data;
}

export function generateMeditateCardArray() {
  const [meditateData, setMeditateData] = useState([]);

  // THIS FUNCTION GETS THE MEDITATION DATA FROM THE API
  async function getData() {
    let result = await getMeditateApiData();
    setMeditateData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  const cardArray = meditateData.map((item, index) => {
    return generateMeditateCard(
      item.id,
      item.title,
      item.time,
      item.thumbnail,
      item.icon,
      `/sleepsounds/:${item.id}`,
      item
    );
  });

  return cardArray;
}

export function generateMeditateCard(
  index,
  heading,
  time,
  image,
  icon,
  link,
  data
) {
  return (
    <Link key={index} to={{ pathname: link, state: data }}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full bg-cover bg-center h-[200px] rounded-[16px] p-[10px] flex flex-col justify-between "
      >
        <div className="flex justify-end">
          <div
            style={{ backgroundImage: `url(${icon})` }}
            className="w-[24px] h-[24px] bg-center bg-cover bg-no-repeat bg-[url('./assets/images/play-icon.png')]"
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
  );
}
export function generateSleepSoundsCard(
  index,
  heading,
  time,
  image,
  icon,
  link
) {
  return (
    <Link to={link}>
      <div
        key={index}
        style={{ backgroundImage: `url(${image})` }}
        className="w-[165px] h-[200px] rounded-[16px] p-[10px] flex flex-col justify-between "
      >
        <div className="flex justify-end">
          <div
            style={{ backgroundImage: `url(${icon})` }}
            className="w-[24px] h-[24px]  bg-center bg-cover bg-no-repeat bg-[url('./assets/images/play-icon.png')]"
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
  );
}
