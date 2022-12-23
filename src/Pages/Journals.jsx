import React from "react";
import { plusIcon } from "../assets/images/Vectors";
import FilterTabs from "../Components/FilterTabs";
import { Link } from "react-router-dom";
function Journals() {
  const data = [
    {
      title: "In as name to here them deny",
      chapter: "23 Oct 2022",
      time: "8:30am",
    },
    {
      title: "Are unpleasing occasional ",
      chapter: "22 Oct 2022",
      time: "10:30 pm",
    },
    {
      title: "Why painful the sixteen how",
      chapter: "23 Oct 2022",
      time: ", 8:30am",
    },
    { title: "Relaxing actively", chapter: "Chapter 4 .", time: "25m" },
    {
      title: "There spoke happy for you",
      chapter: "22 Oct 2022",
      time: "10:30 pm",
    },
  ];

  function generateItems() {
    const cards = data.map((items, index) => {
      return (
        <Link to={`/journals/text/${1}`}>
          <div
            key={index}
            className="bg-[#EFF2F4] mb-[8px] rounded-[12px] py-[16px] px-[20px]"
          >
            {" "}
            <p className="text-[16px] ">{items.title}</p>
            <p className="text-[12px] opacity-70">
              {items.chapter} <span>{items.time}</span>
            </p>
          </div>
        </Link>
      );
    });

    return cards;
  }

  return (
    <div className="flex relative flex-col mt-[172px]">
      <div className="w-full fixed top-0 z-[-10] h-[200px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/journals-home.png')]"></div>
      <div
        className={
          "w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <div className="flex justify-between items-center mb-[16px]">
          <h1 className="text-[#111111] text-[28px] font-bold ">
            Your journals
          </h1>

          <Link to={"/add-journal"}>
            <p className="text-[#0E816C] flex">
              {" "}
              <span className="mr-[8px]">{plusIcon()}</span> Write a journal
            </p>
          </Link>
        </div>

        <div className="pb-[19px] border-b border-[#EFF2F4]">
          <p className="text-[#111111b3]">
            Gain clarity by expressing by your thoughts and feelings into words.
            Write a note about what makes you feel the way...Read more
          </p>
        </div>

        <div className="mt-[19px]">
          <FilterTabs />
        </div>

        <div className="mt-[48px] mb-[172px]">{generateItems()}</div>
      </div>
    </div>
  );
}

export default Journals;
