import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import UserContext from "../Layout/UserContext";
import { useContext } from "react";
import axios, { Axios } from "axios";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function PasswordPage() {
  const [password, setPassword] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [pathDetails, setPathDetails] = useState({
    link: "/signup-password",
    data: "",
  });

  const { signupData } = useContext(UserContext);
  const { saveSignupData } = useContext(UserContext);
  const history = useHistory();

  const newUser = {
    firstName: signupData.firstName,
    phoneNumber: signupData.phoneNumber,
    password: password,
    email: signupData.email,
  };

  const test = {
    firstName: "tochi",
    phoneNumber: "123456",
    password: "12345",
    email: "tochinwachukwu33@gmail.com",
  };

  const API =
    "http://tunuapi-staging.eu-west-2.elasticbeanstalk.com/v1/account/signup";

  const header = {
    contentType: "application/json",
  };

  function submitForm() {
    axios({ method: "post", url: API, data: newUser }).then(
      (response) => {
        if (response.data.status == true) {
          saveSignupData(newUser)
          // history.push("/signup-verify-phone");
          history.push("/login");
        } else {
          setErrorMessage(response.data.errors);
          console.log(response.data);
        }
      },
      (error) => {
        console.log(error.response.data.errors);
        setErrorMessage(error.response.data.errors);
      }
    );
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
        <div>
          {errorMessage.map((item) => (
            <p className="text-red-500">{item}</p>
          ))}
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
            <Link to={"/login"}>
              <span className="text-[#0E816C]">Sign in</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordPage;
