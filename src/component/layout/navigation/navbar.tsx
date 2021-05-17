import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Category from "../../../model/category";
import {CategoryProcess, CategoryType} from "../../../model/enums";
import {RootStore} from "../../../store";

const Navbar = () => {
  const {categories, loading, error, categoryProcess} = useSelector(
    (state: RootStore) => state.category
  );
  let catte: Category[] = [];
  useEffect(() => {
    catte = categories.find((e: Category) => e.type === CategoryType.MAIN);
  }, [categories]);
  return (
    <>
      <header
        id="masthead"
        className="site-header header-v10"
        style={{backgroundImage: "none"}}
      >
        <div className="col-full desktop-only">
          <div className="techmarket-sticky-wrap">
            <div className="row">
              <div className="site-branding">
                <a href="home-v1.html" className="custom-logo-link" rel="home">
                  <h2>Multi Marker</h2>
                </a>
                {/* /.custom-logo-link */}
              </div>
              {/* /.site-branding */}
              {/* ============================================================= End Header Logo ============================================================= */}
              <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                {/* <!-- Navbar brand -->
       
        <!-- Collapse button --> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#basicExampleNav"
                  aria-controls="basicExampleNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <ul className="navbar-nav mr-auto">
                    {/* <!-- Dropdown --> */}
                    <li className="nav-item dropdown multi-level-dropdown">
                      <a
                        href="#"
                        id="menu"
                        data-toggle="dropdown"
                        className="nav-link  w-100"
                      >
                        {" "}
                        <i className="tm tm-departments-thin"></i>
                        <span>All Departments</span>
                        <span className="navbar-toggler-icon"></span>
                      </a>
                      <ul className="dropdown-menu mt-2 rounded-0 primary-color border-0 z-depth-1">
                        <li className="dropdown-item dropdown-submenu p-0">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            className="dropdown-toggle text-white w-100"
                          >
                            Click Me Too!{" "}
                          </a>
                          <ul className="dropdown-menu ml-2 rounded-0 primary-color border-0 z-depth-1">
                            <li className="dropdown-item p-0">
                              <a href="#" className="text-white w-100">
                                Hey
                              </a>
                            </li>

                            <li className="dropdown-item dropdown-submenu p-0">
                              <a
                                href="#"
                                data-toggle="dropdown"
                                className="dropdown-toggle text-white w-100"
                              >
                                Hello{" "}
                              </a>
                              <ul className="dropdown-menu mr-2 rounded-0 primary-color border-0 z-depth-1 r-100 ">
                                <li className="dropdown-item p-0">
                                  <a href="#" className="text-white w-100">
                                    Some
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item dropdown-submenu">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            className="dropdown-toggle text-white w-100"
                          >
                            Click me{" "}
                          </a>
                          <ul className="dropdown-menu mr-2 rounded-0  primary-color border-0 z-depth-1 r-100 ">
                            <li className="dropdown-item p-0">
                              <a href="#" className="text-white w-100">
                                How
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </button>
              </nav>
              <div id="departments-menu" className="dropdown departments-menu">
                <button
                  className="btn dropdown-toggle btn-block"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="tm tm-departments-thin"></i>
                  <span>All Departments</span>
                </button>
                <ul
                  id="menu-departments-menu"
                  className="dropdown-menu yamm departments-menu-dropdown"
                >
                  <li className="highlight menu-item animate-dropdown">
                    <a title="Value of the Day" href="home-v2.html">
                      Value of the Day
                    </a>
                  </li>
                  <li className="highlight menu-item animate-dropdown">
                    <a title="Top 100 Offers" href="home-v3.html">
                      Top 100 Offers
                    </a>
                  </li>
                  {loading && categoryProcess === CategoryProcess.FETCH ? (
                    <div>Loading</div>
                  ) : error && categoryProcess === CategoryProcess.FETCH ? (
                    <div>{error}</div>
                  ) : (
                    // categories
                    //   .find((x: Category) => x.type === CategoryType.SUB && x.categoryId == mainCate.id)

                    catte.map((e: Category) => (
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          {console.log("kjdsk", e)}
                          {e.title}
                          <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              {/* <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                        <div className="kc-col-container">
                          <div className="kc_single_image">
                            <img
                              src="assets/images/megamenu.jpg"
                              className=""
                              alt=""
                            />
                          </div>
                          {/* .kc_single_image */}
                              {/* </div>
                        {/* .kc-col-container */}
                              {/* </div> */} {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Computers &amp; Accessories
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            {e.categoryId ? e.title : ""}
                                          </a>
                                        </li>

                                        <li className="nav-divider"></li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Office &amp; Stationery
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Office &amp; Stationery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pens &amp; Writing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              {/* .departments-menu */}
              <form
                className="navbar-search"
                method="get"
                action="home-v1.html"
              >
                <label className="sr-only screen-reader-text" htmlFor="search">
                  Search for:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    id="search"
                    className="form-control search-field product-search-field"
                    dir="ltr"
                    value=""
                    name="s"
                    placeholder="Search for products"
                  />
                  <div className="input-group-addon search-categories popover-header">
                    <select
                      name="product_cat"
                      id="product_cat"
                      className="postform resizeselect"
                    >
                      <option value="0" selected={true}>
                        All Categories
                      </option>
                      <option className="level-0" value="television">
                        Televisions
                      </option>
                      <option className="level-0" value="home-theater-audio">
                        Home Theater &amp; Audio
                      </option>
                      <option className="level-0" value="headphones">
                        Headphones
                      </option>
                      <option className="level-0" value="digital-cameras">
                        Digital Cameras
                      </option>
                      <option className="level-0" value="cells-tablets">
                        Cells &amp; Tablets
                      </option>
                      <option className="level-0" value="smartwatches">
                        Smartwatches
                      </option>
                      <option className="level-0" value="games-consoles">
                        Games &amp; Consoles
                      </option>
                      <option className="level-0" value="printer">
                        Printer
                      </option>
                      <option className="level-0" value="tv-video">
                        TV &amp; Video
                      </option>
                      <option className="level-0" value="home-entertainment">
                        Home Entertainment
                      </option>
                      <option className="level-0" value="tvs">
                        TVs
                      </option>
                      <option className="level-0" value="speakers">
                        Speakers
                      </option>
                      <option className="level-0" value="computers-laptops">
                        Computers &amp; Laptops
                      </option>
                      <option className="level-0" value="laptops">
                        Laptops
                      </option>
                      <option className="level-0" value="ultrabooks">
                        Ultrabooks
                      </option>
                      <option className="level-0" value="notebooks">
                        Notebooks
                      </option>
                      <option className="level-0" value="desktop-pcs">
                        Desktop PCs
                      </option>
                      <option className="level-0" value="mac-computers">
                        Mac Computers
                      </option>
                      <option className="level-0" value="all-in-one-pc">
                        All in One PC
                      </option>
                      <option className="level-0" value="audio-music">
                        Audio &amp; Music
                      </option>
                      <option className="level-0" value="pc-components">
                        PC Components
                      </option>
                    </select>
                  </div>
                  {/* .input-group-addon */}
                  <div className="input-group-btn input-group-append">
                    <input
                      type="hidden"
                      id="search-param"
                      name="post_type"
                      value="product"
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="fa fa-search"></i>
                      <span className="search-btn">Search</span>
                    </button>
                  </div>
                  {/* .input-group-btn */}
                </div>
                {/* .input-group */}
              </form>
              {/* .navbar-search */}
              <ul className="header-compare nav navbar-nav">
                <li className="nav-item">
                  <a href="compare.html" className="nav-link">
                    <i className="tm tm-compare"></i>
                    <span id="top-cart-compare-count" className="value">
                      3
                    </span>
                  </a>
                </li>
              </ul>
              {/* .header-compare */}
              <ul className="header-wishlist nav navbar-nav">
                <li className="nav-item">
                  <a href="wishlist.html" className="nav-link">
                    <i className="tm tm-favorites"></i>
                    <span id="top-cart-wishlist-count" className="value">
                      3
                    </span>
                  </a>
                </li>
              </ul>
              {/* .header-wishlist */}
              <ul id="site-header-cart" className="site-header-cart menu">
                <li className="animate-dropdown dropdown ">
                  <a
                    className="cart-contents"
                    href="cart.html"
                    data-toggle="dropdown"
                    title="View your shopping cart"
                  >
                    <i className="tm tm-shopping-bag"></i>
                    <span className="count">2</span>
                    <span className="amount">
                      <span className="price-label">Your Cart</span>&#036;136.99
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-mini-cart">
                    <li>
                      <div className="widget woocommerce widget_shopping_cart">
                        <div className="widget_shopping_cart_content">
                          <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                            <li className="woocommerce-mini-cart-item mini_cart_item">
                              <a
                                href="#"
                                className="remove"
                                aria-label="Remove this item"
                                data-product_id="65"
                                data-product_sku=""
                              >
                                ×
                              </a>
                              <a href="single-product-sidebar.html">
                                <img
                                  src="assets/images/products/mini-cart1.jpg"
                                  className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                  alt=""
                                />
                                XONE Wireless Controller&nbsp;
                              </a>
                              <span className="quantity">
                                1 ×
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  64.99
                                </span>
                              </span>
                            </li>
                            <li className="woocommerce-mini-cart-item mini_cart_item">
                              <a
                                href="#"
                                className="remove"
                                aria-label="Remove this item"
                                data-product_id="27"
                                data-product_sku=""
                              >
                                ×
                              </a>
                              <a href="single-product-sidebar.html">
                                <img
                                  src="assets/images/products/mini-cart2.jpg"
                                  className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                  alt=""
                                />
                                Gear Virtual Reality 3D with Bluetooth
                                Glasses&nbsp;
                              </a>
                              <span className="quantity">
                                1 ×
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  72.00
                                </span>
                              </span>
                            </li>
                          </ul>
                          {/* .cart_list */}
                          <p className="woocommerce-mini-cart__total total">
                            <strong>Subtotal:</strong>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              136.99
                            </span>
                          </p>
                          <p className="woocommerce-mini-cart__buttons buttons">
                            <Link to="/viewCart" className="button wc-forward">
                              View cart
                            </Link>
                            <a
                              href="checkout.html"
                              className="button checkout wc-forward"
                            >
                              Checkout
                            </a>
                          </p>
                        </div>
                        {/* .widget_shopping_cart_content */}
                      </div>
                      {/* .widget_shopping_cart */}
                    </li>
                  </ul>
                  {/* .dropdown-menu-mini-cart */}
                </li>
              </ul>
              {/* .site-header-cart */}
            </div>
            {/* /.row */}
          </div>
          {/* /.techmarket-sticky-wrap */}
          <div className="stretched-row">
            <div className="col-full">
              <div className="row">
                <nav
                  id="navbar-primary"
                  className="navbar-primary"
                  aria-label="Navbar Primary"
                  data-nav="flex-menu"
                >
                  <ul id="menu-navbar-primary" className="nav yamm">
                    <li className="menu-item animate-dropdown">
                      <a title="ALL CATEGORIES" href="product-category.html">
                        ALL CATEGORIES
                      </a>
                    </li>
                    <li className="menu-item animate-dropdown">
                      <a
                        title="COMPUTERS &amp; LAPTOPS"
                        href="product-category.html"
                      >
                        COMPUTERS &#038; LAPTOPS
                      </a>
                    </li>

                    <li className="menu-item animate-dropdown">
                      <a
                        title="CAMERAS &amp; PHOTO"
                        href="product-category.html"
                      >
                        CAMERAS &#038; PHOTO
                      </a>
                    </li>
                    <li className="menu-item animate-dropdown">
                      <a
                        title="PHONES &amp; TABLETS"
                        href="product-category.html"
                      >
                        PHONES &#038; TABLETS
                      </a>
                    </li>
                    <li className="menu-item animate-dropdown">
                      <a
                        title="GAMES &amp; CONSOLES"
                        href="product-category.html"
                      >
                        GAMES &#038; CONSOLES
                      </a>
                    </li>
                    <li className="menu-item animate-dropdown">
                      <a title="TV &amp; AUDIO" href="product-category.html">
                        TV &#038; AUDIO
                      </a>
                    </li>
                    <li className="menu-item animate-dropdown">
                      <a
                        title="CAR ELECTRONIC &amp; GPS"
                        href="product-category.html"
                      >
                        CAR ELECTRONIC &#038; GPS
                      </a>
                    </li>
                    <li className="menu-item animate-dropdown">
                      <a title="ACCESORIES" href="product-category.html">
                        ACCESORIES
                      </a>
                    </li>
                    <li className="techmarket-flex-more-menu-item dropdown">
                      <a
                        title="..."
                        href="#"
                        data-toggle="dropdown"
                        className="dropdown-toggle"
                      >
                        ...
                      </a>
                      <ul className="overflow-items dropdown-menu"></ul>
                    </li>
                  </ul>
                  {/* .nav */}
                </nav>
                {/* .navbar-primary */}
              </div>
              {/* .row */}
            </div>
            {/* .col-full */}
          </div>
          {/* .stretched-row */}
        </div>
        {/* .col-full */}
        <div className="col-full handheld-only">
          <div className="handheld-header">
            <div className="row">
              <div className="site-branding">
                <a href="home-v1.html" className="custom-logo-link" rel="home">
                  Home
                </a>
                {/* /.custom-logo-link */}
              </div>
              {/* /.site-branding */}
              {/* ============================================================= End Header Logo ============================================================= */}
              <div className="handheld-header-links">
                <ul className="columns-3">
                  <li className="my-account">
                    <a href="login-and-register.html" className="has-icon">
                      <i className="tm tm-login-register"></i>
                    </a>
                  </li>
                  <li className="wishlist">
                    <a href="wishlist.html" className="has-icon">
                      <i className="tm tm-favorites"></i>
                      <span className="count">3</span>
                    </a>
                  </li>
                  <li className="compare">
                    <a href="compare.html" className="has-icon">
                      <i className="tm tm-compare"></i>
                      <span className="count">3</span>
                    </a>
                  </li>
                </ul>
                {/* .columns-3 */}
              </div>
              {/* .handheld-header-links */}
            </div>
            {/* /.row */}
            <div className="techmarket-sticky-wrap">
              <div className="row">
                <nav
                  id="handheld-navigation"
                  className="handheld-navigation"
                  aria-label="Handheld Navigation"
                >
                  <button className="btn navbar-toggler" type="button">
                    <i className="tm tm-departments-thin"></i>
                    <span>Menu</span>
                  </button>
                  <div className="handheld-navigation-menu">
                    <span className="tmhm-close">Close</span>
                    <ul id="menu-departments-menu-1" className="nav">
                      <li className="highlight menu-item animate-dropdown">
                        <a title="Value of the Day" href="shop.html">
                          Value of the Day
                        </a>
                      </li>
                      <li className="highlight menu-item animate-dropdown">
                        <a title="Top 100 Offers" href="shop.html">
                          Top 100 Offers
                        </a>
                      </li>
                      <li className="highlight menu-item animate-dropdown">
                        <a title="New Arrivals" href="shop.html">
                          New Arrivals
                        </a>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="Computers &amp; Laptops"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          Computers &#038; Laptops{" "}
                          <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Computers &amp; Accessories
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Computers &amp; Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Laptops, Desktops &amp; Monitors
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pen Drives, Hard Drives &amp; Memory
                                            Cards
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Printers &amp; Ink
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Networking &amp; Internet Devices
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Computer Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Software</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Office &amp; Stationery
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Office &amp; Stationery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pens &amp; Writing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="Cameras &amp; Photo"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          Cameras &#038; Photo <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu-1.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Cameras & Photography
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Cameras & Photography
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Point & Shoot Cameras
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Lenses</a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Camera Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Security & Surveillance
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Binoculars & Telescopes
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Camcorders</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Audio & Video
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Audio & Video
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Headphones & Speakers
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Home Entertainment Systems
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            MP3 & Media Players
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="Smart Phones &amp; Tablets"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          Smart Phones &#038; Tablets{" "}
                          <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Computers &amp; Accessories
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Computers &amp; Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Laptops, Desktops &amp; Monitors
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pen Drives, Hard Drives &amp; Memory
                                            Cards
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Printers &amp; Ink
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Networking &amp; Internet Devices
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Computer Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Software</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Office &amp; Stationery
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Office &amp; Stationery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pens &amp; Writing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="Video Games &amp; Consoles"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          Video Games &#038; Consoles{" "}
                          <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu-1.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Cameras & Photography
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Cameras & Photography
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Point & Shoot Cameras
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Lenses</a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Camera Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Security & Surveillance
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Binoculars & Telescopes
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Camcorders</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Audio & Video
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Audio & Video
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Headphones & Speakers
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Home Entertainment Systems
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            MP3 & Media Players
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="TV &amp; Audio"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          TV &#038; Audio <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Computers &amp; Accessories
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Computers &amp; Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Laptops, Desktops &amp; Monitors
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pen Drives, Hard Drives &amp; Memory
                                            Cards
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Printers &amp; Ink
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Networking &amp; Internet Devices
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Computer Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Software</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Office &amp; Stationery
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Office &amp; Stationery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pens &amp; Writing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="Car Electronic &amp; GPS"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          Car Electronic &#038; GPS{" "}
                          <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu-1.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Cameras & Photography
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Cameras & Photography
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Point & Shoot Cameras
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Lenses</a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Camera Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Security & Surveillance
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Binoculars & Telescopes
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Camcorders</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Audio & Video
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Audio & Video
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Headphones & Speakers
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Home Entertainment Systems
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            MP3 & Media Players
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="yamm-tfw menu-item menu-item-has-children animate-dropdown dropdown-submenu">
                        <a
                          title="Accesories"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          aria-haspopup="true"
                          href="#"
                        >
                          Accesories <span className="caret"></span>
                        </a>
                        <ul role="menu" className=" dropdown-menu">
                          <li className="menu-item menu-item-object-static_block animate-dropdown">
                            <div className="yamm-content">
                              <div className="bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right">
                                <div className="kc-col-container">
                                  <div className="kc_single_image">
                                    <img
                                      src="assets/images/megamenu.jpg"
                                      className=""
                                      alt=""
                                    />
                                  </div>
                                  {/* .kc_single_image */}
                                </div>
                                {/* .kc-col-container */}
                              </div>
                              {/* .bg-yamm-content */}
                              <div className="row yamm-content-row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Computers &amp; Accessories
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Computers &amp; Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Laptops, Desktops &amp; Monitors
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pen Drives, Hard Drives &amp; Memory
                                            Cards
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Printers &amp; Ink
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Networking &amp; Internet Devices
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Computer Accessories
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">Software</a>
                                        </li>
                                        <li className="nav-divider"></li>
                                        <li>
                                          <a href="#">
                                            <span className="nav-text">
                                              All Electronics
                                            </span>
                                            <span className="nav-subtext">
                                              Discover more products
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                                <div className="col-md-6 col-sm-12">
                                  <div className="kc-col-container">
                                    <div className="kc_text_block">
                                      <ul>
                                        <li className="nav-title">
                                          Office &amp; Stationery
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            All Office &amp; Stationery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop.html">
                                            Pens &amp; Writing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* .kc_text_block */}
                                  </div>
                                  {/* .kc-col-container */}
                                </div>
                                {/* .kc_column */}
                              </div>
                              {/* .kc_row */}
                            </div>
                            {/* .yamm-content */}
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item animate-dropdown">
                        <a title="Gadgets" href="shop.html">
                          Gadgets
                        </a>
                      </li>
                      <li className="menu-item animate-dropdown">
                        <a title="Virtual Reality" href="shop.html">
                          Virtual Reality
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .handheld-navigation-menu */}
                </nav>
                {/* .handheld-navigation */}
                <div className="site-search">
                  <div className="widget woocommerce widget_product_search">
                    <form
                      role="search"
                      method="get"
                      className="woocommerce-product-search"
                      action="home-v1.html"
                    >
                      <label
                        className="screen-reader-text"
                        htmlFor="woocommerce-product-search-field-0"
                      >
                        Search for:
                      </label>
                      <input
                        type="search"
                        id="woocommerce-product-search-field-0"
                        className="search-field"
                        placeholder="Search products&hellip;"
                        value=""
                        name="s"
                      />
                      <input type="submit" value="Search" />
                      <input type="hidden" name="post_type" value="product" />
                    </form>
                  </div>
                  {/* .widget */}
                </div>
                {/* .site-search */}
                <a
                  className="handheld-header-cart-link has-icon"
                  href="cart.html"
                  title="View your shopping cart"
                >
                  <i className="tm tm-shopping-bag"></i>
                  <span className="count">2</span>
                </a>
              </div>
              {/* /.row */}
            </div>
            {/* .techmarket-sticky-wrap */}
          </div>
          {/* .handheld-header */}
        </div>
        {/* .handheld-only */}
      </header>
    </>
  );
};

export default Navbar;
