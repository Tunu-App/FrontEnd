import React from "react";
import ReactAudioPlayer from "react-audio-player";
import relaxation from "../assets/images/unwind-large.png";
import { heartBlackVector } from "../assets/images/Vectors";
import AudioPlayer from "../Components/AudioPlayer";

function PlayMeditation() {
  return (
    <div className="mb-[100px]">
      <div
        style={{ backgroundImage: `url(${relaxation})` }}
        className="w-[345px] h-[345px] mt-[106px]  drop-shadow-xl bg-cover bg-center rounded-[16px]"
      ></div>

      <div className="mt-[66px]">
        <div className="flex justify-between items-center p-2">
          <h1 className="font-bold text-[22px]">Choosing how to relax</h1>
          <div>{heartBlackVector()}</div>
        </div>

        <p className="text-[#111111] px-2">Josh Williams</p>
      </div>
      <AudioPlayer
        audioUrl={"https://cdn.trendybeatz.com/audio/Chike-Soldier.mp3"}
      />
    </div>
  );
}

export default PlayMeditation;
