import React, { useState, useEffect } from "react";
import { Body } from "../../components/Body";
import { Navbar } from "../../components/Navbar";
import {
  Alert,
  Checkbox,
  CircularProgress,
  Collapse,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useLazyGetCategoriesQuery } from "../../redux/features/CategoriesApi";
import { useRegisterUserMutation } from "../../redux/features/AuthApi";
import { useDispatch } from "react-redux";
import { toggleSnackBar } from "../../redux/features/ModalSlice";
import { RegSuccessModal } from "../../components/modals/RegSuccessModal";

export const Register = () => {
  const { handleSubmit, register, formState, control } = useForm();
  const { errors, isValid, isSubmitSuccessful, isSubmitting } = formState;
  const [openSuccess, setOpenSuccess] = useState(false);
  const dispatch = useDispatch();

  const [
    getCategories,
    { data: categories, isLoading: loading, error: error_fetching_categories },
  ] = useLazyGetCategoriesQuery();
  console.log(categories);
  console.log(error_fetching_categories);

  // to fetch the enpoint on every reload or re-render
  useEffect(() => {
    getCategories();
  }, []);
  const [
    registerUser,
    {
      data: regStatus,
      isLoading: registering_user,
      error: error_registering_user,
    },
  ] = useRegisterUserMutation();
  const onFormSubmit = (data) => {
    // console.log(data);
    registerUser(data);
    console.log("registering user");
  };
  
  useEffect(() => {
    if (regStatus?.id) {
      setOpenSuccess(true);
      dispatch(
        toggleSnackBar({
          message: "Registration successfull",
          open: true,
          severity: "success",
        })
      );
    } else if (
      error_registering_user &&
      error_registering_user?.status === 400
    ) {
      dispatch(
        toggleSnackBar({
          message: `${error_registering_user?.data?.email[0]}`,
          open: true,
          severity: "error",
        })
      );
    } else if (error_registering_user) {
      dispatch(
        toggleSnackBar({
          message: "An error occured! Please try again",
          open: true,
          severity: "error",
        })
      );
    }
  }, [regStatus, error_registering_user]);
  console.log(regStatus);
  console.log(error_registering_user);
  return (
    <>
      <RegSuccessModal open={openSuccess} close={() => setOpenSuccess(false)} />
      <div>
        <div>
          <Navbar />
        </div>
        <Body>
          <div className="grid justify-center grid-cols-1 md:grid-cols-12 aspect-video items-center">
            <div className=" col-span-5">
              <h1 className="text-[#D434FE] ml-10 mt-10 block md:hidden font-clash text-[32px] mb-8 font-semibold">
                Register
              </h1>
              <img
                src="/assets/3d-graphic-designer-showing-thumbs-up-png 1.png"
                alt="graphics"
              />
            </div>
            <div className="  col-span-7 bg-[#FFFFFF08] font-normal p-10 rounded-lg ">
              <h1 className="text-white hidden md:block font-clash text-3xl mb-8 font-semibold">
                Register
              </h1>
              {/* <Collapse
                in={
                  error_registering_user?.status === 400 ||
                  error_registering_user
                }
                className="collapse"
              >
                <Alert className="alert" severity="error">
                  {error_registering_user?.data?.email[0] ||
                    (error_registering_user?.error &&
                      `Kindly check your internet connection.`)}
                </Alert>
              </Collapse> */}
              <div className="flex mb-8 text-white">
                <p className="text-xs  md:text-sm self-end -mb-[7px]">
                  Be part of this movement! &nbsp;
                </p>
                <span className="border-b-[1px] w-[101px] inline-block border-b-primary border-dashed ">
                  <div className="flex justify-center">
                    <img
                      src="/assets/female.png"
                      alt="Female emoji"
                      className="inline-block"
                    />
                    <img
                      src="/assets/male.png"
                      alt="Male emoji"
                      className="inline-block"
                    />
                  </div>
                </span>
              </div>

              <div className="text-white">
                <h1 className="text-[20px] md:text-[24px] text-white mb-8">
                  CREATE YOUR ACCOUNT
                </h1>
              </div>
              <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <Stack spacing={1}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
                    <div className=" relative ">
                      <Stack spacing={2}>
                        <label
                          htmlFor="name"
                          className="text-sm font-normal text-white"
                        >
                          Team's Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter the name of your group"
                          id="team_name"
                          className="bg-[#FFFFFF08] font-normal relative text-sm outline-none text-[#FFFFFF40] border w-100 rounded py-2 px-3"
                          {...register("team_name", {
                            required: "Name is required",
                          })}
                        />

                        <p
                          className={`err-msg ${
                            errors.team_name?.message && "err-msg-active"
                          }`}
                        >
                          {errors.team_name?.message}
                        </p>
                      </Stack>
                    </div>
                    <div className="inputs relative">
                      <Stack spacing={2}>
                        <label
                          htmlFor="phone_number"
                          className="text-sm font-normal text-white"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          id="phone_number"
                          placeholder="Enter your phone number"
                          className="bg-[#FFFFFF08] font-normal text-[#FFFFFF40]  text-sm border w-100 rounded py-2 px-3"
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
                      </Stack>
                    </div>
                  </div>
                  {/*  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
                    <div className=" relative ">
                      <Stack spacing={2}>
                        <label
                          htmlFor="name"
                          className="text-sm font-normal text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="password"
                          placeholder="Enter your email address"
                          className="bg-[#FFFFFF08] font-normal relative text-sm outline-none text-[#FFFFFF40] border w-100 rounded py-2 px-3"
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
                      </Stack>
                    </div>
                    <div className="inputs relative">
                      <Stack spacing={2}>
                        <label
                          htmlFor="project_topic"
                          className="text-sm font-normal text-white"
                        >
                          Project Topic
                        </label>
                        <input
                          type="text"
                          id="project_topic"
                          placeholder="What is your project topic"
                          className="bg-[#FFFFFF08] font-normal text-[#FFFFFF40]  text-sm border w-100 rounded py-2 px-3"
                          {...register("project_topic", {
                            required: "Project topic is required",
                          })}
                        />
                        <p
                          className={`err-msg ${
                            errors.project_topic?.message && "err-msg-active"
                          }`}
                        >
                          {errors.project_topic?.message}
                        </p>
                      </Stack>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
                    <div className=" relative ">
                      <Stack spacing={2}>
                        <label
                          htmlFor="name"
                          className="text-sm font-normal text-white"
                        >
                          Category
                        </label>
                        <select
                          name="category"
                          id="category"
                          className="bg-[#FFFFFF08] font-normal text-[#FFF] outline-none text-sm border w-100 rounded py-2 px-3"
                          {...register("category", {
                            required: "Kindly select a category!",
                            valueAsNumber: true,
                          })}
                        >
                          <option value="" className="text-black py-1">
                            {loading
                              ? // <CircularProgress
                                //   style={{ color: "#fff" }}
                                //   size={18}
                                // />
                                "Loading categories..."
                              : "Select your category"}
                          </option>

                          {categories &&
                            categories.map((category) => (
                              <option
                                value={category?.id}
                                className="text-black py-1"
                                key={category.id}
                              >
                                {category?.name}
                              </option>
                            ))}
                        </select>

                        <p
                          className={`err-msg ${
                            errors.category?.message && "err-msg-active"
                          }`}
                        >
                          {errors.category?.message}
                        </p>
                      </Stack>
                    </div>
                    <div className="inputs relative">
                      <Stack spacing={2}>
                        <label
                          htmlFor="name"
                          className="text-sm font-normal text-white"
                        >
                          Group Size
                        </label>
                        <select
                          name="group_size"
                          id="group_size"
                          className="bg-[#FFFFFF08] font-normal text-[#FFF] outline-none text-sm border w-100 rounded py-2 px-3"
                          {...register("group_size", {
                            required: "Kindly select your group size!",
                            valueAsNumber: true,
                          })}
                        >
                          <option value="" className="text-black">
                            Select
                          </option>
                          <option value="1" className="text-black">
                            5
                          </option>
                          <option value="2" className="text-black">
                            10
                          </option>
                          <option value="3" className="text-black">
                            15
                          </option>
                        </select>
                        <p
                          className={`err-msg ${
                            errors.group_size?.message && "err-msg-active"
                          }`}
                        >
                          {errors.group_size?.message}
                        </p>
                      </Stack>
                    </div>
                  </div>
                  {/*  */}
                  <Stack spacing={2}>
                    <p className="text-xs text-[#FF26B9] italic font-normal ">
                      Please review your registration details before submitting
                    </p>
                    <div className="flex items-center">
                      {/* <input
                        type="checkbox"
                        className="bg-black border"
                        {...register("privacy_poclicy_accepted", {
                          required:
                            "Kindly agree to out terms and conditions by checking this box!",
                        })}
                      /> */}
                      <Checkbox
                        className="border-white"
                        sx={{
                          color: "white",
                        }}
                        {...register("privacy_poclicy_accepted", {
                          required:
                            "Kindly agree to out terms and conditions by checking this box!",
                        })}
                      />
                      <p
                        className={`text-xs font-normal ${
                          errors?.privacy_poclicy_accepted?.message
                            ? "text-[#FF0000]"
                            : "text-white"
                        }`}
                      >
                        {errors?.privacy_poclicy_accepted?.message
                          ? errors?.privacy_poclicy_accepted?.message
                          : " I agreed with the event terms and conditions and privacy policy"}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className=" py-3 btn-gradient  text-base font-normal text-white  rounded-lg"
                      disabled={registering_user || isSubmitting}
                    >
                      {registering_user ? (
                        <CircularProgress color="inherit" size={18} />
                      ) : (
                        "Register now"
                      )}
                    </button>
                  </Stack>
                </Stack>
              </form>
            </div>
          </div>
        </Body>
      </div>
    </>
  );
};
