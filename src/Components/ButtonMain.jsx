import React from "react";
import { useHistory } from "react-router-dom";

function ButtonMain({
  text,
  disabled,
  route,
  actionCard,
  runClickFunction,
  clickFunction,
  nightMode,
}) {
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
      {!actionCard ? (
        <button
          style={
            nightMode
              ? { backgroundColor: "white", color: "#111111" }
              : { backgroundColor: "#DCDEE0", color: "white" }
          }
          onClick={() => {
            !runClickFunction ? handleClick() : clickFunction();
          }}
          className={
            disabled
              ? "text-white bg-[#DCDEE0] w-full py-4 my-2 rounded-full"
              : "text-white bg-[#0E816C] w-full py-4 my-2 rounded-full"
          }
        >
          {text}
        </button>
      ) : (
        <button
          onClick={() => {
            handleClick();
          }}
          className="text-black bg-white w-full py-4 my-2 rounded-full"
        >
          {text}
        </button>
      )}
    </div>
  );
}

export default ButtonMain;
