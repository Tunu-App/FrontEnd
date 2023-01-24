import React, { useState } from "react";
import { moodData } from "../Components/MoodTrackerData";
import { useHistory } from "react-router-dom";
import ButtonMain from "../Components/ButtonMain";
import axios from "axios";
import { getToken } from "../service/AuthService";

function MoodTrackerFinalPage() {
  const history = useHistory();
  const [moodArray, setMoodArray] = useState(moodData[0][1][1][1][2]);
  const [selected, setSelected] = useState({});
  const [path, setPath] = useState(history.location.pathname.split(":")[1]);
  const [moodNotes, setMoodNotes] = useState("");

  const authToken = getToken();

  const moodPayload = {
    feeling: "happy",
    note: moodNotes,
  };

  function redirectToLevel2Mood(id) {
    history.push({
      pathname: `/moodtracker/:${id}/:${id}`,
      state: selected,
    });
  }
  const API =
    "http://tunuapi-staging.eu-west-2.elasticbeanstalk.com/v1/moodtracker";
  //   const config = {
  //     headers: {
  //       Authorization: authToken,
  //     },
  //   };

  const saveMood = () => {
    axios({
      method: "post",
      url: API,
      data: moodPayload,
      headers: {
        Authorization: authToken,
      },
    }).then(
      (response) => {
        if (response.data.status == true) {
          console.log(response.data);
          history.push("/moodhistory");
        } else {
          // setError(response.data.errors[0]);
          // console.log(response.data.data)
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  function getMoodNotes(e) {
    setMoodNotes(e.target.value);
  }

  return (
    <div className="mt-[120px] px-[15px]">
      <div className="mb-[5px]">
        <h1 className="font-bold text-[48px]">😫</h1>
      </div>

      <div>
        <h1 className="text-[#111111] font-bold text-[24px]">
          You feel <span className="text-[#12A187]">overwhelmed</span>,
        </h1>
        <p className="text-[#404142]">Care to share why you feel this way?</p>
      </div>

      <div className="mt-[14px]">
        <textarea
          onChange={getMoodNotes}
          rows={12}
          cols={30}
          className="border-[#DCDEE0] w-full rounded-[4px]  border-2 focus:outline-none p-2 text-[#7B7D7E]"
        ></textarea>
      </div>

      <div>
        <ButtonMain
          text={"Save"}
          disabled={false}
          runClickFunction={true}
          clickFunction={saveMood}
        />
      </div>
    </div>
  );
}

export default MoodTrackerFinalPage;
