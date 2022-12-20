import React from "react";
import ButtonMain from "../Components/ButtonMain";
import ButtonSelect from "../Components/ButtonSelect";
import { micVector } from "../assets/images/Vectors";

function AddJournal() {
  return (
    <div className="mt-[120px] px-[15px]">
      <div className="mb-[20px]">
        <h1 className="font-bold text-[48px]">✍️</h1>
      </div>

      <div>
        <h1 className="text-[#111111] font-bold text-[24px]">
          Your <span className="text-[#12A187]">feelings</span> are valid
        </h1>
        <p className="text-[#404142] w-5/6 leading-[24px]">
          Your thoughts, your words. Express yourself freely in your safe space.
        </p>
      </div>

      <div className="mt-[14px] border-t-2 border-[#EFF2F4]">
        <textarea
          className="w-full focus:outline-none py-2 leading-[26px]"
          rows="6"
          cols={"20"}
          placeholder={
            "Gain clarity by expressing your thoughts and feelings into words. Write a note about what makes you feel the way you do. Your notes are completely private. Tap to start typing."
          }
        />
      </div>

      <div className="mt-[11px]">
        <div className="mb-[50px]">
          <ButtonSelect text={"Record a voice note"} icon={micVector()} />
        </div>
        <div>
          <ButtonMain text={"Save"} />
        </div>
      </div>
    </div>
  );
}

export default AddJournal;
