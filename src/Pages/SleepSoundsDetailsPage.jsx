import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../service/AuthService";
import { Link } from "react-router-dom";
import relaxation from "../assets/images/sleep-sounds.png";
import {
  downloadVector,
  heartVector,
  uploadVector,
} from "../assets/images/Vectors";

function SleepSoundsDetailsPage() {
  const { state } = useLocation();

  console.log(state);

  function generateItems() {
    const cards = state.chapters.map((items, index) => {
      return (
        <Link
          key={index}
          to={{
            pathname: `/sleepsounds/${items.id}/:chapter${index + 1}`,
            state: { thumbnail: state.thumbnail, items },
          }}
        >
          {" "}
          <div
            key={items.id}
            className="bg-[#5770C8] mb-[8px] rounded-[12px] py-[16px] px-[20px]"
          >
            {" "}
            <p className="text-[16px] text-white ">{items.title}</p>
            <p className="text-[12px] text-white opacity-70">
              Chapter {index + 1} <span>{items.time}</span>
            </p>
          </div>
        </Link>
      );
    });

    return cards;
  }

  return (
    <div className="px-[15px] bg-[#3D55AB] min-h-screen">
      <div className="w-full grid place-items-center pt-[106px] ">
        <div
          style={{ backgroundImage: `url(${state.thumbnail})` }}
          className="w-[200px] h-[200px] rounded-[16px] bg-center bg-cover"
        ></div>
      </div>

      <div className="w-full ">
        <h1 className="font-bold text-[22px] text-white opacity-70 text-center mt-[12px] mb-[8px]">
          {state.title}
        </h1>

        <p className="text-black text-center text-[#ffffffb3] flex justify-center">
          {" "}
          Sleep <span className="">.</span> <span>1h 25m</span>
        </p>

        <div className="flex w-full justify-center mt-[14px] gap-[8px]">
          <div className="w-[40px] h-[40px] bg-[#5770C8] rounded-full flex items-center justify-center ">
            {heartVector(true)}
          </div>
          <div className="w-[40px] h-[40px] bg-[#5770C8] rounded-full flex items-center justify-center ">
            {downloadVector(true)}
          </div>
          <div className="w-[40px] h-[40px] bg-[#5770C8] rounded-full flex items-center justify-center ">
            {uploadVector(true)}
          </div>
        </div>

        <p className="mt-[18px] text-white opacity-70 ">{state.description}</p>
      </div>

      <div className="mt-4 pb-[184px]">{generateItems()}</div>
    </div>
  );
}

export default SleepSoundsDetailsPage;
