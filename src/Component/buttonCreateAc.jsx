import React from "react";
import { useNavigate } from "react-router";

const ButtonCreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="loginbtn">
      <button onClick={() => navigate("/register")}>Create Account</button>
    </div>
  );
};

export default ButtonCreateAccount;
