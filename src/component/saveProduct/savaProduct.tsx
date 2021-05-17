import React from "react";
import {useSelector} from "react-redux";
import {ProductProcess} from "../../model/enums";
import {RootStore} from "../../store";
import SaveProductComponent from "./saveProductComponent";
import Product from "../../model/product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SavaProduct = () => {
  const {products, loading, error, productProcess} = useSelector(
    (state: RootStore) => state.product
  );
  const responsive = {
    desktop: {
      breakpoint: {max: 2000, min: 1280},
      items: 7,
    },
    tablet: {
      breakpoint: {max: 1024, min: 500},
      items: 4,
    },
    min: {
      breakpoint: {max: 500, min: 200},
      items: 2,
    },
  };
  return (
    <>
      {/* <section className="section-products-carousel-tabs ">
        <div
          className="section-products-carousel-tabs-wrap"
          // style={{height: "500px"}}
        >
          <header className="section-header">
            <h2 className="section-title">Save on Clothing for Her</h2>
            <ul role="tablist" className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#tab-59f89f0a815100"
                  data-toggle="tab"
                >
                  Bestsellers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#tab-59f89f0a815101"
                  data-toggle="tab"
                >
                  Dresses
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#tab-59f89f0a815102"
                  data-toggle="tab"
                >
                  Tops
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#tab-59f89f0a815103"
                  data-toggle="tab"
                >
                  Sweaters
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#tab-59f89f0a815104"
                  data-toggle="tab"
                >
                  Activewear
                </a>
              </li>
            </ul>
          </header>
        </div>
      </section> */}
      <div className="container-custom">
        <h1 className="">Save on Clothing for Her</h1>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel-custom"
        >
          {loading && productProcess === ProductProcess.LATEST_PRODUCT ? (
            <div>loading</div>
          ) : error && productProcess === ProductProcess.LATEST_PRODUCT ? (
            <div>{error}</div>
          ) : (
            products.map((e: Product) => (
              <SaveProductComponent name={e.name} id={e._id} />
            ))
          )}
        </Carousel>
      </div>
    </>
  );
};

export default SavaProduct;
