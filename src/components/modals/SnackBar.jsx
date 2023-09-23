import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSnackBar } from "../../redux/features/ModalSlice";

export function SnackBar() {
  let dispatch = useDispatch();
  let { severity, message, open } = useSelector(
    (state) => state.modals.snackBar
  );

  function handleClose(reason) {
    if (reason === "clickaway") {
      return;
    }

    dispatch(
      toggleSnackBar({
        message: "",
        open: false,
        severity: "info",
      })
    );
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%", color: "white" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
