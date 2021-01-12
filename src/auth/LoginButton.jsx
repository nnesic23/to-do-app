import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../assets/log-in.png";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <img
        src={loginImg}
        alt="login"
        className="log-img"
        onClick={() => loginWithRedirect()}
      />
    </div>
  );
};

export default LoginButton;
