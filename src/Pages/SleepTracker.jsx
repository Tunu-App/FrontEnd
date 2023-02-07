import React, { useState, useRef } from "react";
import ButtonMain from "../Components/ButtonMain";
import TextInput from "../Components/TextInput";
import { sleepTrackerQuestions } from "../Components/SleepQuestionsData";
import ButtonSelect from "../Components/ButtonSelect";
import { useHistory } from "react-router-dom";
import { checkTime } from "../Layout/Utils";
import TimeInput from "../Components/TimeInput";
import { getToken } from "../service/AuthService";

function SleepTracker() {
  let [questionId, setQuestionId] = useState(0);
  const [quizData, setQuizData] = useState(sleepTrackerQuestions);
  const history = useHistory();
  const nightMode = checkTime;
  // HERE THE USER'S INPUT IS RECORDED
  const [dayTimeNaps, setDayTimeNaps] = useState(true);
  const [sleepyDuringTheDay, setSleepyDuringTheDay] = useState(true);
  const [coffeeBeforeBed, setCoffeeBeforeBed] = useState(true);
  const [alcoholBeforeBed, setAlcoholBeforeBed] = useState(true);
  const [timeToBed, setTimeToBed] = useState("");
  const [sleepLatency, setSleepLatency] = useState(0);
  const [numberOfTimesWokenUp, setNumberOfTimesWokenUp] = useState(0);
  const [howLongToSLeepAfterInterruption, setHowLongToSLeepAfterInterruption] =
    useState(0);
  const [wakeUpTime, setWakeUpTime] = useState(0);
  const [useMedications, setUseMedications] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");
  const [wakeUpWithHeadache, setWakeUpWithHeadache] = useState(false);

  // const goToSummary = () => {
  //   // THIS FUNCTION POSTS THE USERS SLEEP DATA TO THE API ENDPOINT
  
  //   // GET THE USER'S SESSION TOKEN FROM THE SESSION STORAGE AND USE
  //   const AUTHTOKEN = getToken();
  
  //   // MAKE A SIMPLE REQUEST TO GET THE USER'S DATA FROM THE API ENDPOINT ONCE THE PAGE LOADS
  //   const API =
  //     "https://api.tunu.io/v1/sound/sleep";
  
  //   function getSleepSounds() {
  //     axios({
  //       method: "get",
  //       url: API,
  //       headers: {
  //         Authorization: AUTHTOKEN,
  //       },
  //     }).then(
  //       (response) => {
  //         if (response.status == 200) {
  //           setSleepData(response.data);
  //         } else {
  //           // setError(response.data.errors[0]);
  //           // console.log(response.data.data)
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  
  //   useEffect(() => {
  //     getSleepSounds();
  //   }, []);
  //   history.push({
  //     pathname: "/sleeptracker/summary",
  //     state: "data", // your data array of objects
  //   });
  // };

  function nextQuestion() {
    const totalQuestions = quizData.length;

    if (questionId == totalQuestions - 1) {
      goToSummary();
    } else {
      setQuestionId((questionId += 1));
    }
  }
  function prevQuestion() {
    console.log(questionId);
    if (questionId == 0) {
      setQuestionId(0);
    } else {
      setQuestionId((questionId -= 1));
    }
  }

  function getTimeToBed(time) {
    setTimeToBed(time);
  }
  function getWakeUpTime(time) {
    setWakeUpTime(time);
  }

  function renderSleepQuestions(id) {
    return (
      <div>
        <div className="mt-[20px]">
          <h1
            className={
              nightMode()
                ? "text-[24px] text-center font-bold text-white"
                : "text-[24px] text-center font-bold text-[#111111]"
            }
          >
            {id + 1 <= quizData.length
              ? quizData[id].question
              : quizData[0].question}
          </h1>
        </div>
        {renderOptions(
          id + 1 <= quizData.length ? quizData[id].options : quizData[0].options
        )}
      </div>
    );
  }

  function getAnswersfromButtons(questionId, usersAnswer) {
    switch (questionId) {
      case 1:
        setDayTimeNaps(usersAnswer);
        break;
      case 2:
        setSleepyDuringTheDay(usersAnswer);
        break;
      case 3:
        setCoffeeBeforeBed(usersAnswer);
        break;
      case 4:
        setAlcoholBeforeBed(usersAnswer);
        break;
      case 5:
        setSleepLatency(usersAnswer);
        break;
      case 6:
        setNumberOfTimesWokenUp(usersAnswer);
        break;
      case 7:
        setHowLongToSLeepAfterInterruption(usersAnswer);
        set;
        break;
      case 8:
        setWakeUpTime(usersAnswer);
        break;
      case 9:
        setUseMedications(usersAnswer);
        break;
      case 10:
        setSleepQuality(usersAnswer);
        break;
      case 11:
        setWakeUpWithHeadache(usersAnswer);
        break;

      default:
        return null;
        break;
    }
  }

  const finalData = {
    dayTimeNaps,
    sleepyDuringTheDay,
    coffeeBeforeBed,
    alcoholBeforeBed,
    timeToBed,
    sleepLatency,
    howLongToSLeepAfterInterruption,
    numberOfTimesWokenUp,
    wakeUpTime,
    useMedications,
    sleepQuality,
    wakeUpWithHeadache,
  };


  function renderOptions(questions) {
    if (questions.inputType == "TIME" && questions.timeType == "SLEEPTIME") {
      return <TimeInput getFunction={getTimeToBed} />;
    } else if (
      questions.inputType == "TIME" &&
      questions.timeType == "WAKETIME"
    ) {
      return <TimeInput getFunction={getWakeUpTime} />;
    } else {
      return questions.values.map((item, index) => {
        return (
          <div
            className="mt-[16px]"
            key={index}
            onClick={() => {
              getAnswersfromButtons(questionId, item.databaseEntry);
            }}
          >
            <ButtonSelect text={item.text} nightMode={nightMode()} />
          </div>
        );
      });
    }
  }

  return (
    <div className={nightMode() ? "px-[15px] bg-[#3D55AB] " : "px-[15px] "}>
      <div className="pt-[200px] h-screen">
        {renderSleepQuestions(questionId)}
        <div className="absolute w-11/12 bottom-[120px]">
          <ButtonMain
            text={"Continue"}
            runClickFunction={true}
            clickFunction={nextQuestion}
            nightMode={nightMode()}
          />
          <div>
            <p
              onClick={() => {
                prevQuestion();
              }}
              className="text-center mt-4"
            >
              Previous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SleepTracker;
