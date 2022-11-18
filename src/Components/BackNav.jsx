import React from "react";
import { useHistory } from "react-router-dom";

function BackNav() {
  let history = useHistory();

  return (
    <div onClick={() => history.goBack()}>
      <div className=" ml-[15px]  bg-white  bg-[url('./assets/images/back.png')] h-[44px] w-[44px] rounded-full bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}

export default BackNav;
