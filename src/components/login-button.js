import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '@styles/Login.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="primary-button login-button"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;