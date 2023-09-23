import React from "react";
import { Navbar } from "../../components/Navbar";
import { HeroSection } from "./HeroSection";
import { Stack } from "@mui/material";
import { Introduction } from "./Introduction";
import { Rules } from "./Rules";
import { Judging } from "./Judging";
import { FAQS } from "./FAQS";
import { Timeline } from "./Timeline";
import { Rewards } from "./Rewards";
import Footer from "../../components/Footer";

export const IndexPage = () => {
  return (
    <>
      <Stack>
        <div className=" sticky top-0 bg-[#150e28] z-50 border-b-[1px] border-[#FFFFFF2E]">
          <Navbar />
        </div>
        <div className=" border-b-[1px] border-[#FFFFFF2E]">
          <HeroSection />
        </div>
        <div className="py-10 border-b-[1px] border-[#FFFFFF2E]">
          <Introduction />
        </div>
        <div className="py-3 border-b-[1px] border-[#FFFFFF2E]">
          <Rules />
        </div>
        <div className="py-10 border-b-[1px] border-[#FFFFFF2E]">
          <Judging />
        </div>
        <div className="py-10 border-b-[1px] border-[#FFFFFF2E]">
          <FAQS />
        </div>
        <div className="py-10 border-b-[1px] border-[#FFFFFF2E]">
          <Timeline />
        </div>
        {/* <div className="py-10 border-b-[1px] border-[#FFFFFF2E]">
          <Rewards />
        </div> */}
        <Footer />
      </Stack>
    </>
  );
};
