import React, { useState } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import ProfileIcon from "../Components/ProfileIcon";
import TunuActionCard from "../Components/TunuActionCard";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getPassword(e) {
    setPassword(e.target.value);
  }
  function getEmail(e) {
    setEmail(e.target.value);
  }

  const pathDetails = {
    link: "/getting-started",
    data: {
      idType: email != "" ? "EMAIL" : "PHONE",
    },
  };

  const disableContBtn = () => {
    if ((email.trim().length <= 0) | (password.trim().length <= 0)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex relative flex-col">
      <div className="fixed flex justify-between top-[52px] w-full">
        <BackNav />
        <ProfileIcon />
      </div>
      <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/tunu-home-banner.png')]"></div>
      <div className="w-full h-full bg-white pt-[29px] px-4 rounded-[24px] mt-[-100px]">
        <h1 className="text-[#111111] text-[28px] font-bold mb-[16px]">
          Hey <span className="text-[#12A187]">Shola,</span>
        </h1>
        <StyledH1Text text={"Improve your mood"} marginBtm={"21px"} />

        <div className="">
          <TunuActionCard
            heading={"How are you feeling today?"}
            paragraph={"Take a moment to reflect on how you’re feeling today"}
            btnText={"Track my mood"}
            color={"#FFBD3D"}
          />
        </div>
        <div className="mt-[36px]"></div>
      </div>
    </div>
  );
}

export default Home;
