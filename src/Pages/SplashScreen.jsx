import React from "react";
import ButtonSelect from "../Components/ButtonSelect";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";

function SplashScreen() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-[15px] w-full pt-[100px]">
        <div className="tunu-logo mb-[43px] bg-[url('./assets/images/tunu_logo.png')] w-[103px] h-[76px]"></div>

        <div className=" w-full">
          <StyledH1Text text={"What will you like to do today?"} />
          <StyledParagraph text={"Select one option to start your journey."} />
          <div className="w-full mt-[15px]">
            <ButtonSelect text={"Meditate"} />
            <ButtonSelect text={"Track your mood"} />
            <ButtonSelect text={"Write a journal"} />
            <ButtonSelect text={"Sleep better"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
