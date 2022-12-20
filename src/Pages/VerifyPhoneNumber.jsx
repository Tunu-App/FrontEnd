import React, { useState } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import { useLocation } from "react-router-dom";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import PopupModal from "../Components/PopupModal";

function VerifyPhoneNumber() {
  const [password, setPassword] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { state } = useLocation();


  function agreeToTC() {
    setTermsAndConditions(!termsAndConditions);
  }

  function getFirstname(e) {
    setPassword(e.target.value);
  }

  function openVerifyModal() {
    setOpenModal(true);
  }

  const disableContBtn = () => {
    if (password.trim().length <= 0) {
      return true;
    } else {
      return false;
    }
  };

  const pathDetails = {
    link: "/login",
    data: state,
  };

  function verifiedSuccessModal() {
    return (
      <div
        onClick={() => {
          setOpenModal(false);
        }}
        className="h-screen overflow-y-scroll z-10 bg-[#111111B3] w-full absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="h-[414px] p-4 overflow-y-scroll z-10 bg-white w-11/12 left-0 rounded-[15px]">
          <div className="flex flex-col items-center">
            <div className="w-[116.5px] h-[106.5px] mt-[76px] bg-[url('./assets/images/verified-success.png')] bg-cover bg-no-repeat"></div>
            <h1 className="font-bold text-center text-[24px] mt-[30px] text-[#111111]">
              Verified successfully
            </h1>
            <p className="text-[#404142] mt-[4px]">
              {state.idType != "EMAIL"
                ? "Your phone number has been verified"
                : "Your email has been verified"}
            </p>
            <div className="mt-[44px] w-full">
              <ButtonMain
                text={"Continue"}
                disabled={false}
                route={pathDetails}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex relative flex-col">
      <div className="fixed top-[52px] w-full">
        <BackNav />
      </div>
      <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/signup-verify-phone.png')]"></div>
      {openModal && verifiedSuccessModal()}
      <div className="w-full h-full bg-white pt-[47px] px-4 rounded-[24px] mt-[-24px]">
        <StyledH1Text
          text={
            state.idType != "EMAIL"
              ? "Verify your phone number "
              : "Verify your email"
          }
          marginBtm={"10px"}
        />
        <StyledParagraph
          text={
            state.idType != "EMAIL"
              ? "Enter the code you just received via SMS to activate your account"
              : "Enter the code you just received via mail to activate your account"
          }
          marginBtm={"17px"}
        />

        <div className="mt-6 ">
          <TextInput
            placeholder={"Enter code"}
            type={"number"}
            getFunction={getFirstname}
          />
        </div>

        <div className="mt-[24px]">
          <p className="text-center mb-[10px]">Did not receive the code?</p>
          <p className="text-center text-[#0E816C]">Re-send code</p>
        </div>

        <div className="mt-[28px]">
          <ButtonMain
            text={"Continue"}
            disabled={disableContBtn()}
            route={pathDetails}
            runClickFunction={true}
            clickFunction={openVerifyModal}
          />
        </div>

        <div className="mt-[22px]">
          <p className="text-[#111111] text-center">
            Already have an account?{" "}
            <span className="text-[#0E816C]">Sign in</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyPhoneNumber;
