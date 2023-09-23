import React from "react";
import { Body } from "../../components/Body";
import { Stack } from "@mui/material";

export const Timeline = () => {
  return (
    <>
      <Body>
        <div className="flex text-center  w-100 justify-center">
          <div>
            <div className="flex justify-center  w-[80%]  md:w-[35%] mx-auto">
              <Stack spacing={2}>
                <h1 className="font-clash font-bold md:text-3xl text-[20px] text-white">
                  Timeline
                </h1>
                <span className="text-sm text-white font-normal flex justify-center  mx-auto ">
                  Here is the breakdown of the time we anticipate using for the
                  upcoming event.
                </span>
              </Stack>
            </div>
            <div className="mt-5 hidden md:block">
              <div className="grid mt-5 h-fit  w-100 aspect-auto grid-cols-12">
                <div className="text-sm font-normal text-white self-end text-right   col-span-5 ">
                  <Stack spacing={2}>
                    <h1 className="text-[24px] font-bold text-[#D434FE] ">
                      Hackathon Announcement
                    </h1>
                    <span>
                      The getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </span>
                  </Stack>
                </div>
                <div className="col-span-2  ">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className=" w-[4px] h-[88px] bg-[#D434FE] "></div>
                    <div className="num flex items-center justify-center">
                      <p className="text-[24px] font-bold text-white ">1</p>
                    </div>
                  </div>
                </div>
                <div className="text-left self-end  col-span-5 ">
                  <span className="text-[24px] font-bold text-[#D434FE]">
                    November 18, 2023
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="grid mt-1 h-fit  w-100 aspect-auto grid-cols-12">
                <div className="text-right self-end  col-span-5 ">
                  <span className="text-[24px] font-bold text-[#D434FE]">
                    November 18, 2023
                  </span>
                </div>
                <div className="col-span-2  ">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className=" w-[4px] h-[88px] bg-[#D434FE] "></div>
                    <div className="num flex items-center justify-center">
                      <p className="text-[24px] font-bold text-white ">2</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-normal text-white self-end text-left   col-span-5 ">
                  <Stack spacing={2}>
                    <h1 className="text-[24px] font-bold text-[#D434FE] ">
                      Teams Registration begins
                    </h1>
                    <span>
                      Interested teams can now show their interest in the
                      getlinked tech hackathon 1.0 2023 by proceeding to
                      register
                    </span>
                  </Stack>
                </div>
              </div>
              {/*  */}
              <div className="grid mt-1 h-fit  w-100 aspect-auto grid-cols-12">
                <div className="text-sm font-normal text-white self-end text-right   col-span-5 ">
                  <Stack spacing={2}>
                    <h1 className="text-[24px] font-bold text-[#D434FE] ">
                      Teams Registration ends
                    </h1>
                    <span>
                      Interested Participants are no longer Allowed to register
                    </span>
                  </Stack>
                </div>
                <div className="col-span-2  ">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className=" w-[4px] h-[88px] bg-[#D434FE] "></div>
                    <div className="num flex items-center justify-center">
                      <p className="text-[24px] font-bold text-white ">3</p>
                    </div>
                  </div>
                </div>
                <div className="text-left self-end  col-span-5 ">
                  <span className="text-[24px] font-bold text-[#D434FE]">
                    November 18, 2023
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="grid mt-1 h-fit  w-100 aspect-auto grid-cols-12">
                <div className="text-right self-end  col-span-5 ">
                  <span className="text-[24px] font-bold text-[#D434FE]">
                    November 18, 2023
                  </span>
                </div>
                <div className="col-span-2  ">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className=" w-[4px] h-[88px] bg-[#D434FE] "></div>
                    <div className="num flex items-center justify-center">
                      <p className="text-[24px] font-bold text-white ">4</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-normal text-white self-end text-left   col-span-5 ">
                  <Stack spacing={2}>
                    <h1 className="text-[24px] font-bold text-[#D434FE] ">
                      Announcement of the accepted teams and ideas
                    </h1>
                    <span>
                      All teams whom idea has been accepted into getlinked tech
                      hackathon 1.0 2023 are formally announced
                    </span>
                  </Stack>
                </div>
              </div>

              <div className="grid mt-1 h-fit  w-100 aspect-auto grid-cols-12">
                <div className="text-sm font-normal text-white self-end text-right   col-span-5 ">
                  <Stack spacing={2}>
                    <h1 className="text-[24px] font-bold text-[#D434FE] ">
                      Getlinked Hackathon 1.0 Officially Begins
                    </h1>
                    <span>
                      Accepted teams can now proceed to build their ground
                      breaking skill driven solutions
                    </span>
                  </Stack>
                </div>
                <div className="col-span-2  ">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className=" w-[4px] h-[88px] bg-[#D434FE] "></div>
                    <div className="num flex items-center justify-center">
                      <p className="text-[24px] font-bold text-white ">5</p>
                    </div>
                  </div>
                </div>
                <div className="text-left self-end  col-span-5 ">
                  <span className="text-[24px] font-bold text-[#D434FE]">
                    November 18, 2023
                  </span>
                </div>
              </div>
              <div className="grid mt-1 h-fit  w-100 aspect-auto grid-cols-12">
                <div className="text-right self-end  col-span-5 ">
                  <span className="text-[24px] font-bold text-[#D434FE]">
                    November 18, 2023
                  </span>
                </div>
                <div className="col-span-2  ">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className=" w-[4px] h-[88px] bg-[#D434FE] "></div>
                    <div className="num flex items-center justify-center">
                      <p className="text-[24px] font-bold text-white ">6</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-normal text-white self-end text-left   col-span-5 ">
                  <Stack spacing={2}>
                    <h1 className="text-[24px] font-bold text-[#D434FE] ">
                      Demo Day
                    </h1>
                    <span>
                      Teams get the opportunity to pitch their projects to
                      judges. The winner of the hackathon will also be announced
                      on this day
                    </span>
                  </Stack>
                </div>
              </div>

              {/* ggghjkjj */}
            </div>
            {/* For mobile Screen */}
            <div className="block md:hidden px-5 mt-5 text-left sm:w-[80%]">
              <Stack spacing={3}>
                <div className="flex gap-2 items-center">
                  <div className=" ">
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className=" w-[4px] h-[77px] bg-[#D434FE] "></div>
                      <div className="num-small p-1 flex items-center justify-center">
                        <p className="text-xs font-bold text-white ">6</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={1}>
                      <h1 className="text-xs font-bold text-[#D434FE] ">
                        Hackathon Announcement
                      </h1>
                      <span className="text-xs text-white">
                        The getlinked tech hackathon 1.0 is formally announced
                        to the general public and teams begin to get ready to
                        register
                      </span>
                      <h1 className="text-xs font-bold text-[#D434FE]">
                        November 18, 2023
                      </h1>
                    </Stack>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" ">
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className=" w-[4px] h-[77px] bg-[#D434FE] "></div>
                      <div className="num-small p-1 flex items-center justify-center">
                        <p className="text-xs font-bold text-white ">6</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={1}>
                      <h1 className="text-xs font-bold text-[#D434FE] ">
                        Teams Registration begins
                      </h1>
                      <span className="text-xs text-white">
                        Interested teams can now show their interest in the
                        getlinked tech hackathon 1.0 2023 by proceeding to
                        register
                      </span>
                      <h1 className="text-xs font-bold text-[#D434FE]">
                        November 18, 2023
                      </h1>
                    </Stack>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" ">
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className=" w-[4px] h-[77px] bg-[#D434FE] "></div>
                      <div className="num-small p-1 flex items-center justify-center">
                        <p className="text-xs font-bold text-white ">6</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={1}>
                      <h1 className="text-xs font-bold text-[#D434FE] ">
                        Teams Registration ends
                      </h1>
                      <span className="text-xs text-white">
                        Interested Participants are no longer Allowed to
                        register
                      </span>
                      <h1 className="text-xs font-bold text-[#D434FE]">
                        November 18, 2023
                      </h1>
                    </Stack>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" ">
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className=" w-[4px] h-[77px] bg-[#D434FE] "></div>
                      <div className="num-small p-1 flex items-center justify-center">
                        <p className="text-xs font-bold text-white ">6</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={1}>
                      <h1 className="text-xs font-bold text-[#D434FE] ">
                        Announcement of the accepted teams and ideas
                      </h1>
                      <span className="text-xs text-white">
                        All teams whom idea has been accepted into getlinked
                        tech hackathon 1.0 2023 are formally announced
                      </span>
                      <h1 className="text-xs font-bold text-[#D434FE]">
                        November 18, 2023
                      </h1>
                    </Stack>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" ">
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className=" w-[4px] h-[77px] bg-[#D434FE] "></div>
                      <div className="num-small p-1 flex items-center justify-center">
                        <p className="text-xs font-bold text-white ">6</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={1}>
                      <h1 className="text-xs font-bold text-[#D434FE] ">
                        Getlinkedd Hackathon 1.0 Officially Begins
                      </h1>
                      <span className="text-xs text-white">
                        Accepted teams can now proceed to build their ground
                        breaking skill driven solutions
                      </span>
                      <h1 className="text-xs font-bold text-[#D434FE]">
                        November 18, 2023
                      </h1>
                    </Stack>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" ">
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className=" w-[4px] h-[77px] bg-[#D434FE] "></div>
                      <div className="num-small p-1 flex items-center justify-center">
                        <p className="text-xs font-bold text-white ">6</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={1}>
                      <h1 className="text-xs font-bold text-[#D434FE] ">
                        Demo Day
                      </h1>
                      <span className="text-xs text-white">
                        Teams get the opportunity to pitch their projects to
                        judges. The winner of the hackathon will also be
                        announced on this day
                      </span>
                      <h1 className="text-xs font-bold text-[#D434FE]">
                        November 18, 2023
                      </h1>
                    </Stack>
                  </div>
                </div>
              </Stack>
            </div>
            {/* Mobile end */}
          </div>
        </div>
      </Body>
    </>
  );
};
