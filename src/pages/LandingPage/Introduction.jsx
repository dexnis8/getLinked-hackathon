import React from "react";
import { Body } from "../../components/Body";
import { Stack } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Introduction = () => {
  return (
    <>
      <Body>
        <div className="grid w-[90%] md:w-100 mx-auto grid-cols-1 gap-10 md:aspect-video items-center md:grid-cols-2 ">
          <div className=" h-100 lg:h-[477px] flex flex-col lg:flex-row">
            <div className="w-100 flex relative lg:items-center justify-center">
              <div className="self-center absolute top-[70%] md:top-0 left-0 md:relative mt-[-120px] ">
                <img
                  src="/assets/sata gra (1).png"
                  alt="star"
                  className="star-animate"
                />
              </div>
              <div>
                <LazyLoadImage
                  alt="Idea"
                  src={"/assets/the big idea 1.png"}
                  className="w-100 opacity-animation"
                />
                {/* <img
                  src="/assets/the big idea 1.png"
                  alt="idea"
                  className="w-100 opacity-animation"
                /> */}
              </div>
            </div>
            <div className="self-center md:self-end">
              <img src="/assets/arrow.png" alt="arrow" />
            </div>
          </div>
          <div className=" md:text-left text-center mx-auto ">
            <Stack spacing={2}>
              <div className="flex gap-0 items-center md:gap-10">
                <div>
                  <h1 className="text-[20px] md:text-3xl text-white font-clash font-bold">
                    Introduction to getlinked{" "}
                    <span className="text-[#D434FE]">techHackaton 1.0</span>
                  </h1>
                </div>
                <div>
                  <img
                    src="/assets/star pu.png"
                    alt="star"
                    className="star-animate"
                  />
                </div>
              </div>
              <span className="text-sm text-white font-normal">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </span>
            </Stack>
          </div>
        </div>
      </Body>
    </>
  );
};
/* 
<div className="grid grid-cols-1 items-center lg:grid-cols-2 ">
          <div className="border h-[300px]"></div>
          <div className="border h-[300px]">

          </div>
        </div>
 */
