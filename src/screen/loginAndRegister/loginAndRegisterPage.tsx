import React from "react";
import Signup from "../../component/loginAndRegister/signup";
// import LoginAndRegister from "../../component/loginAndRegister/signup";
import NavBar from "../../component/layout/navigation/navbar";
import TopBar from "../../component/layout/navigation/topNav";

const LoginAndRegisterPage = () => {
  return (
    <div id="page" className="hfeed site ">
      <TopBar />
      <NavBar />
      <div id="content" className="site-content">
        <Signup />
      </div>
    </div>
  );
};

export default LoginAndRegisterPage;
