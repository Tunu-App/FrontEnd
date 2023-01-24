import React, { useState, useRef } from "react";
import ButtonMain from "../Components/ButtonMain";
import TextInput from "../Components/TextInput";
import { amSleepQuestions } from "../Components/SleepQuestionsData";
import { sleepTrackerQuestions } from "../Components/SleepQuestionsData";
import { pmSleepQuestions } from "../Components/SleepQuestionsData";
import ButtonSelect from "../Components/ButtonSelect";
import { useHistory } from "react-router-dom";
import { checkTime } from "../Layout/Utils";
import TimeInput from "../Components/TimeInput";

function SleepTracker() {
  let [questionId, setQuestionId] = useState(0);
  const [quizData, setQuizData] = useState(sleepTrackerQuestions);
  const history = useHistory();
  const nightMode = checkTime;
  // HERE THE USER'S INPUT IS RECORDED
  const [timeToBed, setTimeToBed] = useState("");
  const [sleepLatency, setSleepLatency] = useState(0);
  const [numberOfTimesWokenUp, setNumberOfTimesWokenUp] = useState(0);
  const [howLongToSLeepAfterInterruption, setHowLongToSLeepAfterInterruption] =
    useState(0);
  const [wakeUpTime, setWakeUpTime] = useState(0);
  const [sleepQuality, setSleepQuality] = useState("");

  const goToSummary = () => {
    history.push({
      pathname: "/sleeptracker/summary",
      state: "data", // your data array of objects
    });
  };

  function nextQuestion() {
    const totalQuestions = quizData.length;

    if (questionId + 1 <= totalQuestions) {
      setQuestionId((questionId += 1));
    } else {
      goToSummary();
    }
  }
  function prevQuestion() {
    const totalQuestions = quizData.length;

    if (questionId + 1 >= totalQuestions) {
      setQuestionId((questionId -= 1));
    } else {
      goToSummary();
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
        setSleepLatency(usersAnswer);
        break;
      case 2:
        console.log("questionId ==2");
        setNumberOfTimesWokenUp(usersAnswer);
        break;
      case 3:
        console.log("questionid == 3");
        setHowLongToSLeepAfterInterruption(usersAnswer);
        set;
        break;

      case 4:
        console.log("quesiton id ==4");
        setWakeUpTime(usersAnswer);
        break;
      case 5:
        console.log("quesiton id ==4");
        setSleepQuality(usersAnswer);
        break;

      default:
        console.log("default case");
        break;
    }
  }

  const finalData = {
    timeToBed,
    sleepLatency,
    sleepQuality,
    howLongToSLeepAfterInterruption,
    numberOfTimesWokenUp,
    wakeUpTime,
  };

  console.log(finalData);
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
