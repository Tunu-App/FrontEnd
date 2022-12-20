import React, { useState, useRef } from "react";
import ButtonMain from "../Components/ButtonMain";
import TextInput from "../Components/TextInput";
import { amSleepQuestions } from "../Components/SleepQuestionsData";
import { pmSleepQuestions } from "../Components/SleepQuestionsData";
import ButtonSelect from "../Components/ButtonSelect";
import { useHistory } from "react-router-dom";

function SleepTracker({ nightMode }) {
  const [formattedHour, setFormattedHour] = useState();
  let [questionId, setQuestionId] = useState(0);
  const [error, setError] = useState(false);
  const [minute, setMinute] = useState();
  const [isMorning, setisMorning] = useState(true);
  const [quizData, setQuizData] = useState(amSleepQuestions);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const history = useHistory();

  function hourInputHandler(e) {
    setFormattedHour(e.target.value);
    inputFocuser(e.target.value);
  }
  function inputFocuser(value) {
    if (value.length >= 2) {
      minuteRef.current.focus();
      hourRef.current.blur();
    }
    return null;
  }

  function formatHour(hour) {
    if (hour < 10) {
      return `0${hour}`;
    } else {
      return `${hour}`;
    }
  }
  function handleBlur(e) {
    const hourValue = e.target.value;
    const isError = hourErrorChecker(hourValue);
    if (isError.error) {
      setError(true);
    } else {
      const response = formatHour(hourValue);
      setFormattedHour(response);
      setError(false);
    }
  }

  function timeSwitch() {
    return (
      <div className="px-[2px] py-[2px] relative border-[#DCDEE0] items-center outline-[#DCDEE0] rounded-[8px] border ">
        <div
          style={
            nightMode() && !isMorning ? { color: "white" } : { color: "#111111" }
          }
          onClick={() => {
            setisMorning(true);
            setQuizData(amSleepQuestions);
            setQuestionId(0);
          }}
          className={
            isMorning
              ? "px-[26px] py-[2px] text-[#111111] flex justify-center bg-[#FFBD3D]  text-center rounded-[6px]"
              : "px-[26px] text-[#111111] flex justify-center rounded-[6px] text-center"
          }
        >
          AM
        </div>
        <div
          style={
            nightMode() && isMorning
              ? { color: "white" }
              : { color: "#111111" }
          }
          onClick={() => {
            setisMorning(false);
            setQuizData(pmSleepQuestions);
            setQuestionId(0);
          }}
          className={
            isMorning
              ? "px-[26px]  text-[#111111] flex justify-center  text-center rounded-[6px]"
              : "px-[26px] py-[2px] text-[#111111] flex justify-center bg-[#FFBD3D] text-center rounded-[6px]"
          }
        >
          PM
        </div>
      </div>
    );
  }

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

  function timeInput() {
    return (
      <div className=" grid grid-cols-12 gap-4 mt-[70px]">
        <div className="col-span-4">
          <div
            className={
              !error
                ? "relative border-[#DCDEE0] items-center outline-[#DCDEE0] rounded-[8px] border flex"
                : "relative border-[#ff2300] items-center outline-[#DCDEE0] rounded-[8px] border flex"
            }
          >
            <p
              style={
                nightMode()
                  ? { backgroundColor: "#3D55AB", color: "white" }
                  : { backgroundColor: "white", color: "#111111" }
              }
              className={
                !error
                  ? "absolute bg-white px-[2px] text-[#7B7D7E] top-[-14px] left-[6px]"
                  : "absolute bg-white px-[2px] text-[#ff2300] top-[-14px] left-[6px]"
              }
            >
              Hour
            </p>
            <input
              value={formattedHour}
              ref={hourRef}
              onChange={(e) => {
                hourInputHandler(e);
              }}
              onBlur={(e) => {
                handleBlur(e);
              }}
              type={"number"}
              className={
                nightMode()
                  ? "w-full  px-[12px] bg-transparent rounded-[8px] text-white focus:outline-none py-[16px]"
                  : "w-full  px-[12px] bg-transparent rounded-[8px] text-[#111111] focus:outline-none py-[16px]"
              }
            />
          </div>
        </div>
        <div className="flex items-center col-span-1">
          <h1
            className={
              nightMode()
                ? "text-[500] text-[32px] text-center w-full text-white "
                : "text-[500] text-[32px] text-center w-full text-[#111111]"
            }
          >
            :
          </h1>
        </div>
        <div className="col-span-4">
          <div className="relative border-[#DCDEE0] items-center outline-[#DCDEE0] rounded-[8px] border flex">
            <p
              className={
                nightMode()
                  ? "absolute bg-[#3D55AB] px-[2px] text-white top-[-14px] left-[6px]"
                  : "absolute bg-white px-[2px] text-[#7B7D7E] top-[-14px] left-[6px]"
              }
            >
              Minute
            </p>
            <input
              ref={minuteRef}
              type="number"
              className={
                nightMode()
                  ? "w-full  px-[12px] bg-transparent  rounded-[8px] text-white focus:outline-none py-[16px]"
                  : "w-full  px-[12px] bg-transparent  rounded-[8px] text-[#111111] focus:outline-none py-[16px]"
              }
            />
          </div>
        </div>
        <div className="col-span-3">{timeSwitch()}</div>
      </div>
    );
  }

  function renderSleepQuestions(id) {
    console.log(quizData.length, id + 1);
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

  function renderOptions(questions) {
    if (questions.inputType == "TIME") {
      return timeInput();
    } else {
      return questions.values.map((item, index) => {
        return (
          <div className="mt-[16px]" key={index}>
            <ButtonSelect text={item} nightMode={nightMode()} />
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
        </div>
      </div>
    </div>
  );
}

function hourErrorChecker(hour) {
  const HourNum = Number(hour);

  if (HourNum >= 13) {
    return { error: true, message: "" };
  } else if (HourNum <= 12) {
    return { error: false, message: "" };
  }
}

export default SleepTracker;
