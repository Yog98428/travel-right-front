import React from "react";
import {Link} from "react-router-dom";

interface type {
  name: string;
  id: string;
}
const SaveProductComponent = ({name, id}: type) => {
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
      {/* <div className="container-custom">
        
        <div className="carousel-card" {...key}>
          <img src="assets/images/products/7.jpg" alt="dsklfj" />
          <div className="carousel-detail">
            <h2 className="carousel-price">450.09</h2>
            <h1 className="carousel-title">{name}</h1>
            <div className="hover-area">
              <a href="cart.html" rel="nofollow">
                <button className="add-carted">Add to cart</button>
              </a>
              <a className="compare-link" href="compare.html">
                + Add to compar
              </a>
            </div>
          </div>
        </div>
       
      </div> */}
      <div className="woocommerce ">
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
            <Link
              to={`/productDetail/?id=${id}`}
              className="woocommerce-LoopProduct-link"
            >
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

      {/* {/* <div className="carousel-container ">
        <Carousel
          className="caroucel-main"
          indicators={false}
          prevIcon={
            <span className="icon-container">
              <BsArrowLeft color="black" className="prevIcon" />
            </span>
          }
          nextIcon={
            <span className="icon-container">
              <BsArrowRight color="black" className="prevIcon" />
            </span>
          }
          interval={null}
        >
          <Carousel.Item>
            <Row> */}
      {/* {items.map((item, index) =>
                index < noofItem ? (
                  <Col className="carousel-card" key={item.id}>
                    <img src="assets/images/products/7.jpg" alt="dsklfj" />
                    <div className="carousel-detail">
                      <h2 className="carousel-price">450.09</h2>
                      <h1 className="carousel-title">{item.name}</h1>
                      <div className="hover-area">
                        <a href="cart.html" rel="nofollow">
                          <button className="add-carted">Add to cart</button>
                        </a>
                        <a className="compare-link" href="compare.html">
                          + Add to compar
                        </a>
                      </div>
                    </div>
                  </Col>
                ) : (
                  ""
                )
              )}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {items.map((item, index) =>
                index < noofItem ? (
                  <Col className="carousel-card" key={item.id}>
                    <img src="assets/images/products/7.jpg" alt="dsklfj" />
                    <div className="carousel-detail">
                      <h2 className="carousel-price">450.09</h2>
                      <h1 className="carousel-title">{item.name}</h1>
                      <div className="hover-area">
                        <a href="cart.html" rel="nofollow">
                          <button className="add-carted">Add to cart</button>
                        </a>
                        <a className="compare-link" href="compare.html">
                          + Add to compar
                        </a>
                      </div>
                    </div>
                  </Col>
                ) : (
                  ""
                )
              )}
            </Row>
          </Carousel.Item>
        </Carousel> */}
      {/* </div> */}
    </>
  );
};

export default SaveProductComponent;
