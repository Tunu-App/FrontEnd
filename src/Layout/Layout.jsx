import React from "react";
import BottomNavigation from "../Components/BottomNavigation";
import BackNav from "../Components/BackNav";
import ProfileIcon from "../Components/ProfileIcon";

function Layout(props) {
  return (
    <div className="">
      <div className="fixed flex justify-between top-[52px] w-full z-10">
        <BackNav />
        <ProfileIcon />
      </div>
      <div className="">
      {props.children}
      </div>
      
      <div className="fixed bottom-0 w-full ">
        <BottomNavigation nightMode={props.nightMode()} />
      </div>
    </div>
  );
}

export default Layout;
