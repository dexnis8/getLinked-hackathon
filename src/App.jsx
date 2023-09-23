import { useState, useEffect } from "react";
import "./App.css";
import { IndexPage } from "./pages/LandingPage/IndexPage";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Auth/Register";
import SnackBar from "./components/modals/SnackBar";
import PageNotFound from "./pages/404/PageNotFound";
import { Contact } from "./pages/Contact/Contact";

function App() {
  // const [categories, loading, error_fetching] = useGetCategoriesQuery({
  //   selectFromResult: ({ data, isLoading, error }) => ({
  //     categories: data,
  //     isLoading: loading,
  //     error: error_fetching,
  //   }),
  // });

  return (
    <>
      <SnackBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Contact />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
