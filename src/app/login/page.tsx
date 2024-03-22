"use client";
import React from "react";
import "../../styles/loginScreen.css";
import { Button, TextField } from "@mui/material";

function Login() {
  return (
    <div className="login-maicontainer">
      <h1 style={{ fontWeight: "700" }}>Login</h1>
      <span className="login-heading">
        See your growth and get consulting support!
      </span>
      <img
        style={{ marginTop: "50px" }}
        src="https://technosavys.org/images/new-images/login-graphic.svg"
        width={300}
        height={300}
      />
      <div className="login-container1">
        <TextField
          className="login-textField"
          id="outlined-basic"
          label="Email adress"
          variant="outlined"
        />
        <TextField
          className="login-textField"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button className="login-button" variant="contained" style={{ backgroundColor: 'transparent' }}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
