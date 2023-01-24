import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from "react-router-dom";
import relaxation from "../assets/images/sleep-sounds.png";
import { heartBlackVector } from "../assets/images/Vectors";
import AudioPlayer from "../Components/AudioPlayer";

function PlaySleepSound() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="pb-[100px] px-[15px]  pt-[126px] bg-[#3D55AB]">
      <div
        style={{ backgroundImage: `url(${relaxation})` }}
        className="w-[345px] h-[345px]  drop-shadow-xl bg-cover bg-center rounded-[16px]"
      ></div>

      <div className="mt-[46px]">
        <div className="flex justify-between items-center p-2">
          <h1 className="font-bold text-[22px] text-white">{state.title}</h1>
          <div>{heartBlackVector(true)}</div>
        </div>
        <div className="flex justify-between items-center mt-[12px] w-full px-[40px]">
          <div className="text-center">
            <p className="text-white px-2 uppercase opacity-50">Narrator</p>
            <p className="text-white px-2">{state.narrator}</p>
          </div>
          <div className="text-center ">
            <p className="text-white px-2 uppercase opacity-50">Author</p>
            <p className="text-white px-2">{state.author}</p>
          </div>
        </div>
      </div>
      <AudioPlayer
        audioUrl={state.mediaUrl}
      />
    </div>
  );
}

export default PlaySleepSound;
