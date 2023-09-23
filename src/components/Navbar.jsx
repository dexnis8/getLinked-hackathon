import React from "react";
import { Hamburger } from "./icons/Hamburger";
import { GradientButton } from "./Buttons";
import { MobileNav } from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "../redux/features/ModalSlice";
import { Body } from "./Body";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const mobileNavState = useSelector((state) => state.modals.mobileNav);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(mobileNavState);
  return (
    <>
      <MobileNav
        open={mobileNavState}
        close={() => dispatch(toggleMobileNav())}
      />
      <Body>
        <div className="flex justify-between items-center px-10 lg:px-0 py-3 md:py-5">
          <div className="logo" onClick={() => navigate("/")}>
            <h1 className="font-clash text-lg md:text-4xl font-bold text-white ">
              get<span className="text-[#D434FE]">linked</span>
            </h1>
          </div>
          <div className="md:hidden block">
            <Hamburger handleClick={() => dispatch(toggleMobileNav())} />
          </div>
          <div className="md:flex gap-5 hidden lg:gap-[100px]">
            <ul className="flex justify-between items-center gap-[40px]">
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-white hover:border-b-[2px] py-1  "
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-white hover:border-b-[2px] py-1  "
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-white hover:border-b-[2px] py-1  "
                >
                  FAQs
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base font-normal text-white hover:border-b-[2px] py-1  "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <GradientButton
              text="Register"
              handleClick={() => navigate("/register")}
            />
          </div>
        </div>
      </Body>
    </>
  );
};
