import React, { useState } from "react";
import { CheckValidation } from "../utils/validationCheck";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isEmailValid, SetIsEmailValid] = useState(false);
  const [isPasswordValid, SetIsPasswordValid] = useState(false);

  const navigate = useNavigate("");

  const handlEmail = (e) => {
    let email = e.target.value;
    SetEmail(email);
    let result = CheckValidation(email, password);

    console.log("Result", result);

    if (result) {
      SetIsEmailValid(true);
      SetIsPasswordValid(true);
    }
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    SetPassword(password);
    let result = CheckValidation(email, password);

    console.log("Result", result, isEmailValid, isPasswordValid);

    if (result) {
      SetIsEmailValid(true);
      SetIsPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = CheckValidation(email, password);

    if (result) {
      navigate("/account");
    }
  };
  return (
    <div className="Logincontainer">
      <div className="signin-box">
        <h2>
          Signin to your <span className="bold">PopX</span> account
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => handlEmail(e)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => handlePassword(e)}
            />
          </div>

          <button
            type="submit"
            className={
              isEmailValid && isPasswordValid
                ? "login-buttonActive"
                : "login-button"
            }
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
