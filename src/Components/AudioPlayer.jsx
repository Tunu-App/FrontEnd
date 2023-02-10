import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ToastProvider, useToasts } from "react-toast-notifications";
import {
  adjustVector,
  downladLargeVector,
  forwardVector,
  PauseVector,
  playVector,
} from "../assets/images/Vectors";
import { backwardsVector } from "../assets/images/Vectors";

import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";

function AudioPlayer({ audioUrl }) {
  const { addToast } = useToasts();
  const { pathname } = useLocation();
  let [value, setValue] = useState(0);
  const [volume, setVolume] = useState(1);
  const [seek, setSeek] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  let [audioDuration, setAudioDuration] = useState("00:00:00");
  let [durationForSeek, setDurationForSeek] = useState();
  let [trackProgress, setTrackProgress] = useState("00:00:00");
  let [trackProgressForSeek, setTrackProgressForSeek] = useState(0);
  const [webshareError, setWebshareError] = useState("");
  const audioRef = useRef(new Audio(audioUrl));
  const intervalRef = useRef();
  const isReady = useRef(false);

  function sharepage() {
    if (navigator.share) {
      navigator
        .share({
          title: "Explore this sleep sound by Tunu",
          text: "Tunu Sleep Sound",
          url: pathname,
        })
        .then(() => console.log("Successful share"))
        .catch((error) =>
          addToast(error, {
            appearance: "error",
            autoDismiss: true,
            autoDismissTimeout: 3000,
          })
        );
    } else {
      console.error("Browser doesn't support Web Share API");
      addToast("Browser doesn't support Web Share API", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    }
  }

  function downloadSound() {
    addToast("Oops.. you can only stream sounds on the web version", {
      appearance: "error",
      autoDismiss: true,
      autoDismissTimeout: 3000,
    });
  }

  // HANDLING THE PAUSING AND PLAYING OF THE AUDIO
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  //   ONCE THE COMPONENT UNMOUNTS, THIS PAUSES IT AND CLEANS UP
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  //   CONTROLS THE TIMER FUNCTION FOR THE AUDIO PLAYER

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        return false;
      } else {
        let audioTime = formatTime(audioRef.current.currentTime);
        let duration = formatTime(audioRef.current.duration);

        setTrackProgressForSeek(audioRef.current.currentTime);
        setTrackProgress(audioTime);
        setAudioDuration(duration);
        setDurationForSeek(audioRef.current.duration);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(formatTime(audioRef.current.currentTime));
    setTrackProgressForSeek(audioRef.current.currentTime);
    setValue(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  function formatTime(rawValue) {
    let hours = parseInt(Math.round(rawValue / (60 * 60)));
    let mins = parseInt((rawValue / 60) % 60);
    let secs = parseInt(rawValue % 60);
    let formattedTime = `${addZero(hours)} : ${addZero(mins)}: ${addZero(
      secs
    )}`;

    return formattedTime;
  }

  function addZero(time) {
    return time < 10 ? `0${time}` : time;
  }

  function formatSeekTime(current, duration) {
    const percentage = Math.round((current / duration) * 100);
    return percentage;
  }

  const currentPercentage = durationForSeek
    ? `${(trackProgressForSeek / durationForSeek) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #12A187), color-stop(${currentPercentage}, #12A18733))
`;

  return (
    <div className="w-full mt-[19px] mb-[20px]">
      <div>
        <div className="w-full px-2">
          <input
            type="range"
            value={trackProgressForSeek}
            step="1"
            min="0"
            max={durationForSeek ? durationForSeek : `${durationForSeek}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>

        <div className="flex items-center justify-between px-2 ">
          <p className="">{trackProgress}</p>
          <p>{audioDuration}</p>
        </div>
        <div className="grid grid-cols-5 gap-[20px] place-items-center">
          <div
            onClick={() => {
              sharepage();
            }}
          >
            {adjustVector()}
          </div>
          <div>{backwardsVector()}</div>
          <div
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? PauseVector() : playVector()}
          </div>
          <div>{forwardVector()}</div>
          <div>
            {" "}
            <a
              onClick={() => {
                downloadSound();
              }}
            >
              {downladLargeVector()}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
