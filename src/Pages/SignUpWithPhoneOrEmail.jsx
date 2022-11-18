import React, { useState } from "react";
import StyledH1Text from "../Components/StyledH1Text";
import StyledParagraph from "../Components/StyledParagraph";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/Checkbox";
import ButtonMain from "../Components/ButtonMain";
import BackNav from "../Components/BackNav";
import PhoneInput from "../Components/PhoneInput";

function SignUpWithPhoneOrEmail() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useEmail, setUseEmail] = useState(false);

  function getEmail(e) {
    setEmail(e.target.value);
  }

  const disableContBtn = () => {
    if (useEmail) {
      if (email.trim().length <= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (phone.trim().length <= 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const pathDetails = {
    link: "/signup-password",
    data: {
      idType: email != "" ? "EMAIL" : "PHONE",
    },
  };

  return (
    <div className="flex relative flex-col">
      <div className="fixed top-[52px] w-full">
        <BackNav />
      </div>
      <div className="w-full h-[350px] bg-cover bg-no-repeat bg-[url('./assets/images/tunu_signup_contact_details.png')]"></div>
      <div className="w-full h-full bg-white pt-[47px] px-4 rounded-[24px] mt-[-24px]">
        <StyledH1Text
          text={
            useEmail
              ? "What is your email address"
              : "What is your phone number"
          }
          marginBtm={"10px"}
        />
        <StyledParagraph
          text={
            "This helps us verify that you are a person. We are kinda biased towards humans."
          }
          marginBtm={"17px"}
        />

        <div className="mt-6 ">
          {useEmail ? (
            <TextInput
              placeholder={"Email"}
              getFunction={getEmail}
              type={"text"}
            />
          ) : (
            <PhoneInput />
          )}
        </div>

        <div className="flex items-center justify-between mt-[24px]">
          <p className="font-[500] text-[#404142]">Use email instead</p>
          <div
            onClick={() => {
              setUseEmail(!useEmail);
            }}
            className={
              useEmail
                ? "w-[48px] h-[28px] bg-[#DCDEE0] bg-[#12A187] justify-end flex items-center rounded-full"
                : "w-[48px] h-[28px] bg-[#DCDEE0]   justify-start  flex items-center rounded-full"
            }
          >
            <div className="w-5 h-5 bg-white rounded-full m-[4px]"></div>
          </div>
        </div>
        <div className="mt-[41px]">
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

export default SignUpWithPhoneOrEmail;
