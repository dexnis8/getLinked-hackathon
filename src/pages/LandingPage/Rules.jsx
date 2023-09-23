import React from "react";
import { Body } from "../../components/Body";
import { Stack } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Rules = () => {
  return (
    <>
      <Body>
        <div className=" flex flex-col-reverse mg:overflow-auto text-center md:text-left relative md:grid  w-[90%] md:w-100 mx-auto gap-10 md:aspect-video items-center md:grid-cols-2  ">
          <div className="rules">
            <Stack spacing={2}>
              <div className="flex flex-col md:flex-row justify-between">
                <h1 className="md:text-3xl font-bold font-clash text-white text-[20px]">
                  Rules and <br />{" "}
                  <span className="text-[#D434FE]">Guidelines</span>
                </h1>
                <div className="absolute top-[6%] right-0 md:relative md:top-0">
                  <img
                    src="/assets/star2.png"
                    alt="star"
                    className="star-animate"
                  />
                </div>
              </div>
              <span className="text-sm font-normal text-white">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </span>
              <div className="flex justify-end ">
                <img
                  src="/assets/whiteStar.png"
                  alt="star"
                  className="star-animate"
                />
              </div>
            </Stack>
          </div>
          <div className=" flex justify-center">
            <LazyLoadImage alt="Illustration" src={"/assets/rulesImg.png"} />
            {/* <img src="/assets/rulesImg.png" alt="illustration" /> */}
          </div>
        </div>
      </Body>
    </>
  );
};
