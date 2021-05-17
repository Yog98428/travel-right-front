import React from "react";
import {Link} from "react-router-dom";

const topNav = () => {
  return (
    <div className="top-bar top-bar-v9">
      <div className="col-full">
        <ul id="menu-top-bar-left" className="nav menu-top-bar-left">
          <li className="menu-item animate-dropdown">
            <a
              title="TechMarket eCommerce - Always free delivery"
              href="contact-v1.html"
            >
              TechMarket eCommerce &#8211; Always free delivery
            </a>
          </li>
          <li className="menu-item animate-dropdown">
            <a title="Quality Guarantee of products" href="shop.html">
              Quality Guarantee of products
            </a>
          </li>
          <li className="menu-item animate-dropdown">
            <a title="Fast returnings program" href="track-your-order.html">
              Fast returnings program
            </a>
          </li>
          <li className="menu-item animate-dropdown">
            <a title="No additional fees" href="contact-v2.html">
              No additional fees
            </a>
          </li>
        </ul>
        {/* .nav**/}
        <ul id="menu-top-bar-right" className="nav menu-top-bar-right">
          <li className="hidden-sm-down menu-item animate-dropdown">
            <a title="Track Your Order" href="track-your-order.html">
              <i className="tm tm-order-tracking"></i>Track Your Order
            </a>
          </li>
          <li className="menu-item menu-item-has-children animate-dropdown dropdown">
            <a
              title="Dollar (US)"
              data-toggle="dropdown"
              className="dropdown-toggle"
              href="#"
            >
              <i className="tm tm-dollar"></i>Dollar (US)
              <span className="caret"></span>
            </a>
            <ul role="menu" className="dropdown-menu">
              <li className="menu-item animate-dropdown">
                <a title="AUD" href="#">
                  AUD
                </a>
              </li>
              <li className="menu-item animate-dropdown">
                <a title="INR" href="#">
                  INR
                </a>
              </li>
              <li className="menu-item animate-dropdown">
                <a title="AED" href="#">
                  AED
                </a>
              </li>
              <li className="menu-item animate-dropdown">
                <a title="SGD" href="#">
                  SGD
                </a>
              </li>
            </ul>
            {/* .dropdown-menu**/}
          </li>
          <li className="menu-item">
            <Link to="/LoginAndRegisterPage">
              <a title="My Account" href="login-and-register.html">
                <i className="tm tm-login-register"></i>Register or Sign in
              </a>
            </Link>
          </li>
        </ul>
        {/* .nav**/}
      </div>
      {/* .col-full**/}
    </div>
  );
};

export default topNav;
