import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GETLINKED_BASEURL } from "../../utils/constants";

export const AuthApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GETLINKED_BASEURL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", `application/json`);
    },
  }),
  reducerPath: "Auth",
  tagTypes: ["Auth", "User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/hackathon/registration",
        method: "POST",
        body,
      }),
      transformResponse: (response, meta, arg) => response,
      invalidatesTags: ["User"],
    }),
    contactUs: builder.mutation({
      query: (body) => ({
        url: "/hackathon/contact-form",
        method: "POST",
        body,
      }),
      transformResponse: (response, meta, arg) => response,
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { useRegisterUserMutation, useContactUsMutation } = AuthApi;
