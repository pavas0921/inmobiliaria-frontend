import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alerts = (props) => {
  const { message, status } = props;
  const [showAlert, setShowAlert] = useState(false);

  const succesAlert = () => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const errorAlert = () => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  
  useEffect(() => {
    setShowAlert(true)
    
  }, [])
  

  useEffect(() => {
    if (showAlert) {

        

      switch (status) {
        case "error":
          errorAlert();
          break;

        case "success":
            console.log("show****", showAlert)
          succesAlert();
          break;
      }
    }
  }, [showAlert]);

  return (
    <Box sx={{ height: "100vh" }}>
      <ToastContainer />
    </Box>
  );
};

export default Alerts;
