import React from "react";
import { Body } from "../../components/Body";
import { Stack } from "@mui/material";
import { GradientButton } from "../../components/Buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Judging = () => {
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
              <div className="judge relative">
                <LazyLoadImage
                  alt="judge"
                  src={"/assets/judge.png"}
                  className="w-100 h-100"
                />
                {/* <img
                  src="/assets/judge.png"
                  alt="idea"
                  className="w-100 h-100 "
                /> */}
              </div>
            </div>
          </div>
          <div className=" md:text-left text-center mx-auto ">
            <Stack spacing={2}>
              <div className="flex gap-0 items-center md:gap-10">
                <div>
                  <h1 className="text-[20px] md:text-left text-center md:text-3xl text-white font-clash font-bold">
                    Judging Criteria <br />
                    <span className="text-[#D434FE]">Key attributes</span>
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
                <strong className="text-[#FF26B9] text-base font-bold">
                  Innovation and Creativity
                </strong>
                : Evaluate the uniqueness and creativity of the solution.
                Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </span>
              <span className="text-sm text-white font-normal">
                <strong className="text-[#FF26B9] text-base font-bold">
                  Functionality
                </strong>
                : Assess how well the solution works. Does it perform its
                intended functions effectively and without major issues? Judges
                would consider the completeness and robustness of the solution.
              </span>
              <span className="text-sm text-white font-normal">
                <strong className="text-[#FF26B9] text-base font-bold">
                  Impact and Relevance
                </strong>
                : Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
              <span className="text-sm text-white font-normal">
                <strong className="text-[#FF26B9] text-base font-bold">
                  Technical Complexity
                </strong>
                : Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
              <span className="text-sm text-white font-normal">
                <strong className="text-[#FF26B9] text-base font-bold">
                  Adherence to Hackathon Rules
                </strong>
                : Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
              <div className="mt-2">
                <GradientButton text="Read More" />
              </div>
            </Stack>
          </div>
        </div>
      </Body>
    </>
  );
};
