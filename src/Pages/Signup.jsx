import React, { useState } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import { AppContext } from "../Layout/Context";
import { useContext } from "react";
import { checkTime } from "../Layout/Utils";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const { updateSignUpUserData } = useContext(AppContext);
  const nightMode = checkTime()

  const newUser = {
    firstName: firstName,
    phoneNumber: "",
    password: "",
    email: "",
  };

  function submitForm() {
    updateSignUpUserData(newUser);
    console.log(newUser);
  }

  function agreeToTC() {
    setTermsAndConditions(!termsAndConditions);
  }

  function getFirstname(e) {
    setFirstName(e.target.value);
  }

  const disableContBtn = () => {
    if ((firstName.trim().length <= 0) | (termsAndConditions == false)) {
      return true;
    } else {
      return false;
    }
  };

  const pathDetails = {
    link: "/signup-contact-details",
    data: {},
  };

  return (
    <div className="flex relative flex-col">
      <div className="fixed top-[52px] w-full">
        <BackNav />
      </div>
      <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/tunu_signup_image.png')]"></div>
      <div className="w-full h-full bg-white pt-[47px] px-4 rounded-[24px] mt-[-24px]">
        <StyledH1Text text={"What is your name?"} marginBtm={"10px"} />
        <StyledParagraph
          text={"This is what we will call you"}
          marginBtm={"17px"}
        />

        <div className="mt-6 ">
          <TextInput
            placeholder={"First name"}
            getFunction={getFirstname}
            type={"text"}
            seeText={true}
          />
        </div>

        <div className="flex items-center mt-[34px]">
          <Checkbox getFunction={agreeToTC} />
          <p className="text-[#111111] w-11/12 ml-[12px]">
            I accept the{" "}
            <span className="text-[#0E816C]">Terms and Conditions</span> and the
            <span className="text-[#0E816C]"> Privacy Policy</span>
          </p>
        </div>
        <div
          onClick={() => {
            submitForm();
          }}
          className="mt-[41px]"
        >
          <ButtonMain
            text={"Continue"}
            disabled={disableContBtn()}
            route={pathDetails}
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

export default Signup;
