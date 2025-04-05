import React from "react";
import { useNavigate } from "react-router";

const ButtonLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <button onClick={() => navigate("/login")}>
        {" "}
        Already Registered? Login
      </button>
    </div>
  );
};

export default ButtonLogin;
