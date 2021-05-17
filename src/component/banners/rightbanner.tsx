import React from "react";

const Rightbanner = () => {
  return (
    <div className="banner small-banner text-in-left">
      <a href="shop.html">
        <div
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage:
              "url( https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png )",
            height: "259px",
          }}
          className="banner-bg"
        >
          <div className="caption">
            <div className="banner-info">
              <h3 className="title">
                <strong> Led Lamp</strong>
                <br /> Smart 4 light profiles
              </h3>
            </div>
            <span className="price">$34.99</span>
            <span className="banner-action button">Buy Now</span>
          </div>
          {/* <!-- .caption--> */}
        </div>
      </a>
    </div>
  );
};

export default Rightbanner;
