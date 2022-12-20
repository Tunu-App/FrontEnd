import React from "react";

function JournalSVG({seletected}) {
  return (
    <div>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.67 5L19.5 9.83V19H5.5V5H14.67ZM14.67 3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V9.83C21.5 9.3 21.29 8.79 20.91 8.42L16.08 3.59C15.71 3.21 15.2 3 14.67 3ZM7.5 15H17.5V17H7.5V15ZM7.5 11H17.5V13H7.5V11ZM7.5 7H14.5V9H7.5V7Z"
          fill="#111111"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
}

export default JournalSVG;
