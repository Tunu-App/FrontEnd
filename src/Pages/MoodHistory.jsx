import React from "react";
import { moreIcon, noteIcon, plusIcon } from "../assets/images/Vectors";
import FilterTabs from "../Components/FilterTabs";

function MoodHistory() {
  const data = [
    {
      icon: "😫",
      note: true,
      title: "I feel overwhelmed",

      date: "Today",
    },
    {
      icon: "😫",
      note: false,
      title: "I felt respected",

      date: "Yesterday",
    },
    {
      icon: "😫",
      note: true,
      title: "I felt valued",
      date: "2 days ago",
    },
    {
      icon: "😫",
      note: false,
      title: "I felt annoyed",

      date: "Oct 25",
    },
    {
      icon: "😫",
      note: true,
      title: "I felt worried",

      date: "Oct 24",
    },
  ];

  function generateItems() {
    const cards = data.map((items, index) => {
      return (
        <div
          key={index}
          className="bg-[#EFF2F4] flex mb-[8px] items-center justify-between rounded-[12px] py-[16px] px-[20px]"
        >
          {" "}
          <div className="flex items-center">
            <h1 className="font-bold text-[28px] mr-[10px]">{items.icon}</h1>
            <p className="text-[16px] mr-[5px] ">{items.title}</p>
            {items.note ? <div>{noteIcon()}</div> : ""}
          </div>
          <p className="text-[14px] text-[#404142]">
            {items.chapter} <span>{items.date}</span>
          </p>
          <div>{moreIcon()}</div>
        </div>
      );
    });

    return cards;
  }

  return (
    <div className="flex relative flex-col mt-[172px]">
      <div className="w-full fixed top-0 z-[-10] h-[200px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/moodtracker-banner.png')]"></div>
      <div
        className={
          "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <div className="flex justify-between items-center mb-[16px]">
          <h1 className="text-[#111111] text-[28px] font-bold ">Your moods</h1>
          <p className="text-[#0E816C] flex">
            {" "}
            <span className="mr-[8px]">{plusIcon()}</span> Track your mood
          </p>
        </div>

        <div className="pb-[19px] border-b border-[#EFF2F4]">
          <p className="text-[#111111b3]">
            Tracking your mood helps you better identify what makes you feel the
            way you do. That way you can make necessary changes to improve how
            you feel.
          </p>
        </div>

        <div className="mt-[19px]">
          <FilterTabs />
        </div>

        <div className="mt-[20px] mb-[125px]">{generateItems()}</div>
      </div>
    </div>
  );
}

export default MoodHistory;
