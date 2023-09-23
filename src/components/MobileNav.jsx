import { Stack } from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GradientButton } from "./Buttons";
import { FaTimes } from "./icons/FaTimes";

export const MobileNav = ({ open, close }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` bg-[#150e28] p-10 absolute w-[100vw] ${
        open ? "translate-x-[0%]" : "translate-x-[-100%]"
      } transition-transform duration-300 ease-in-out top-0 left-0 h-[100vh] `}
    >
      <Stack spacing={5}>
        <div onClick={close} className="flex justify-end">
          <FaTimes size={15} />
        </div>
        <Stack spacing={3}>
          {/* <Link>Timeline</Link>
          <Link>Overview</Link>
          <Link>FAQs</Link>
          <Link>Contact</Link> */}
          <p
            onClick={close}
            className="text-lg font-inter font-medium text-white tracking-tight"
          >
            Timeline
          </p>
          <p
            onClick={close}
            className="text-lg font-inter font-medium text-white tracking-tight"
          >
            Overview
          </p>
          <p
            onClick={close}
            className="text-lg font-inter font-medium text-white tracking-tight"
          >
            FAQs
          </p>
          <p
            onClick={close}
            className="text-lg font-inter font-medium text-white tracking-tight"
          >
            <Link to="/contact"> Contact</Link>
          </p>
          <div className="flex" onClick={close}>
            <GradientButton
              text="Register"
              handleClick={() => navigate("/register")}
            />
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
