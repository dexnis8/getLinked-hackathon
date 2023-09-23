import { Link } from "react-router-dom";
import { Body } from "./Body";
import { socialLinks } from "../data/socialLinks";
import { Location } from "./icons/Location";
import { Phone } from "./icons/Phone";

export default function Footer() {
  return (
    <footer className="pt-[70px] pb-[40px] bg-[#100B20]">
      <Body>
        <div className="w-full max-w-[1086px] px-5 md:px-0 mx-auto flex flex-col md:flex-row gap-[40px] justify-between">
          <div className="w-full max-w-[412px]">
            <Link to="/">
              <div className="logo">
                <h1 className="font-clash text-lg md:text-4xl font-bold text-white ">
                  get<span className="text-[#D434FE]">linked</span>
                </h1>
              </div>
            </Link>
            <p className="text-white pt-2 text-[12px] leading-[20px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-2 text-white text-[12px] pt-16">
              <p className="hover:underline cursor-pointer">Terms of Use</p>
              <div className="h-[17px] rounded-[2px] w-[2px] bg-primary"></div>
              <p className="hover:underline cursor-pointer">Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-10 w-full max-w-[500px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[14px] font-semibold text-[#D434FE]">
                Useful Links
              </h1>
              <p className="text-white text-[12px] hover:underline cursor-pointer">
                Overview
              </p>
              <p className="text-white text-[12px] hover:underline cursor-pointer">
                Timeline
              </p>
              <p className="text-white text-[12px] hover:underline cursor-pointer">
                FAQs
              </p>
              <p className="text-white text-[12px] hover:underline cursor-pointer">
                Register
              </p>
              <div className="text-[#D434FE] text-[12px] flex gap-3 item items-center">
                Follow us{" "}
                <div className="flex items-center gap-4">
                  {socialLinks.map((data) => (
                    <a key={data.id} href={data.link}>
                      {data.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-[14px] font-semibold text-[#D434FE]">
                Contact Us
              </h1>
              <div className="flex gap-4 text-white items-center text-[12px]">
                <Phone />
                <a href="tel:+2346707653444">+234 6707653444</a>
              </div>
              <div className="flex gap-4 text-white text-[12px]">
                <Location />
                <p className="max-w-[89px] leading-[18px]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white mt-[70px] text-[12px]">
          All rights reserved. &copy; getlinked Ltd.
        </p>
      </Body>
    </footer>
  );
}
