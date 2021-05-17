import React from "react";
import "./App.css";
import Home from "./screen/home/index";
import "./sass/index.scss";
import {Switch, Route} from "react-router-dom";
import LoginAndRegisterPage from "./screen/loginAndRegister/loginAndRegisterPage";
import ProductDetail from "./screen/productDetail/productDetail";
import cart from "./component/carts/viewCart";
import Signin from "./component/loginAndRegister/signin";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/loginAndRegisterPage" component={LoginAndRegisterPage} />
        <Route path="/productDetail" component={ProductDetail} />
        <Route path="/viewCart" component={cart} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </>
  );
}

export default App;
