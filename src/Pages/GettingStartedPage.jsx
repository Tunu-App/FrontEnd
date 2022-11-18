import React, { useState } from "react";
import ButtonMain from "../Components/ButtonMain";
import ButtonSelect from "../Components/ButtonSelect";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";

function GettingStartedPage() {
  const [userAction, setUserAction] = useState("");

  const userActions = [
    "Meditate",
    "Track your mood",
    "Write a journal",
    "Sleep better",
  ];

  function generateOptions() {
    const actions = userActions.map((item) => (
      <div
        onClick={() => {
          setUserAction(item);
        }}
      >
        <ButtonSelect
          text={item}
          selected={userAction == item ? true : false}
        />
      </div>
    ));
    return actions;
  }

  const disableContBtn = () => {
    if (userAction.trim().length <= 0) {
      return true;
    } else {
      return false;
    }
  };

  const pathDetails = {
    link: "/",
    data: {},
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-[15px] w-full pt-[100px]">
        <div className="tunu-logo mb-[43px] bg-[url('./assets/images/tunu_logo.png')] w-[103px] h-[76px]"></div>

        <div className=" w-full">
          <StyledH1Text text={"What will you like to do today?"} />
          <StyledParagraph text={"Select one option to start your journey."} />
          <div className="w-full mt-[15px]">{generateOptions()}</div>
          <div className="mt-[24px]">
            <ButtonMain
              text={"Continue"}
              disabled={disableContBtn()}
              route={pathDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStartedPage;
