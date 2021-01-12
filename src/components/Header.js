import React from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import User from "../auth/User";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <img
        src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Checklist-icon.png"
        alt="logo"
        className="logo-img"
      />
      <h1>TO DO APP</h1>
      {!isAuthenticated ? (
        <div className="nav-user">
          <LoginButton />
        </div>
      ) : (
        <div className="nav-user">
          <LogoutButton />
          <User />
        </div>
      )}
    </header>
  );
};

export default Header;
