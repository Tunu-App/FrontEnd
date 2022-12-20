import React, { useState } from "react";
import { countryData } from "./CountryCodeData";

function PhoneInput({ placeholder, getFunction, type }) {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Nigeria",
    flag: "🇳🇬",
    code: "NG",
    dial_code: "+234",
  });
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");

  const generateCorrectPhoneNumber = (value) => {
    const phoneNumberString = value.toString();
    const firstRawChar = phoneNumberString.substring(0, 1);
    if (firstRawChar == "0") {
      const fullnumber =
        selectedCountry.dial_code + phoneNumberString.substring(0);
      setValue(fullnumber);
    } else {
      setValue(selectedCountry.dial_code + phoneNumberString);
    }
  };

  function openCountryModal(data) {
    const countryItem = data.map((country) => {
      return (
        <div
          key={Math.random() * 0.341 * 2.1}
          onClick={() => {
            setSelectedCountry(country);
          }}
          className="bg-white w-full flex  py-2 items-center "
        >
          <div className="text-2xl mr-2">{country.flag}</div>
          <p className="text-left">{country.name}</p>
        </div>
      );
    });

    return (
      <div
        onClick={() => {
          setOpenModal(false);
        }}
        className="h-screen overflow-y-scroll z-10 bg-[#111111B3] w-full absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="h-[414px] p-4 overflow-y-scroll z-10 bg-white w-11/12 left-0 rounded-[15px]">
          {countryItem}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {openModal && openCountryModal(countryData)}
      <div className="relative">
        <p className="absolute bg-white p-2 text-[#7B7D7E] top-[-20px] left-[6px]">
          Phone Number
        </p>
        <div className="flex w-full border-[#DCDEE0] items-center outline-[#DCDEE0] px-[12px] text-[#111111]  rounded-[8px] border-2">
          <div
            onClick={() => {
              setOpenModal(true);
            }}
            className="flex justify-center items-center"
          >
            <div className="text-2xl">{selectedCountry.flag}</div>
            <div className="w-[24px] h-[24px] bg-[url('./assets/images/dropdownarrow.png')]"></div>
          </div>
          <div>{selectedCountry.dial_code}</div>

          <input
            onChange={(e) => {
              getFunction(e);
              setValue(e.target.value);
            }}
            type="text"
            value={value}
            className=" py-[16px] ml-2 w-11/12 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;
