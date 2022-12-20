import React from "react";
import { plusIcon } from "../assets/images/Vectors";

import FilterTabs from "../Components/FilterTabs";

function SleepTrackerSummary({ nightMode }) {
  const data = [
    {
      heading: "Bedtime",
      detail: "10:30 PM",
    },
    {
      heading: "Sleep Latency",
      detail: "Over 20 minutes",
    },
    {
      heading: "Sleep duration",
      detail: "5 hours 15 minutes",
    },
    {
      heading: "Night time awakenings",
      detail: "2 - 3 times",
    },
    {
      heading: "Use of sleep medications",
      detail: "Yes",
    },
    {
      heading: "Subjective sleep quality",
      detail: "Average",
    },
    {
      heading: "Wake up time",
      detail: "3:45 AM ",
    },
    {
      heading: "Morning headaches",
      detail: "Yes",
    },
    {
      heading: "Daytime sleepiness",
      detail: "Yes",
    },
    {
      heading: "Daytime naps",
      detail: "Yes",
    },
    {
      heading: "Use of stimulants",
      detail: "Yes",
    },
    {
      heading: "Use of alcohol/depressants",
      detail: "Yes",
    },
  ];

  function borderGenerator(index) {
    if (index % 2 == 0) {
      if (index > 9) {
        return " py-[24px]";
      }
      return " border-b border-[#EFF2F4] py-[24px]";
    } else if (index > 9) {
      return "border-l border-[#EFF2F4] py-[24px]";
    } else {
      return "border-l border-b border-[#EFF2F4] py-[24px]";
    }
  }

  function generateItems() {
    const cards = data.map((items, index) => {
      return (
        <div key={index} className={borderGenerator(index)}>
          {" "}
          <p
            className={
              nightMode()
                ? "text-[12px] mb-[4px] text-center text-[#A5B9FF] "
                : "text-[12px] mb-[4px] text-center text-[#111111] "
            }
          >
            {items.heading}
          </p>
          <p
            id="font-lato"
            className={
              nightMode()
                ? "text-[14px] font-bold text-center text-white"
                : "text-[14px] font-bold text-center text-[#12A187]"
            }
          >
            {items.detail}
          </p>
        </div>
      );
    });

    return cards;
  }

  return (
    <div className="flex relative flex-col mt-[172px]">
      <div className="w-full fixed top-0 z-[-10] h-[200px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/sleep-banner.png')]"></div>
      <div
        className={
          nightMode()
            ? "w-full h-full bg-[#3D55AB] pt-[29px] px-4 rounded-[24px] mt-[-5px]"
            : "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-5px]"
        }
      >
        <div className="flex justify-between items-center mb-[16px]">
          <h1
            className={
              nightMode()
                ? "text-white text-[24px] font-bold "
                : "text-[#111111] text-[24px] font-bold "
            }
          >
            Your sleep data
          </h1>
          <p
            className={
              nightMode()
                ? "text-[#ffffff] text-[14px] flex items-center"
                : "text-[#0E816C] text-[14px] flex items-center"
            }
          >
            {" "}
            <a className="flex justify-center items-center" href="/sleeptracker">
              {" "}
              <span className="mr-[8px]">{plusIcon(nightMode())}</span> Track
              your sleep
            </a>{" "}
          </p>
        </div>

        <div className="pb-[19px]">
          <p className={nightMode() ? "text-white" : "text-[#111111b3]"}>
            Tracking your sleep helps you better identify specific changed that
            need to be made to help you sleep better. A good night’s sleep...
            Read more
          </p>
        </div>

        <h1
          className={
            nightMode()
              ? "mt-[19px] text-center font-[400] text-[#A5B9FF]"
              : "mt-[19px] text-[#111111] font-[400] text-center"
          }
        >
          BASELINE SLEEP DATA
        </h1>

        <div className="mt-[48px] mb-[172px] grid grid-cols-2">
          {generateItems()}
        </div>
      </div>
    </div>
  );
}

export default SleepTrackerSummary;
