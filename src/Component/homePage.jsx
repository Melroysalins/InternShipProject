import React from "react";
import Heading from "./heading";
import ButtonCreateAccount from "./buttonCreateAc";
import ButtonLogin from "./buttonLogin";

const HomePage = () => {
  return (
    <div className="containner">
      <div className="homePage">
        <Heading />
        <ButtonCreateAccount />
        <ButtonLogin />
      </div>
    </div>
  );
};

export default HomePage;
