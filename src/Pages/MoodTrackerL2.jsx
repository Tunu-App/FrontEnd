import React, { useState } from "react";
import { moodData } from "../Components/MoodTrackerData";
import { useHistory } from "react-router-dom";
import { getUserName } from "../Layout/Utils";

function MoodTrackerL2() {
  const history = useHistory();
  const [selected, setSelected] = useState({});
  const [path, setPath] = useState(history.location.pathname);
  console.log(path);
  const l2MoodArray = history.location.state;

  function displayNextLevelMoodArray(id, NextLevelMoodData) {
    history.push({
      pathname: `${path}/:${id}`,
      state: NextLevelMoodData,
    });
  }

  const currentMood = history.location.pathname.split("/:")[1];

  function renderMood(data) {
    const moodCard = data.map((mood, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            displayNextLevelMoodArray(mood.mood, mood.l3);
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
          Why are you feeling{" "}
          <span className="text-[#d3aa49]">{`${currentMood} ?`}</span> Are you ?
        </h1>
      </div>

      <div className="mt-[14px]"></div>

      <div className="grid grid-cols-3 gap-[11px] mb-[101px]">
        {renderMood(l2MoodArray)}
      </div>
    </div>
  );
}

export default MoodTrackerL2;
