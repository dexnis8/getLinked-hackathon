import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { CircularProgress, Stack } from "@mui/material";
import { socialLinks } from "../../data/socialLinks";
import { Body } from "../../components/Body";
import { useForm } from "react-hook-form";
import { GradientButton } from "../../components/Buttons";
import { AngleLeft } from "../../components/icons/AngleLeft";
import { Link, Navigate } from "react-router-dom";
import { useContactUsMutation } from "../../redux/features/AuthApi";
import { toggleSnackBar } from "../../redux/features/ModalSlice";
import { useDispatch } from "react-redux";

export const Contact = () => {
  const { handleSubmit, register, formState, control } = useForm();
  const { errors, isValid, isSubmitSuccessful, isSubmitting } = formState;
  const [contactUs, { data, isLoading, error }] = useContactUsMutation();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    contactUs(data);
  };

  useEffect(() => {
    if (data?.id) {
      dispatch(
        toggleSnackBar({
          message: "Message sent successfully",
          open: true,
          severity: "success",
        })
      );
    } else if (error) {
      dispatch(
        toggleSnackBar({
          message: "An error occured! Please try again",
          open: true,
          severity: "error",
        })
      );
    }
  }, [data, error]);

  console.log(data);
  console.log(error);
  return (
    <>
      {data?.id && <Navigate to="/" replace={true} />}
      <div>
        <Navbar />
      </div>
      <Body>
        <div className="mt-10 grid grid-cols-1 aspect-video justify-between  md:grid-cols-2">
          <div className="md:block hidden mt-20">
            <Stack spacing={3}>
              <Stack spacing={2}>
                <h1 className="font-clash text-3xl font-semibold text-[#D434FE]">
                  Get in touch
                </h1>
                <div>
                  <p className="text-white font-base font-normal">Contact</p>
                  <p className="text-white font-base font-normal">
                    Information
                  </p>
                </div>
                <div>
                  <p className="text-white font-base font-normal">
                    27, Alara Street
                  </p>
                  <p className="text-white font-base font-normal">
                    Yaba 100012
                  </p>
                  <p className="text-white font-base font-normal">
                    Lagos State
                  </p>
                </div>
                <div>
                  <p className="text-white font-base font-normal">
                    Call us : 070667981819
                  </p>
                </div>
                <div>
                  <p className="text-white font-base font-normal">
                    we are open from Monday-Friday
                  </p>
                  <p className="text-white font-base font-normal">
                    08:00am - 05:00pm
                  </p>
                </div>
              </Stack>
              <div>
                <h4 className="mb-2 text-[#D434FE] text-sm font-normal">
                  Share on
                </h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((data) => (
                    <a key={data.id} href={data.link}>
                      {data.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Stack>
          </div>
          <div className="div2 bg-[#FFFFFF08] p-10 rounded-lg  ">
            <div>
              <Link to="/" className="block md:hidden mb-10">
                <AngleLeft />
              </Link>
              <h1 className="text-[20px] font-clash font-semibold text-[#D434FE] ">
                Questions or need assistance? <br />
                Let us know about it
              </h1>
            </div>
            <div className="mb-5 mt-5">
              <span className="text-white text-xs font-normal block md:hidden">
                Email us below to any question related to our event
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2}>
                <input
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  className="bg-[#FFFFFF08] font-normal relative  outline-none text-white text-base border w-100 rounded py-2 px-3"
                  {...register("first_name", {
                    required: "Please fill in your name",
                  })}
                />

                <p
                  className={`err-msg ${
                    errors.first_name?.message && "err-msg-active"
                  }`}
                >
                  {errors.first_name?.message}
                </p>

                <input
                  type="number"
                  placeholder="Phone Number"
                  id="phone_number"
                  className="bg-[#FFFFFF08] font-normal relative  outline-none text-white text-base border w-100 rounded py-2 px-3"
                  {...register("phone_number", {
                    required: "Phone number is required",
                  })}
                />

                <p
                  className={`err-msg ${
                    errors.phone_number?.message && "err-msg-active"
                  }`}
                >
                  {errors.phone_number?.message}
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="bg-[#FFFFFF08] font-normal relative  outline-none text-white text-base border w-100 rounded py-2 px-3"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address",
                    },
                  })}
                />

                <p
                  className={`err-msg ${
                    errors.email?.message && "err-msg-active"
                  }`}
                >
                  {errors.email?.message}
                </p>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Message"
                  {...register("message", {
                    required: "Kindly enter your message",
                  })}
                  className="bg-[#FFFFFF08] font-normal relative  outline-none text-white text-base border w-100 rounded py-2 px-3"
                ></textarea>

                <p
                  className={`err-msg ${
                    errors.message?.message && "err-msg-active"
                  }`}
                >
                  {errors.message?.message}
                </p>
                <div className="flex justify-center  mx-auto ">
                  <button
                    type="submit"
                    className=" py-3 btn-gradient w-[150px]  text-base font-normal text-white  rounded-lg"
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading ? (
                      <CircularProgress color="inherit" size={18} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </Stack>
            </form>
            <div className="block md:hidden">
              <h4 className="mb-2 text-[#D434FE] text-center mt-10 text-sm font-normal">
                Share on
              </h4>
              <div className="flex justify-center items-center gap-4">
                {socialLinks.map((data) => (
                  <a key={data.id} href={data.link}>
                    {data.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};
