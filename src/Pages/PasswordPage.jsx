import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import { AppContext } from "../Layout/Context";
import { useContext } from "react";
import axios from "axios";

function PasswordPage() {
  const [password, setPassword] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const { state } = useLocation();

  const { signUpUserData } = useContext(AppContext);
  const { updateSignUpUserData } = useContext(AppContext);

  const newUser = {
    firstName: signUpUserData.firstName,
    phoneNumber: signUpUserData.phoneNumber,
    password: password,
    email: signUpUserData.email,
  };

  const test = {
    firstName: "tochi",
    phoneNumber: "123456",
    password: "12345",
    email: "tochinwachukwu33@gmail.com",
  };

  const headers = {
    "Access-Control-Allow-Origin": "http://127.0.0.1:5173/",
    "Access-Control-Allow-Credentials": true,
    "Content-Type":"application/json; charset=utf-8"
  };

  function submitForm() {
    const API =
      "http://tunuapi-dev.eu-west-2.elasticbeanstalk.com/v1/account/signup";
    axios
      .post(API, test, { headers: headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function agreeToTC() {
    setTermsAndConditions(!termsAndConditions);
  }

  function getFirstname(e) {
    setPassword(e.target.value);
  }

  const disableContBtn = () => {
    if (password.trim().length <= 0) {
      return true;
    } else {
      return false;
    }
  };

  const pathDetails = {
    link: "/signup-verify-phone",
    data: state,
  };

  return (
    <div className="flex relative flex-col">
      <div className="fixed top-[52px] w-full">
        <BackNav />
      </div>
      <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/signup-password.png')]"></div>
      <div className="w-full h-full bg-white pt-[47px] px-4 rounded-[24px] mt-[-24px]">
        <StyledH1Text text={"Enter a password"} marginBtm={"10px"} />
        <StyledParagraph
          text={
            "Protect your account with a secret password. This helps to keep away nosy neighbours."
          }
          marginBtm={"17px"}
        />

        <div className="mt-6 ">
          <TextInput
            placeholder={"Password"}
            type={"password"}
            getFunction={getFirstname}
          />
        </div>

        <div
          onClick={() => {
            submitForm();
          }}
          className="mt-[100px]"
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

export default PasswordPage;
