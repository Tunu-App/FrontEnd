import React from "react";
import { Link } from "react-router-dom";
import ExploreSVG from "../assets/images/ExploreSVG";
import HomeSVG from "../assets/images/HomeSVG";
import JournalSVG from "../assets/images/JournalSVG";
import SleepSVG from "../assets/images/SleepSVG";
import SmileSVG from "../assets/images/SmileSVG";

function BottomNavigation({ nightMode }) {
  const NavigationData = [
    {
      icon: <HomeSVG />,
      nightIcon: HomeNightMode(),
      text: "Foryou",
      link: "/",
    },
    {
      icon: <SmileSVG />,
      nightIcon: moodNightMode(),
      text: "Mood",
      link: "/moodtracker-home",
    },
    {
      icon: <JournalSVG />,
      nightIcon: journalNightmode(),
      text: "Coaching",
      link: "/coaching",
    },
    {
      icon: <SleepSVG />,
      nightIcon: SleepNightSVG(),
      text: "Sleep",
      link: "/sleep",
    },
    {
      icon: <ExploreSVG />,
      nightIcon: exploreNightSVG(),
      text: "Explore",
      link: "/explore",
    },
  ];

  function generateBtns(nightMode) {
    const btns = NavigationData.map((item, index) => {
      return (
        <Link key={index} to={item.link}>
          <div className="flex flex-col justify-center items-center">
            {nightMode ? item.nightIcon : item.icon}
            <p
              className={
                nightMode
                  ? "text-[#A5B9FF] mt-[10px] "
                  : "text-[#111111] mt-[10px] "
              }
            >
              {item.text}
            </p>
          </div>
        </Link>
      );
    });

    return btns;
  }
  return (
    <div
      className={nightMode ? "p-4 bg-[#3D55AB]  w-full" : "p-4 bg-white w-full"}
    >
      <div className="grid grid-cols-5 gap-4 place-items-center content-center">
        {generateBtns(nightMode)}
      </div>
    </div>
  );
}

export default BottomNavigation;

function HomeNightMode(selected) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 5.69L17.5 10.19V18H15.5V12H9.5V18H7.5V10.19L12.5 5.69ZM12.5 3L2.5 12H5.5V20H11.5V14H13.5V20H19.5V12H22.5L12.5 3Z"
        fill="#A5B9FF"
      />
    </svg>
  );
}

function moodNightMode() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0156 11.0156C16.8441 11.0156 17.5156 10.3441 17.5156 9.51562C17.5156 8.6872 16.8441 8.01562 16.0156 8.01562C15.1872 8.01562 14.5156 8.6872 14.5156 9.51562C14.5156 10.3441 15.1872 11.0156 16.0156 11.0156Z"
        fill="#A5B9FF"
      />
      <path
        d="M9.01562 11.0156C9.84405 11.0156 10.5156 10.3441 10.5156 9.51562C10.5156 8.6872 9.84405 8.01562 9.01562 8.01562C8.1872 8.01562 7.51562 8.6872 7.51562 9.51562C7.51562 10.3441 8.1872 11.0156 9.01562 11.0156Z"
        fill="#A5B9FF"
      />
      <path
        d="M12.5156 18.0156C14.7956 18.0156 16.7356 16.3556 17.5156 14.0156H7.51562C8.29562 16.3556 10.2356 18.0156 12.5156 18.0156Z"
        fill="#A5B9FF"
      />
      <path
        d="M12.5056 2.01562C6.98562 2.01562 2.51562 6.49563 2.51562 12.0156C2.51562 17.5356 6.98562 22.0156 12.5056 22.0156C18.0356 22.0156 22.5156 17.5356 22.5156 12.0156C22.5156 6.49563 18.0356 2.01562 12.5056 2.01562ZM12.5156 20.0156C8.09562 20.0156 4.51562 16.4356 4.51562 12.0156C4.51562 7.59562 8.09562 4.01562 12.5156 4.01562C16.9356 4.01562 20.5156 7.59562 20.5156 12.0156C20.5156 16.4356 16.9356 20.0156 12.5156 20.0156Z"
        fill="#A5B9FF"
      />
    </svg>
  );
}

function journalNightmode() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.67 5L19.5 9.83V19H5.5V5H14.67ZM14.67 3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V9.83C21.5 9.3 21.29 8.79 20.91 8.42L16.08 3.59C15.71 3.21 15.2 3 14.67 3ZM7.5 15H17.5V17H7.5V15ZM7.5 11H17.5V13H7.5V11ZM7.5 7H14.5V9H7.5V7Z"
        fill="#A5B9FF"
      />
    </svg>
  );
}

function exploreNightSVG() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM10.5 18C6.09 18 2.5 14.41 2.5 10C2.5 5.59 6.09 2 10.5 2C14.91 2 18.5 5.59 18.5 10C18.5 14.41 14.91 18 10.5 18ZM5 15.5L12.51 12.01L16 4.5L8.49 7.99L5 15.5ZM10.5 8.9C11.11 8.9 11.6 9.39 11.6 10C11.6 10.61 11.11 11.1 10.5 11.1C9.89 11.1 9.4 10.61 9.4 10C9.4 9.39 9.89 8.9 10.5 8.9Z"
        fill="#A5B9FF"
      />
    </svg>
  );
}

function SleepNightSVG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6693 3.4603C11.9393 2.7503 11.3093 2.0103 10.5493 2.1203C5.02927 2.9203 1.07927 8.1903 2.20927 14.0003C2.98927 18.0203 6.29927 21.2103 10.3493 21.8703C14.0893 22.4803 17.5093 21.0003 19.6693 18.4303C20.1493 17.8603 19.8593 16.9503 19.1193 16.8103C13.0993 15.6603 9.43927 9.2703 11.6693 3.4603Z"
        fill="#FFC42C"
      />
    </svg>
  );
}
