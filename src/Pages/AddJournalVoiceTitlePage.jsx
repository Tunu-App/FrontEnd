import React from "react";
import ButtonMain from "../Components/ButtonMain";
import ButtonSelect from "../Components/ButtonSelect";
import { micVector } from "../assets/images/Vectors";

function AddJournalVoiceTitlePage() {
  return (
    <div className="mt-[120px] px-[15px]">
      <div className="mb-[20px]">
        <h1 className="font-bold text-[48px]">🎤</h1>
      </div>

      <div>
        <h1 className="text-[#111111] font-bold text-[24px]">
          Give your recording a title
        </h1>
        <p className="text-[#404142] w-5/6 leading-[24px]">
          Something short and simple to help you remember it.
        </p>
      </div>

      <div className="mt-[14px]"></div>

      <div className="">
        <div>
          <textarea
            className="w-full rounded-[4px] px-[24px] py-[19px] focus:outline-none py-2 leading-[26px] border-2 border-[#EFF2F4]"
            rows="6"
            cols={"20"}
            placeholder={""}
          />
        </div>
        <div className="mt-[36px]">
          <ButtonMain text={"Add title"} />
          <div className="mt-[36px]">
            <p className="text-center text-[#0E816C]">Skip for now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJournalVoiceTitlePage;
