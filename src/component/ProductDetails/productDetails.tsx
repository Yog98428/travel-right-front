import React from "react";

const ProductDetails = ({search}: any) => {
  console.log(search);
  const id = search.split("=")[1];
  console.log(id);
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
              <a href="product-category.html">TV & Video</a>
              <span className="delimiter">
                <i className="tm tm-breadcrumbs-arrow-right"></i>
              </span>
              60UH6150 60-Inch 4K Ultra HD Smart LED TV
            </nav>
            <section className="mb-5 ml-5 mr-5">
              <div className="row d-flex">
                <div className="col-6">
                  <figure className="view overlay rounded z-depth-1 main-img">
                    <img
                      src="assets/images/products/big-card.jpg"
                      alt=""
                      style={{width: "500px", height: "500px"}}
                    />
                  </figure>
                </div>
                <div className="col-6">
                  <div className="summary entry-summary">
                    <div className="single-product-header">
                      <h1 className="product_title">
                        60UH6150 60-Inch 4K Ultra HD Smart LED TV
                      </h1>
                      <a className="add-to-wishlist" href="wishlist.html"></a>
                    </div>
                    {/* <!-- .single-product-header --> */}
                    <div className="single-product-meta d-flex justify-content-between">
                      <div className="brand">
                        <a href="#">
                          <img alt="galaxy" src="assets/images/brands/5.png" />
                        </a>
                      </div>
                      <div className="cat-and-sku">
                        <span className="posted_in categories">
                          <a rel="tag" href="product-category.html">
                            TV &amp; Video
                          </a>
                        </span>
                        '
                        <br />
                        <span className="sku_wrapper">
                          SKU:
                          <span className="sku">5487FB8/11</span>
                        </span>
                      </div>
                      <div className="product-label">
                        <div className="ribbon label green-label">
                          <span>A+</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- .single-product-meta --> */}
                    <div className="rating-and-sharing-wrapper mt-3 mb-2">
                      <div className="woocommerce-product-rating">
                        <div className="star-rating">
                          <span style={{width: "100%"}}>
                            Rated
                            <strong className="rating">5.00</strong> out of 5
                            based on
                            <span className="rating">1</span> customer rating
                          </span>
                        </div>
                        <a
                          rel="nofollow"
                          className="woocommerce-review-link ml-5 mb-3"
                          href="#reviews"
                        >
                          (<span className="count">1</span> customer review)
                        </a>
                      </div>
                    </div>
                    {/* <!-- .rating-and-sharing-wrapper --> */}
                    <div className="woocommerce-product-details__short-description">
                      <ul>
                        <li>Multimedia Speakers</li>
                        <li>120 watts peak</li>
                        <li>Front-facing subwoofer</li>
                        <li>Refresh Rate: 120Hz (Effective)</li>
                        <li>Backlight: LED</li>
                        <li>Smart Functionality: Yes, webOS 3.0</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- .woocommerce-product-details__short-description --> */}
                  <div className="product-actions-wrapper">
                    <div className="product-actions">
                      <p className="price ml-5">
                        <del className="mr-5">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            1,239.99
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            997.00
                          </span>
                        </ins>
                      </p>
                      {/* <!-- .single-product-header --> */}
                      <div className="d-flex text-center">
                        <form
                          encType="multipart/form-data"
                          method="post"
                          className="cart d-flex  mr-5"
                        >
                          <div className="quantity mb-2 mr-5">
                            <label htmlFor="quantity-input" className="mr-3">
                              Quantity
                            </label>
                            <input
                              type="number"
                              className="input-text qty text"
                              title="Qty"
                              value="1"
                              name="quantity"
                              id="quantity-input"
                            />
                          </div>
                          {/* <!-- .quantity --> */}
                          <button
                            className="single_add_to_cart_button button alt"
                            value="185"
                            name="add-to-cart"
                            type="submit"
                          >
                            Add to cart
                          </button>
                        </form>
                        {/* <!-- .cart --> */}
                        <a className="add-to-compare-link" href="compare.html">
                          Add to compare
                        </a>
                      </div>
                    </div>
                    {/* <!-- .product-actions --> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
