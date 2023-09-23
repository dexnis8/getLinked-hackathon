import React from "react";
import { Body } from "../../components/Body";
import { Stack } from "@mui/material";

export const Rewards = () => {
  return (
    <>
      <Body>
        <div className="w-full flex justify-center flex-col mx-auto ">
          <div>
            <Stack>
              <h1>
                Prizes and <br /> <span>Rewards</span>
              </h1>
              <span>
                Highlights of the prizes or rewards for winners and for
                participants.
              </span>
            </Stack>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="h-[100px] col-span5 border"></div>
            <div className="h-[100px] col-span-7 border "></div>
          </div>
        </div>
      </Body>
    </>
  );
};
