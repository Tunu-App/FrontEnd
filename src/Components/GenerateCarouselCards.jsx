import { Link } from "react-router-dom";
import { sleepSoundsData } from "./CarouselData";
import { moodLiftersData } from "./CarouselData";
import { meditateData } from "./CarouselData";
import SlidingCard from "./SlidingCard";

export function generateSleepCarouselCards() {
  const cardArray = sleepSoundsData.map((item, index) => {
    return sleepSoundsCarouselCards(
      index,
      item.heading,
      item.time,
      item.image,
      item.icon,
      item.link
    );
  });

  const data = {
    config: {
      itemsToShow: 1.8,
    },
    array: cardArray,
  };

  return data;
}

function sleepSoundsCarouselCards(index, heading, time, image, icon, link) {
  return (
    <div className="w-full">
      <Link to={link}>
        <div
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-[200px] rounded-[16px] p-[10px] flex flex-col justify-between "
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
  const cardArray = meditateData.map((item, index) => {
    return generateMeditateCard(
      index,
      item.heading,
      item.time,
      item.image,
      item.icon,
      item.link
    );
  });

  return cardArray;
}

export function generateMeditateCard(index, heading, time, image, icon, link) {
  return (
    <Link to={link}>
      <div
        key={index}
        style={{ backgroundImage: `url(${image})` }}
        className="w-[165px] bg-cover h-[200px] rounded-[16px] p-[10px] flex flex-col justify-between "
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
  );
}
