import React from "react";

const cart = () => {
  return (
    <>
      <div id="content" className="site-content">
        <div className="col-full">
          <div className="row">
            <nav className="woocommerce-breadcrumb">
              <a href="home-v1.html">Home</a>
              <span className="delimiter">
                <i className="tm tm-breadcrumbs-arrow-right"></i>
              </span>
              Cart
            </nav>
            {/* <!-- .woocommerce-breadcrumb --> */}
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="type-page hentry">
                  <div className="entry-content">
                    <div className="woocommerce">
                      <div className="cart-wrapper">
                        <form
                          method="post"
                          action="#"
                          className="woocommerce-cart-form"
                        >
                          <table className="shop_table shop_table_responsive cart">
                            <thead>
                              <tr>
                                <th className="product-remove">&nbsp;</th>
                                <th className="product-thumbnail">&nbsp;</th>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="product-remove">
                                  <a className="remove" href="#">
                                    ×
                                  </a>
                                </td>
                                <td className="product-thumbnail">
                                  <a href="single-product-fullwidth.html">
                                    <img
                                      width="180"
                                      height="180"
                                      alt=""
                                      className="wp-post-image"
                                      src="single-product-fullwidth.html"
                                    />
                                  </a>
                                </td>
                                <td
                                  data-title="Product"
                                  className="product-name"
                                >
                                  <div className="media cart-item-product-detail">
                                    <a href="single-product-fullwidth.html">
                                      <img
                                        width="180"
                                        height="180"
                                        alt=""
                                        className="wp-post-image"
                                        src="assets/images/products/cart-1.jpg"
                                      />
                                    </a>
                                    <div className="media-body align-self-center">
                                      <a href="single-product-fullwidth.html">
                                        55" KU6470 6 Series UHD Crystal Colour
                                        HDR Smart TV
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  data-title="Price"
                                  className="product-price"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    627.99
                                  </span>
                                </td>
                                <td
                                  className="product-quantity"
                                  data-title="Quantity"
                                >
                                  <div className="quantity">
                                    <label htmlFor="quantity-input-1">
                                      Quantity
                                    </label>
                                    <input
                                      id="quantity-input-1"
                                      type="number"
                                      name="cart[e2230b853516e7b05d79744fbd4c9c13][qty]"
                                      value="1"
                                      title="Qty"
                                      className="input-text qty text"
                                      size={4}
                                    />
                                  </div>
                                </td>
                                <td
                                  data-title="Total"
                                  className="product-subtotal"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    627.99
                                  </span>
                                  <a
                                    title="Remove this item"
                                    className="remove"
                                    href="#"
                                  >
                                    ×
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="product-remove">
                                  <a className="remove" href="#">
                                    ×
                                  </a>
                                </td>
                                <td className="product-thumbnail">
                                  <a href="single-product-fullwidth.html">
                                    <img
                                      width="180"
                                      height="180"
                                      alt=""
                                      className="wp-post-image"
                                      src="single-product-fullwidth.html"
                                    />
                                  </a>
                                </td>
                                <td
                                  data-title="Product"
                                  className="product-name"
                                >
                                  <div className="media cart-item-product-detail">
                                    <a href="single-product-fullwidth.html">
                                      <img
                                        width="180"
                                        height="180"
                                        alt=""
                                        className="wp-post-image"
                                        src="assets/images/products/cart-2.jpg"
                                      />
                                    </a>
                                    <div className="media-body align-self-center">
                                      <a href="single-product-fullwidth.html">
                                        4K Action Cam GPS
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  data-title="Price"
                                  className="product-price"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    627.99
                                  </span>
                                </td>
                                <td
                                  className="product-quantity"
                                  data-title="Quantity"
                                >
                                  <div className="quantity">
                                    <label htmlFor="quantity-input-2">
                                      Quantity
                                    </label>
                                    <input
                                      id="quantity-input-2"
                                      type="number"
                                      name="cart[e2230b853516e7b05d79744fbd4c9c13][qty]"
                                      value="1"
                                      title="Qty"
                                      className="input-text qty text"
                                      size={4}
                                    />
                                  </div>
                                </td>
                                <td
                                  data-title="Total"
                                  className="product-subtotal"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    627.99
                                  </span>
                                  <a
                                    title="Remove this item"
                                    className="remove"
                                    href="#"
                                  >
                                    ×
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="product-remove">
                                  <a className="remove" href="#">
                                    ×
                                  </a>
                                </td>
                                <td className="product-thumbnail">
                                  <a href="single-product-fullwidth.html">
                                    <img
                                      width="180"
                                      height="180"
                                      alt=""
                                      className="wp-post-image"
                                      src="single-product-fullwidth.html"
                                    />
                                  </a>
                                </td>
                                <td
                                  data-title="Product"
                                  className="product-name"
                                >
                                  <div className="media cart-item-product-detail">
                                    <a href="single-product-fullwidth.html">
                                      <img
                                        width="180"
                                        height="180"
                                        alt=""
                                        className="wp-post-image"
                                        src="assets/images/products/cart-3.jpg"
                                      />
                                    </a>
                                    <div className="media-body align-self-center">
                                      <a href="single-product-fullwidth.html">
                                        Bluetooth on-ear PureBass Headphones
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  data-title="Price"
                                  className="product-price"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    627.99
                                  </span>
                                </td>
                                <td
                                  className="product-quantity"
                                  data-title="Quantity"
                                >
                                  <div className="quantity">
                                    <label htmlFor="quantity-input-3">
                                      Quantity
                                    </label>
                                    <input
                                      id="quantity-input-3"
                                      type="number"
                                      name="cart[e2230b853516e7b05d79744fbd4c9c13][qty]"
                                      value="1"
                                      title="Qty"
                                      className="input-text qty text"
                                      size={4}
                                    />
                                  </div>
                                </td>
                                <td
                                  data-title="Total"
                                  className="product-subtotal"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    627.99
                                  </span>
                                  <a
                                    title="Remove this item"
                                    className="remove"
                                    href="#"
                                  >
                                    ×
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="actions" colSpan={6}>
                                  <div className="coupon">
                                    <label htmlFor="coupon_code">Coupon:</label>
                                    <input
                                      type="text"
                                      placeholder="Coupon code"
                                      value=""
                                      id="coupon_code"
                                      className="input-text"
                                      name="coupon_code"
                                    />
                                    <input
                                      type="submit"
                                      value="Apply coupon"
                                      name="apply_coupon"
                                      className="button"
                                    />
                                  </div>
                                  <input
                                    type="submit"
                                    value="Update cart"
                                    name="update_cart"
                                    className="button"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* <!-- .shop_table shop_table_responsive --> */}
                        </form>
                        {/* <!-- .woocommerce-cart-form --> */}
                        <div className="cart-collaterals">
                          <div className="cart_totals">
                            <h2>Cart totals</h2>
                            <table className="shop_table shop_table_responsive">
                              <tbody>
                                <tr className="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount">
                                      <span className="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      963.94
                                    </span>
                                  </td>
                                </tr>
                                <tr className="shipping">
                                  <th>Shipping</th>
                                  <td data-title="Shipping">Flat rate</td>
                                </tr>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td data-title="Total">
                                    <strong>
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">
                                          £
                                        </span>
                                        963.94
                                      </span>
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {/* <!-- .shop_table shop_table_responsive --> */}
                            <div className="wc-proceed-to-checkout">
                              <form
                                className="woocommerce-shipping-calculator"
                                method="post"
                                action="#"
                              >
                                <p>
                                  <a
                                    className="shipping-calculator-button"
                                    data-toggle="collapse"
                                    href="#shipping-form"
                                    aria-expanded="false"
                                    aria-controls="shipping-form"
                                  >
                                    Calculate shipping
                                  </a>
                                </p>
                                <div className="collapse" id="shipping-form">
                                  <div className="shipping-calculator-form">
                                    <p
                                      id="calc_shipping_country_field"
                                      className="form-row form-row-wide"
                                    >
                                      <select
                                        className="country_to_state"
                                        id="calc_shipping_country"
                                        name="calc_shipping_country"
                                      >
                                        <option value="">
                                          Select a country…
                                        </option>
                                        <option value="AX">
                                          Åland Islands
                                        </option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">
                                          American Samoa
                                        </option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">
                                          Antigua and Barbuda
                                        </option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                      </select>
                                    </p>
                                    <p
                                      id="calc_shipping_state_field"
                                      className="form-row form-row-wide validate-required"
                                    >
                                      <span>
                                        <select
                                          id="calc_shipping_state"
                                          name="calc_shipping_state"
                                        >
                                          <option value="">
                                            Select an option…
                                          </option>
                                          <option value="AP">
                                            Andhra Pradesh
                                          </option>
                                          <option value="AR">
                                            Arunachal Pradesh
                                          </option>
                                          <option value="AS">Assam</option>
                                          <option value="BR">Bihar</option>
                                          <option value="CT">
                                            Chhattisgarh
                                          </option>
                                          <option value="GA">Goa</option>
                                          <option value="GJ">Gujarat</option>
                                          <option value="HR">Haryana</option>
                                          <option value="HP">
                                            Himachal Pradesh
                                          </option>
                                          <option value="JK">
                                            Jammu and Kashmir
                                          </option>
                                          <option value="JH">Jharkhand</option>
                                          <option value="KA">Karnataka</option>
                                          <option value="KL">Kerala</option>
                                          <option value="MP">
                                            Madhya Pradesh
                                          </option>
                                          <option value="MH">
                                            Maharashtra
                                          </option>
                                          <option value="MN">Manipur</option>
                                          <option value="ML">Meghalaya</option>
                                          <option value="MZ">Mizoram</option>
                                          <option value="NL">Nagaland</option>
                                          <option value="OR">Orissa</option>
                                          <option value="PB">Punjab</option>
                                          <option value="RJ">Rajasthan</option>
                                          <option value="SK">Sikkim</option>
                                          <option value="TN">Tamil Nadu</option>
                                          <option value="TS">Telangana</option>
                                          <option value="TR">Tripura</option>
                                          <option value="UK">
                                            Uttarakhand
                                          </option>
                                          <option value="UP">
                                            Uttar Pradesh
                                          </option>
                                          <option value="WB">
                                            West Bengal
                                          </option>
                                          <option value="AN">
                                            Andaman and Nicobar Islands
                                          </option>
                                          <option value="CH">Chandigarh</option>
                                          <option value="DN">
                                            Dadra and Nagar Haveli
                                          </option>
                                          <option value="DD">
                                            Daman and Diu
                                          </option>
                                          <option value="DL">Delhi</option>
                                          <option value="LD">Lakshadeep</option>
                                          <option value="PY">
                                            Pondicherry (Puducherry)
                                          </option>
                                        </select>
                                      </span>
                                    </p>
                                    <p
                                      id="calc_shipping_postcode_field"
                                      className="form-row form-row-wide validate-required"
                                    >
                                      <input
                                        type="text"
                                        id="calc_shipping_postcode"
                                        name="calc_shipping_postcode"
                                        placeholder="Postcode / ZIP"
                                        value=""
                                        className="input-text"
                                      />
                                    </p>
                                    <p>
                                      <button
                                        className="button"
                                        value="1"
                                        name="calc_shipping"
                                        type="submit"
                                      >
                                        Update totals
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </form>
                              {/* <!-- .wc-proceed-to-checkout --> */}
                              <a
                                className="checkout-button button alt wc-forward"
                                href="checkout.html"
                              >
                                Proceed to checkout
                              </a>
                              <a className="back-to-shopping" href="shop.html">
                                Back to Shopping
                              </a>
                            </div>
                            {/* <!-- .wc-proceed-to-checkout --> */}
                          </div>
                          {/* <!-- .cart_totals --> */}
                        </div>
                        {/* <!-- .cart-collaterals --> */}
                      </div>
                      {/* <!-- .cart-wrapper --> */}
                    </div>
                    {/* <!-- .woocommerce --> */}
                  </div>
                  {/* <!-- .entry-content --> */}
                </div>
                {/* <!-- .hentry --> */}
              </main>
              {/* <!-- #main --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
