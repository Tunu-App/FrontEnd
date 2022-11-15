import React from "react";
import { useHistory } from "react-router-dom";

function BackNav() {
  let history = useHistory();

  return (
    <div onClick={() => history.goBack()}>
      <div className=" ml-[15px] bg-[url('./assets/images/back.png')  h-[44px] w-[44px] rounded-full bg-contain bg-no-repeat bg-white "></div>
    </div>
  );
}

export default BackNav;
