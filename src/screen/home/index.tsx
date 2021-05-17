import React from "react";
import {useDispatch} from "react-redux";
import NavBar from "../../component/layout/navigation/navbar";
import TopBar from "../../component/layout/navigation/topNav";
import HomeSlider from "../../component/homeSlider/homeslider";
import HomeScreenCategoryList from "../../component/homeCategoryContent/homeCategoryList";
import ProductSlider from "../../component/productSlider/productSlider";
import HomeScreenCategorySlider from "../../component/homeScreenCategories/homeScreenCategories";
import {fetchCategory} from "../../store/action/category";
import {fetchFlashProduct} from "../../store/action/product";
import SaveProduct from "../../component/saveProduct/savaProduct";
import Banners from "../../component/banners/banners";
import Middlebanner from "../../component/banners/middlebanner";

const Index = () => {
  const dispatch = useDispatch();
  dispatch(fetchCategory());
  dispatch(fetchFlashProduct());
  return (
    <>
      <div id="page" className="hfeed site ">
        <TopBar />
        <NavBar />
        <div id="content" className="site-content">
          <div className="homev12-slider-with-banners row">
            {/* Slider */}
            <HomeSlider />
            {/* Home screen Category Listt */}
            <HomeScreenCategoryList />
          </div>

          {/* Hot New Arrivial */}

          <ProductSlider />

          {/* save on clothing  */}
          <SaveProduct />
          {/* home Screen Category SLider */}
          <HomeScreenCategorySlider />
        </div>

        {/* Home Screen Hot new Arrval */}

        <Banners />

        <Middlebanner />

        {/*  footers*/}
        <footer className="site-footer footer-v1">
          <div className="col-full">
            <div className="before-footer-wrap">
              <div className="col-full">
                <div className="footer-newsletter">
                  <div className="media">
                    <i className="footer-newsletter-icon tm tm-newsletter"></i>
                    <div className="media-body">
                      <div className="clearfix">
                        <div className="newsletter-header">
                          <h5 className="newsletter-title">
                            Sign up to Newsletter
                          </h5>
                          <span className="newsletter-marketing-text">
                            ...and receive
                            <strong>$20 coupon for first shopping</strong>
                          </span>
                        </div>
                        {/* .newsletter-header**/}
                        <div className="newsletter-body">
                          <form className="newsletter-form">
                            <input
                              type="text"
                              placeholder="Enter your email address"
                            />
                            <button className="button" type="button">
                              Sign up
                            </button>
                          </form>
                        </div>
                        {/* .newsletter body**/}
                      </div>
                      {/* .clearfix**/}
                    </div>
                    {/* .media-body**/}
                  </div>
                  {/* .media**/}
                </div>
                {/* .footer-newsletter**/}
                <div className="footer-social-icons">
                  <ul className="social-icons nav">
                    <li className="nav-item">
                      <a className="sm-icon-label-link nav-link" href="#">
                        <i className="fa fa-facebook"></i> Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="sm-icon-label-link nav-link" href="#">
                        <i className="fa fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="sm-icon-label-link nav-link" href="#">
                        <i className="fa fa-google-plus"></i> Google+
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="sm-icon-label-link nav-link" href="#">
                        <i className="fa fa-vimeo-square"></i> Vimeo
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="sm-icon-label-link nav-link" href="#">
                        <i className="fa fa-rss"></i> RSS
                      </a>
                    </li>
                  </ul>
                </div>
                {/* .footer-social-icons**/}
              </div>
              {/* .col-full**/}
            </div>
            {/* .before-footer-wrap**/}
            <div className="footer-widgets-block">
              <div className="row">
                <div className="footer-contact">
                  <div className="footer-logo">
                    <a
                      href="home-v1.html"
                      className="custom-logo-link"
                      rel="home"
                    ></a>
                  </div>
                  {/* .footer-logo**/}
                  <div className="contact-payment-wrap">
                    <div className="footer-contact-info">
                      <div className="media">
                        <span className="media-left icon media-middle">
                          <i className="tm tm-call-us-footer"></i>
                        </span>
                        <div className="media-body">
                          <span className="call-us-title">
                            Got Questions ? Call us 24/7!
                          </span>
                          <span className="call-us-text">
                            (800) 8001-8588, (0600) 874 548
                          </span>
                          <address className="footer-contact-address">
                            17 Princess Road, London, Greater London NW1 8JR, UK
                          </address>
                          <a href="#" className="footer-address-map-link">
                            <i className="tm tm-map-marker"></i>Find us on map
                          </a>
                        </div>
                        {/* .media-body**/}
                      </div>
                      {/* .media**/}
                    </div>
                    {/* .footer-contact-info**/}
                    <div className="footer-payment-info">
                      <div className="media">
                        <span className="media-left icon media-middle">
                          <i className="tm tm-safe-payments"></i>
                        </span>
                        <div className="media-body">
                          <h5 className="footer-payment-info-title">
                            We are using safe payments
                          </h5>
                          <div className="footer-payment-icons">
                            <ul className="list-payment-icons nav">
                              <li className="nav-item">
                                <img
                                  className="payment-icon-image"
                                  src="assets/images/credit-cards/mastercard.svg"
                                  alt="mastercard"
                                />
                              </li>
                              <li className="nav-item">
                                <img
                                  className="payment-icon-image"
                                  src="assets/images/credit-cards/visa.svg"
                                  alt="visa"
                                />
                              </li>
                              <li className="nav-item">
                                <img
                                  className="payment-icon-image"
                                  src="assets/images/credit-cards/paypal.svg"
                                  alt="paypal"
                                />
                              </li>
                              <li className="nav-item">
                                <img
                                  className="payment-icon-image"
                                  src="assets/images/credit-cards/maestro.svg"
                                  alt="maestro"
                                />
                              </li>
                            </ul>
                          </div>
                          {/* .footer-payment-icons**/}
                          <div className="footer-secure-by-info">
                            <h6 className="footer-secured-by-title">
                              Secured by:
                            </h6>
                            <ul className="footer-secured-by-icons">
                              <li className="nav-item">
                                <img
                                  className="secure-icons-image"
                                  src="assets/images/secured-by/norton.svg"
                                  alt="norton"
                                />
                              </li>
                              <li className="nav-item">
                                <img
                                  className="secure-icons-image"
                                  src="assets/images/secured-by/mcafee.svg"
                                  alt="mcafee"
                                />
                              </li>
                            </ul>
                          </div>
                          {/* .footer-secure-by-info**/}
                        </div>
                        {/* .media-body**/}
                      </div>
                      {/* .media**/}
                    </div>
                    {/* .footer-payment-info**/}
                  </div>
                  {/* .contact-payment-wrap**/}
                </div>
                {/* .footer-contact**/}
                <div className="footer-widgets">
                  <div className="columns">
                    <aside className="widget clearfix">
                      <div className="body">
                        <h4 className="widget-title">Find it Fast</h4>
                        <div className="menu-footer-menu-1-container">
                          <ul id="menu-footer-menu-1" className="menu">
                            <li className="menu-item">
                              <a href="shop.html">Computers &#038; Laptops</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Cameras &#038; Photography</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">
                                Smart Phones &#038; Tablets
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">
                                Video Games &#038; Consoles
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">TV</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Car Electronic &#038; GPS</a>
                            </li>
                          </ul>
                        </div>
                        {/* .menu-footer-menu-1-container**/}
                      </div>
                      {/* .body**/}
                    </aside>
                    {/* .widget**/}
                  </div>
                  {/* .columns**/}
                  <div className="columns">
                    <aside className="widget clearfix">
                      <div className="body">
                        <h4 className="widget-title">&nbsp;</h4>
                        <div className="menu-footer-menu-2-container">
                          <ul id="menu-footer-menu-2" className="menu">
                            <li className="menu-item">
                              <a href="shop.html">Printers &#038; Ink</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Audio &amp; Music</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Home Theaters</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">PC Components</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Ultrabooks</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Smartwatches</a>
                            </li>
                          </ul>
                        </div>
                        {/* .menu-footer-menu-2-container**/}
                      </div>
                      {/* .body**/}
                    </aside>
                    {/* .widget**/}
                  </div>
                  {/* .columns**/}
                  <div className="columns">
                    <aside className="widget clearfix">
                      <div className="body">
                        <h4 className="widget-title">Customer Care</h4>
                        <div className="menu-footer-menu-3-container">
                          <ul id="menu-footer-menu-3" className="menu">
                            <li className="menu-item">
                              <a href="login-and-register.html">My Account</a>
                            </li>
                            <li className="menu-item">
                              <a href="track-your-order.html">Track Order</a>
                            </li>
                            <li className="menu-item">
                              <a href="shop.html">Shop</a>
                            </li>
                            <li className="menu-item">
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li className="menu-item">
                              <a href="about.html">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a href="terms-and-conditions.html">
                                Returns/Exchange
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="faq.html">FAQs</a>
                            </li>
                          </ul>
                        </div>
                        {/* .menu-footer-menu-3-container**/}
                      </div>
                      {/* .body**/}
                    </aside>
                    {/* .widget**/}
                  </div>
                  {/* .columns**/}
                </div>
                {/* .footer-widgets**/}
              </div>
              {/* .row**/}
            </div>
            {/* .footer-widgets-block**/}
            <div className="site-info">
              <div className="col-full">
                <div className="copyright">
                  Copyright &copy; 2017 <a href="home-v1.html">Techmarket</a>{" "}
                  Theme. All rights reserved.
                </div>
                {/* .copyright**/}
                <div className="credit">
                  Made with
                  <i className="fa fa-heart"></i> by bcube.
                </div>
                {/* .credit**/}
              </div>
              {/* .col-full**/}
            </div>
            {/* .site-info**/}
          </div>
          {/* .col-full**/}
        </footer>
        {/* .site-footer**/}
      </div>
    </>
  );
};

export default Index;
