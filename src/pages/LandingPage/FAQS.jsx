import React from "react";
import { Body } from "../../components/Body";
import { Stack } from "@mui/material";
import { faqsData } from "../../data/faqData";
import { Disclosure, Transition } from "@headlessui/react";

export const FAQS = () => {
  return (
    <>
      <Body>
        <div className=" flex flex-col mg:overflow-auto text-center md:text-left relative md:grid  w-[90%] md:w-100 mx-auto gap-10 md:aspect-video items-center md:grid-cols-2  ">
          <div className="rules">
            <Stack spacing={2}>
              <div className="flex flex-col md:flex-row justify-between">
                <h1 className="md:text-3xl font-bold font-clash text-white text-[20px]">
                  Frequenly Asked
                  <br /> <span className="text-[#D434FE]">Questions</span>
                </h1>
                <div className="absolute top-[6%] right-0 md:relative md:top-0">
                  <img
                    src="/assets/star2.png"
                    alt="star"
                    className="star-animate"
                  />
                </div>
              </div>
              {/* FAQ */}
              <div>
                {faqsData.map((faq) => (
                  <Disclosure key={faq.id}>
                    {({ open }) => (
                      <div className="mb-5">
                        <Disclosure.Button className="flex w-full  justify-between border-b-[1px] border-[#D434FE] py-2 text-left">
                          <span className="text-white font-mon leading-[27.5px] max-w-[390px] text-[14px]">
                            {faq.title}
                          </span>
                          <span
                            className={`self-end  ${
                              open ? "rotate-180" : "-rotate-180"
                            } transition text-[#D434FE]`}
                          >
                            {open ? (
                              <span className="text-[#D434FE] font-mon !text-[28px] font-normal leading-[27.5px]">
                                {" "}
                                -
                              </span>
                            ) : (
                              <span className="text-[#D434FE] font-mon !text-[20px] font-normal leading-[27.5px]">
                                {" "}
                                +
                              </span>
                            )}
                          </span>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="text-left px-2 py-2 font-mon leading-[27.5px] max-w-[390px] text-[13px] text-white text-opacity-80">
                            {faq.content}
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
              {/* FAQ */}
              <div className="flex justify-end ">
                <img
                  src="/assets/whiteStar.png"
                  alt="star"
                  className="star-animate"
                />
              </div>
            </Stack>
          </div>
          <div className="relative">
            <div className=" flex justify-center">
              <img src="/assets/faq.png" alt="faq" />
            </div>
            <div className="absolute h-[150px] top-[-15%] left-[5%] flex gap-20 ">
              <div className="mt-10 overflow-hidden ">
                {" "}
                <img
                  src="/assets/question.png"
                  alt="question mark"
                  className="w-100"
                  width={30}
                />
              </div>
              <div className="mt-2">
                {" "}
                <img src="/assets/question.png" alt="question mark" />
              </div>
              <div className="mt-10">
                {" "}
                <img
                  src="/assets/question.png"
                  alt="question mark"
                  width={30}
                />
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};
