import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logoutImg from "../assets/logout.png";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <img
        src={logoutImg}
        alt="logout"
        className="log-img"
        onClick={() => logout()}
      />
    </div>
  );
};

export default LogoutButton;
