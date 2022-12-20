import React from "react";
import ButtonMain from "../Components/ButtonMain";
import ButtonSelect from "../Components/ButtonSelect";
import { micVector } from "../assets/images/Vectors";
import AudioRecorder from "../Components/AudioRecorder";

function AddJournalVoice() {
  return (
    <div className="mt-[120px] px-[15px]">
      <div className="mb-[20px]">
        <h1 className="font-bold text-[48px]">🎤</h1>
      </div>

      <div>
        <h1 className="text-[#111111] font-bold text-[24px]">
          How did it really go today?
        </h1>
        <p className="text-[#404142] w-5/6 leading-[24px]">
          Spill the tea, the whole tea and nothing but the tea.
        </p>
      </div>

      <div className="mt-[14px] border-t-2 border-[#EFF2F4]"></div>

      <div className="mt-[65px]">
        <AudioRecorder/>

        <div>

        </div>
      </div>
    </div>
  );
  
}

export default AddJournalVoice;
