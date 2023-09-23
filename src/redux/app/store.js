import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../features/ModalSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthApi } from "../features/AuthApi";
import { CategoriesApi } from "../features/CategoriesApi";

export const store = configureStore({
  reducer: {
    modals: ModalSlice,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [CategoriesApi.reducerPath]: CategoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, CategoriesApi.middleware),
});

setupListeners(store.dispatch);
