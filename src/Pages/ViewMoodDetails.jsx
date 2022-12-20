import React from "react";
import ButtonMain from "../Components/ButtonMain";

function ViewMoodDetails() {
  return (
    <div className="px-[15px] mt-[120px]">
      <div className="border-2 border-[#11111129] rounded-[8px] py-[32px]">
        <h1 className="font-bold  text-[48px] text-[#111111]  text-center">
          😫
        </h1>
        <h1 className="text-[24px] text-center font-bold">
          You feel <span className="text-[#0E816C]">overwhelmed</span>{" "}
        </h1>

        <p className="mt-[9px] text-center">You did not include a note</p>
      </div>

      <div>
        <div className="mt-[260px]">
          <ButtonMain text={"Next"} />
          <div className="mt-[36px] mb-[17px]">
            <p className="text-center text-[#0E816C]">Previous</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMoodDetails;
