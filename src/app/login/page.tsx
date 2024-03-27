"use client";
import React, { useState } from "react";
import "../../styles/loginScreen.css";
import { Alert, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function clickLogin() {
    try {
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

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();

      if (data.token) {
        router.push("/Home");
      } else {
        console.log("@@@@@@@");
        alert("invalid username or password");
      }
    } catch (error) {
      handleClick();
    }
  }

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

      {open ? (
        <Alert onClose={handleClose} className="alert-login" severity="error">
          invalid userName & password
        </Alert>
      ) : (
        <></>
      )}

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
