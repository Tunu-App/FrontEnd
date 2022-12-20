import React from "react";
import { useParams } from "react-router-dom";
import relaxation from "../assets/images/explore-meditate.png";
import {
  downloadVector,
  heartVector,
  uploadVector,
} from "../assets/images/Vectors";

function ExploreMeditaionDetails() {
  const { id } = useParams();

  const data = [
    { title: "Choosing what to say", chapter: "Chapter 1 .", time: "25m" },
    {
      title: "Expanding your voice",
      chapter: "Chapter 2 .",
      time: "25m",
    },
    { title: "Knowing when to speak", chapter: "Chapter 3 .", time: "25m" },
    { title: "Relaxing actively", chapter: "Chapter 4 .", time: "25m" },
    {
      title: "Captivating your audience",
      chapter: "Chapter 5 .",
      time: "25m",
    },
  ];

  function generateItems() {
    const cards = data.map((items, index) => {
      return (
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
      );
    });

    return cards;
  }

  return (
    <div className="px-[15px]">
      <div className="w-full grid place-items-center mt-[106px] px-[15px]">
        <div
          style={{ backgroundImage: `url(${relaxation})` }}
          className="w-[200px] h-[200px] rounded-[16px] bg-cover"
        ></div>
      </div>

      <div className="w-full ">
        <h1 className="font-bold text-[22px] text-[#111111] text-center mt-[12px] mb-[8px]">
        Finding your own voice
        </h1>

        <p className="text-black text-center flex justify-center">
          {" "}
          Meditation <span className="">.</span> <span>1h 25m</span>
        </p>

        <div className="flex w-full justify-center mt-[14px] gap-[8px]">
          <div className="w-[40px] h-[40px] bg-[#EFF2F4] rounded-full flex items-center justify-center ">
            {heartVector()}
          </div>
          <div className="w-[40px] h-[40px] bg-[#EFF2F4] rounded-full flex items-center justify-center ">
            {downloadVector()}
          </div>
          <div className="w-[40px] h-[40px] bg-[#EFF2F4] rounded-full flex items-center justify-center ">
            {uploadVector()}
          </div>
        </div>

        <p className="mt-[18px] ">
          Leo molestie faucibus non enim orci. Dui nullam massa, molestie massa
          arcu, sem. Maecenas imperdiet quam duis nunc aenean proin.{" "}
        </p>
      </div>

      <div className="mt-4 mb-[184px]">{generateItems()}</div>
    </div>
  );
}

export default ExploreMeditaionDetails;
