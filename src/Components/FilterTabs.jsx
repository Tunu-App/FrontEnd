import React, { useState } from "react";

function FilterTabs() {
  const [selectedTab, setSelectedTab] = useState("");
  const data = [
    {
      text: "All",
    },
    // {
    //   text: "Available",
    // },
    // {
    //   text: "Downloaded",
    // },
  ];

  function generateMenus() {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="px-[12px] py-[4px] bg-[#E7E3FF] rounded-full mr-[8px]"
        >
          {item.text}
        </div>
      );
    });
  }

  return <div className="w-full flex justify-start">{generateMenus()}</div>;
}

export default FilterTabs;
