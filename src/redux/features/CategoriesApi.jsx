import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GETLINKED_BASEURL } from "../../utils/constants";

export const CategoriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GETLINKED_BASEURL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", `application/json`);
    },
  }),
  reducerPath: "categories",
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/hackathon/categories-list",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response,
      invalidatesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery, useLazyGetCategoriesQuery } =
  CategoriesApi;
