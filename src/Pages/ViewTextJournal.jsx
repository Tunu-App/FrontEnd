import React, { useState } from "react";
import {
  adjustVectorDark,
  deletedIcon,
  deleteIcon,
  moreMenu,
} from "../assets/images/Vectors";
import ButtonMain from "../Components/ButtonMain";

function ViewTextJournal() {
  const [openMore, setOpenMore] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const moreModal = () => {
    return (
      <div
        style={{ boxShadow: "0px -4px 4px #88888840" }}
        className="pt-[23px] px-[19px] rounded-t-[22px] mb-[12px]  "
      >
        {!deleted ? (
          <div className="flex mb-[20px] items-center justify-start">
            <span
              onClick={() => {
                setDeleted(true);
              }}
              className="mr-[14px]"
            >
              {deleteIcon()}
            </span>
            <p className="text-[#111111]">Delete</p>
          </div>
        ) : (
          <div className="flex mb-[20px] items-center justify-between">
            <div
              onClick={() => {
                setDeleted(true);
              }}
              className="flex items-center"
            >
              <span
                onClick={() => {
                  setDeleted(true);
                }}
                className="mr-[14px]"
              >
                {deletedIcon()}
              </span>
              <p
                onClick={() => {
                  setDeleted(true);
                }}
                className="text-[#111111]"
              >
                Deleted
              </p>
            </div>

            <p
              onClick={() => {
                setDeleted(false);
              }}
              className="rounded-[24px] bg-[#0000005c] px-[10px] py-[4px] text-white"
            >
              Undo
            </p>
          </div>
        )}
        <div className="flex mb-[20px] items-center justify-start">
          <span className="mr-[14px]">{adjustVectorDark()}</span>
          <p className="text-[#111111]">Share</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex relative flex-col mt-[172px]">
      <div className="w-full fixed top-0 z-[-10] h-[200px] bg-cover bg-center bg-no-repeat bg-[url('./assets/images/meditation-dark.png')]"></div>
      <div
        className={
          "w-full h-full bg-white pt-[37px] px-4 rounded-[24px] mt-[-20px]"
        }
      >
        <div className="flex justify-between items-center mb-[16px]">
          <h1 className="text-[#111111] text-[28px] font-bold ">
            Saturday, October 23
          </h1>
          <div
            onClick={() => {
              setOpenMore(!openMore);
            }}
          >
            {moreMenu()}
          </div>
        </div>

        <div className="pb-[19px] border-b border-[#EFF2F4]">
          <p className="text-[#111111b3]">
            Are unpleasing occasional celebrated motionless unaffected
            conviction out. Evil make to no five they. Stuff at avoid of sense
            small fully it whose an. Ten scarcely distance moreover handsome age
            although. As when have find fine or said no mile. He in dispatched
            in imprudence dissimilar be possession unreserved insensible. She
            evil face fine calm have now. Separate screened he outweigh of
            distance landlord.
          </p>
        </div>

        {!openMore && (
          <div className="mt-[36px]">
            <ButtonMain text={"Next"} />
            <div className="mt-[36px]">
              <p className="text-center text-[#0E816C]">Previous</p>
            </div>
          </div>
        )}
      </div>
      {openMore && <div>{moreModal()}</div>}
    </div>
  );
}

export default ViewTextJournal;
