import React from "react";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";

function SplashScreen() {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="tunu-logo bg-red-300 w-[103px] h-[76px]"></div>

        <div className=" w-full">
          <StyledH1Text text={"What will you like to do today?"} />
          <StyledParagraph text={"Select one option to start your journey."} />
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
