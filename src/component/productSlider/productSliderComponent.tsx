import React from "react";
import {Link} from "react-router-dom";

interface type {
  name: string;
}

const ProductSliderComponent = ({name}: type) => {
  // const items = [
  //   {
  //     id: 1,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 2,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 3,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 4,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 5,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 6,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 7,
  //     name: "hksdj",
  //   },
  //   {
  //     id: 8,
  //     name: "hksdjnkdfsjll",
  //   },
  // ];
  return (
    <>
      <div className="woocommerce columns-1">
        <div className="products">
          <div className="product">
            <div className="yith-wcwl-add-to-wishlist">
              <a
                href="wishlist.html"
                rel="nofollow"
                className="add_to_wishlist"
              >
                Add to Wishlist
              </a>
            </div>

            <Link to="/productDetail" className="woocommerce-LoopProduct-link">
              <img
                src="assets/images/products/5.jpg"
                width="224"
                height="197"
                className="wp-post-image"
                alt=""
              />
              <span className="price">
                <ins>
                  <span className="amount"> </span>
                </ins>
                <span className="amount"> 456.00</span>
              </span>
              {/* <!-- /.price --> */}
              <h2 className="woocommerce-loop-product__title">{name}</h2>
            </Link>
            <div className="hover-area">
              <a
                className="button add_to_cart_button"
                href="cart.html"
                rel="nofollow"
              >
                Add to cart
              </a>
              <a className="add-to-compare-link" href="compare.html">
                Add to compare
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSliderComponent;
