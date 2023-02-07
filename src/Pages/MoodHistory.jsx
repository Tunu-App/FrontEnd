import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { moreIcon, noteIcon, plusIcon } from "../assets/images/Vectors";
import FilterTabs from "../Components/FilterTabs";
import { getToken } from "../service/AuthService";
import moment from "moment";
import { Link } from "react-router-dom";

function MoodHistory() {
  const [moodData, setMoodData] = useState([]);
  // THIS FUNCTION LISTS ALL THE USER'S SAVED MOODS

  // GET THE USER'S SESSION TOKEN FROM THE SESSION STORAGE AND USE
  const AUTHTOKEN = getToken();

  // MAKE A SIMPLE REQUEST TO GET THE USER'S DATA FROM THE API ENDPOINT ONCE THE PAGE LOADS
  const API = "https://api.tunu.io/v1/moodtracker";

  function getMoodData() {
    axios({
      method: "get",
      url: API,
      headers: {
        Authorization: AUTHTOKEN,
      },
    }).then(
      (response) => {
        if (response.status == 200) {
          setMoodData(response.data);
          console.log(response.data);
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
    getMoodData();
  }, []);

  function ParseDate(dateString) {
    const date = moment(dateString).format("ddd, MMM Do YYYY, h:mm:ss a");
    // const today = moment("HH")
    const shortDate = date.split(",")[1];
    return shortDate;
  }

  function generateItems() {
    const cards = moodData.map((items, index) => {
      return (
        <Link to={{ pathname: `moodhistory/:${items.id}`, state: items }}>
          <div
            key={items.id}
            className="bg-[#EFF2F4] flex mb-[8px] items-center justify-between rounded-[12px] py-[16px] px-[20px]"
          >
            {" "}
            <div className="flex items-center">
              <h1 className="font-bold text-[28px] mr-[10px]">{items.icon}</h1>
              <p className="text-[16px] mr-[5px] ">I felt {items.feeling}</p>
              {items.note != "" ? <div>{noteIcon()}</div> : ""}
            </div>
            <p className="text-[14px] text-[#404142]">
              {items.chapter} <span>{ParseDate(items.updatedAt)}</span>
            </p>
            <div>{moreIcon()}</div>
          </div>
        </Link>
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
          <h1 className="text-[#111111] text-[28px] font-bold ">Your moods</h1>{" "}
          <Link to={"/moodtracker"}>
            <p className="text-[#0E816C] flex">
              <span className="mr-[2px]">{plusIcon()}</span> Track your mood
            </p>
          </Link>
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

        <div className="mt-[20px] mb-[125px]">
          {moodData ? (
            generateItems()
          ) : (
            <p className="text-[#4a4747b3]">
              Nothing here yet. Track your mood to get started.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodHistory;
