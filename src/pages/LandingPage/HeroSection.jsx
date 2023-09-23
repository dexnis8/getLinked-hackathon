import React from "react";
import { GradientButton } from "../../components/Buttons";
import { Curve } from "../../components/icons/Curve";
import { Body } from "../../components/Body";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Body>
        <div className=" w-full overflow-hidden lg:w-[1056px]">
          <div className="  flex relative lg:mr-0 w-100 justify-center lg:justify-end mt-3">
            <h1 className=" sm:text-[24px] lg:text-[30px] font-bold text-white italic">
              Igniting a revolution in HR innovation
            </h1>
            <div className="absolute top-[20px] right-[30px] sm:right-[220px] lg:right-0 sm:top-[30px] lg:top-[38px]">
              <Curve />
            </div>
          </div>
          <div className="flex gap-10 sm:gap-0 mt-4 sm:mt-0 sm:block">
            <div className="flex w-3/5 justify-start ml-10 my-[-10px]">
              <img
                src="/assets/whiteStar.png"
                alt="white star"
                className="star-animate"
              />
            </div>
            <div className="sm:flex w-3/5  my-[-10px]  justify-end">
              <img
                src="/assets/star2.png"
                alt="star"
                className="star-animate"
              />
            </div>
          </div>

          <div className="div1  relative grid grid-cols-1 lg:grid-cols-7 justify-normal h-100 mt-10 lg:mt-0 items-center w-100 lg:w-[1056px]">
            <div className="self-center  col-span-1 flex w-[95%] text-center lg:text-left  mx-auto flex-col lg:w-[590px] lg:col-span-3">
              <h1 className="text-white  lg:block flex flex-col justify-center leading-snug relative font-clash font-bold text-[32px] sm:text-[56px] lg:text-[64px] ">
                getlinked Tech <br />
                <span className="flex justify-center items-center text-[#D434FE] lg:float-right">
                  <p className="mr-2 text-white">Hackathon </p> 1.0
                  <img
                    src="/assets/chain.png"
                    alt="chain"
                    className="w-[50px] lg:w-[100px]"
                  />
                  <div className="w-[50px]">
                    <img
                      src="/assets/fire.svg"
                      alt="fire"
                      className="w-100 h-100"
                    />
                  </div>
                </span>
                <img
                  src="/assets/bulb.png"
                  alt="bulb"
                  className="absolute w-[30px] sm:w-[50px] right-[60px] top-[-25px]  star-animate sm:right-[28%] lg:right-[130px] sm:top-[-50px]"
                />
              </h1>
              <p className="text-[18px] font-normal text-white sm:w-[50%] mx-auto lg:mx-0 lg:w-[78%] ">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <div className="mt-10">
                <GradientButton
                  text="Register"
                  handleClick={() => navigate("/register")}
                />
              </div>
              <div className="flex w-3/5 my-5 justify-end">
                <img
                  src="/assets/star2.png"
                  alt="star"
                  className="star-animate"
                />
              </div>
              <div className="grid  items-center justify-center grid-cols-3 mx-auto lg:mx-0 sm:w-1/2 ">
                <div>
                  <span className="text-white  justify-center font-normal flex text-sm">
                    <h1 className=" text-6xl font-unica">00</h1>
                    <p className="self-end mb-2">H</p>
                  </span>
                </div>
                <div>
                  <span className="text-white justify-center  font-normal flex text-sm">
                    <h1 className=" text-6xl font-unica">00</h1>
                    <p className="self-end mb-2">M</p>
                  </span>
                </div>
                <div>
                  <span className="text-white justify-center  font-normal flex text-sm">
                    <h1 className=" text-6xl font-unica">00</h1>
                    <p className="self-end mb-2">S</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="relative  lg:ml-10 mt-5 flex justify-center  col-span-4  bg-[url('/assets/metrix 1.png')]">
              <LazyLoadImage
                alt="man with vision pro"
                src={"/assets/heroImage.png"}
                className="h-100 w-100 grayscale"
              />
              {/* <img
                src="/assets/heroImage.png"
                alt="man wearing a vision pro"
                className="h-100 w-100 grayscale"
              /> */}
              <div className="absolute galaxy lg:w-[450px]  top-0 left-[15%] lg:top-[0px] lg:left-[8%] opacity-75 ">
                <img
                  src="/assets/galaxy.png"
                  alt="galaxy"
                  className="w-100 h-100  galaxy-animate"
                />
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};
