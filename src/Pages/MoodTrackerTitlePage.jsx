import React from "react";
import ButtonMain from "../Components/ButtonMain";

function MoodTrackerTitlePage() {
  return (
    <div className="mt-[120px] px-[15px]">
      <div className="mb-[20px]">
        <h1 className="font-bold text-[48px]">😫</h1>
      </div>

      <div>
        <h1 className="text-[#111111] font-bold text-[24px]">
          Your <span className="text-[#12A187]">You feel</span> overwhelmed
        </h1>
        <p className="text-[#404142] w-5/6 leading-[24px]">
          Care to share why you feel this way?
        </p>
      </div>

      <div className="mt-[20px]">
        <div>
          <textarea
            className="w-full rounded-[4px] px-[12px] py-[12px] focus:outline-none leading-[26px] border-2 border-[#EFF2F4]"
            rows="10"
            cols={"20"}
            placeholder={
              "It helps to express your thoughts and feelings into words. Write a note about what makes you feel the way you do. Your notes are completely private. "
            }
          />
        </div>
        <div className="mt-[36px]">
          <ButtonMain text={"Save"} />
        </div>
      </div>
    </div>
  );
}

export default MoodTrackerTitlePage;
