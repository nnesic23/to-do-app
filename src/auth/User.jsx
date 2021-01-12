import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );

  return (
    isAuthenticated && (
      <div className="user">
        <img src={user.picture} alt="user" />
      </div>
    )
  );
};

export default User;
