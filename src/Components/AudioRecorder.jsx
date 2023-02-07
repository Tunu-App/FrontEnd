import React, { useEffect, useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import {
  recordingMicIcon,
  recordStopIcon,
  recPauseVector,
} from "../assets/images/Vectors";

function AudioRecorder() {
  const [recordState, setRecordState] = useState({
    recordState: null,
  });
  const [recData, setRecData] = useState({});
  let [recTime, setRecTime] = useState(formatTime(0));

  const start = () => {
    setRecordState({
      recordState: RecordState.START,
    });
    startTimer();
  };

  const stop = () => {
    setRecordState({
      recordState: RecordState.STOP,
    });
    stopTimer();
  };

  const onStop = (audioData) => {
    console.log("audioData", audioData);
    setRecData(audioData);
  };

  //   TIMER FUNCTION FOR THE CODE

  function startTimer() {
    let count = 0;
    setInterval(() => {
      count += 1;
      setRecTime(formatTime(count));

    }, 1000);
  }

  function stopTimer() {
    clearInterval(setRecTime(formatTime(0)));
  }

  return (
    <div>
      <div>{recVisualizer()}</div>
      <div>
        <AudioReactRecorder
          state={recordState.recordState}
          onStop={onStop}
          canvasWidth={0}
          canvasHeight={0}
        />
      </div>
      <div className="mt-[34px]">
        <p className="text-center text-[#404142]">{recTime}</p>
        <p className="text-center text-[#0E816C] mt-[5px]">Recording</p>
      </div>
      <div className="flex w-full justify-center mt-[43px] ">
        <div className="flex items-center">
          <button
            className="mr-[11px]"
            onClick={() => {
              start();
            }}
          >
            {recPauseVector()}
          </button>
          <button
            onClick={() => {
              stop();
            }}
          >
            {recordStopIcon()}
          </button>
        </div>
      </div>
    </div>
  );
}

function recVisualizer() {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-[160px] bg-[#0E816C33] rounded-full  flex items-center justify-center h-[160px]">
        <div className="w-[128px] bg-[#0E816C66] rounded-full flex items-center justify-center  h-[128px]">
          <div className="w-[96px] bg-[#0E816C] rounded-full   h-[96px] flex items-center justify-center">
            {" "}
            <div className="z-[999]">{recordingMicIcon()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatTime(rawValue) {
  let hours = parseInt(Math.round(rawValue / (60 * 60)));
  let mins = parseInt((rawValue / 60) % 60);
  let secs = parseInt(rawValue % 60);
  let formattedTime = `${addZero(hours)} : ${addZero(mins)}: ${addZero(secs)}`;

  return formattedTime;
}

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}

export default AudioRecorder;
