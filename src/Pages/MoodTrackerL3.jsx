import React, { useState } from "react";
import { moodData } from "../Components/MoodTrackerData";
import { useHistory } from "react-router-dom";
import { getUser } from "../service/AuthService";
import { getUserName } from "../Layout/Utils";

function MoodTrackerL3() {
  const history = useHistory();
  const [selected, setSelected] = useState({});
  const path = history.location.pathname;
  const l3MoodArray = history.location.state;

  // GETTING THE USERDETAILS FROM THE SESSION STORAGE
  const user = getUser();

  function displayNextLevelMoodArray(id, NextLevelMoodData) {
    history.push({
      pathname: `${path}/:${id}/my-mood`,
      state: NextLevelMoodData,
    });
  }

  function renderMood(data) {
    const moodCard = data.map((mood, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            displayNextLevelMoodArray(mood.mood, mood);
            setSelected(mood);
          }}
          className={
            mood.mood == path
              ? "rounded-[12px] py-[24px] bg-[#FFF5E2] border-2 border-[#FFBD3D]"
              : "rounded-[12px] py-[24px] bg-[#EFF2F4] "
          }
        >
          <h1 className="text-center font-bold text-[36px]">{mood.icon}</h1>
          <p className="text-center text-[14px] font-[500]">{mood.mood}</p>
        </div>
      );
    });

    return moodCard;
  }

  return (
    <div className="mt-[120px] px-[15px]">
      <div className="mb-[5px]">
        <h1 className="font-bold text-[48px]">👋</h1>
      </div>

      <div>
        <h1 className="text-[#111111] font-bold text-[24px]">
          Hello <span className="text-[#12A187]">{getUserName()}</span>,
        </h1>
        <h1 className="text-[#111111] font-bold text-[24px]">
          How are you feeling today?
        </h1>
      </div>

      <div className="mt-[14px]"></div>

      <div className="grid grid-cols-3 gap-[11px] mb-[101px]">
        {renderMood(l3MoodArray)}
      </div>
    </div>
  );
}

export default MoodTrackerL3;
