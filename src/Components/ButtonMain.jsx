import React from "react";
import { useHistory } from "react-router-dom";

function ButtonMain({ text, disabled, route }) {
  const history = useHistory();

  const handleClick = () => {
    if (disabled != true) {
      history.push({
        pathname: route.link,
        state: route.data, // your data array of objects
      });
    } else {
      return null;
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        className={
          disabled
            ? "text-white bg-[#DCDEE0] w-full py-4 my-2 rounded-full"
            : "text-white bg-[#0E816C] w-full py-4 my-2 rounded-full"
        }
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonMain;
