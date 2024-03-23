"use client";
import React, { useState } from "react";
import "../../styles/loginScreen.css";
import { Button, TextField } from "@mui/material";
import { json } from "stream/consumers";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value);
  };

   async function clickLogin() {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: Password,
      }),
    });
    const data = await response.json();
    console.log('@@@@',data)
  };

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
          onChange={handleEmailChange}
        />
        <TextField
          className="login-textField"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
        <Button
        onClick={clickLogin}
          className="login-button"
          variant="contained"
          style={{ backgroundColor: "transparent" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
