import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import MuiPhoneNumber from "material-ui-phone-number";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import axios from "axios";
import ReactGA from "react-ga";
import { useContext } from "react";
import UserContext from "../Layout/UserContext";
import { setUserSession } from "../service/AuthService";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [pathDetails, setPathDetails] = useState({
    link: "/login",
    data: {
      idType: email != "" ? "EMAIL" : "PHONE",
    },
  });
  const { saveUserData } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");

  // GOOGLE ANALYTICS

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  function getPassword(e) {
    setPassword(e.target.value);
  }
  function getText(e) {
    const text = e.target.value;
    const formattedText = text.trim().toLowerCase();
    var letters = /^[A-Za-z]+$/;
    if (formattedText.length > 0) {
      if (formattedText[0].match(letters)) {
        setEmail(formattedText);
        setPhoneNumber("");
      } else {
        setPhoneNumber(formattedText);
        setEmail("");
      }
    }
  }
  const history = useHistory();

  const API = "https://api.tunu.io/v1/account/signin";

  const newUser = {
    phoneNumber: phoneNumber,
    email: email,
    password: password,
  };

  function submitForm() {
    axios({ method: "post", url: API, data: newUser }).then(
      (response) => {
        if (response.data.status == true) {
          saveUserData(response.data);
          setUserSession(response.data, response.data.token);
          history.push("/");
        } else {
          // setError(response.data.errors[0]);
          // console.log(response.data.data)
        }
      },
      (error) => {
        setError(error.response.data.errors[0]);
      }
    );
  }

  const disableContBtn = () => {
    if (email != "") {
      if ((email.trim().length <= 0) | (password.trim().length <= 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      if ((phoneNumber.trim().length <= 0) | (password.trim().length <= 0)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div>
      <div className="flex md:hidden relative flex-col mb-12">
        <div className="fixed top-[52px] w-full">
          <BackNav />
        </div>
        <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/tunu-login-screen.png')]"></div>
        <div className="w-full h-full bg-white pt-[47px] px-4 rounded-[24px] mt-[-24px]">
          <StyledH1Text
            text={"Enter your details to login"}
            marginBtm={"21px"}
          />

          <div className="">
            <TextInput
              placeholder={"Email or Phone number"}
              getFunction={getText}
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
          <p className="text-red-600 text-left ml-3 mt-[4px] text-[10px]">
            {error}
          </p>

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
              Don’t have an account yet?{" "}
              <span className="text-[#0E816C]">
                {" "}
                <Link to={"/signup"}>Sign up</Link>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop view Starts here */}

      {/* ======================================================================================================================================================================== */}
      <div className="hidden md:grid  relative grid-cols-5">
        <div className="w-full  bg-cover h-screen md:col-span-2 lg:col-span-3 bg-no-repeat bg-[url('./assets/images/tunu-login-screen.png')]"></div>
        <div className="h-full md:col-span-3 lg:col-span-2 grid place-items-center  ">
          <div className="w-3/4">
            <StyledH1Text
              text={"Enter your details to login"}
              marginBtm={"21px"}
            />

            <div className="">
              <TextInput
                placeholder={"Email or Phone number"}
                getFunction={getText}
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
            <p className="text-red-600 text-left ml-3 mt-[4px] text-[10px]">
              {error}
            </p>

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
                Don’t have an account yet?{" "}
                <span className="text-[#0E816C]">
                  {" "}
                  <Link to={"/signup"}>Sign up</Link>{" "}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
