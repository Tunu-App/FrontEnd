import React, { useState } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import axios from "axios";

function Login() {
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

  const API =
    "http://tunuapi-dev.eu-west-2.elasticbeanstalk.com/v1/account/signin";

  const newUser = {
    phoneNumber: "",
    email: email,
    password: password,
  };

  function submitForm() {
    axios({ method: "post", url: API, data: newUser }).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  }

  const disableContBtn = () => {
    if ((email.trim().length <= 0) | (password.trim().length <= 0)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex relative flex-col">
      <div className="fixed top-[52px] w-full">
        <BackNav />
      </div>
      <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/tunu-login-screen.png')]"></div>
      <div className="w-full h-full bg-white pt-[47px] px-4 rounded-[24px] mt-[-24px]">
        <StyledH1Text text={"Enter your details to login"} marginBtm={"21px"} />

        <div className="">
          <TextInput
            placeholder={"Email or Phone number"}
            getFunction={getEmail}
            type={"text"}
            seeText={true}
          />
        </div>
        <div className="mt-[36px]">
          <TextInput
            placeholder={"Password"}
            getFunction={getPassword}
            type={"password"}
            seeText={false}
          />
        </div>

        <div className="flex items-center mt-[22px]">
          <p className="text-[#0E816C] w-11/12 ml-[12px] font-[500]">
            Forgot password?
          </p>
        </div>
        <div
          onClick={() => {
            submitForm();
          }}
          className="mt-[24px]"
        >
          <ButtonMain
            text={"Log in"}
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

export default Login;
