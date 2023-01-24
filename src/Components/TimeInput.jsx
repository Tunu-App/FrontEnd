import React, { useState, useRef, useEffect } from "react";
import { checkTime } from "../Layout/Utils";

function TimeInput({ getFunction }) {
  const [error, setError] = useState(false);
  const [minute, setMinute] = useState();
  const [isMorning, setisMorning] = useState(true);
  const [formattedHour, setFormattedHour] = useState();
  const [finalTimeString, setFinalTimeString] = useState("");
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const nightMode = checkTime;

  function buildFinalTimeString() {
    const timeString = `${formattedHour}:${minute}:00`;
    setFinalTimeString(timeString);
  }
  // Utility functions
  function hourInputHandler(e) {
    setFormattedHour(e.target.value);
    inputFocuser(e.target.value);
    buildFinalTimeString();
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

  function hourErrorChecker(hour) {
    const HourNum = Number(hour);

    if (HourNum >= 13) {
      return { error: true, message: "" };
    } else if (HourNum <= 12) {
      return { error: false, message: "" };
    }
  }

  useEffect(() => {
    getFunction(finalTimeString)
  }, [finalTimeString]);

  function timeSwitch() {
    return (
      <div className="px-[2px] py-[2px] relative border-[#DCDEE0] items-center outline-[#DCDEE0] rounded-[8px] border ">
        <div
          style={
            nightMode() && !isMorning
              ? { color: "white" }
              : { color: "#111111" }
          }
          onClick={() => {
            setisMorning(true);
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
            nightMode() && isMorning ? { color: "white" } : { color: "#111111" }
          }
          onClick={() => {
            setisMorning(false);
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
            onChange={(e) => {
              setMinute(e.target.value);
              buildFinalTimeString();
            }}
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

export default TimeInput;
