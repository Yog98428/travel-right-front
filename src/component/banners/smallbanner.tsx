import React from "react";

const Smallbanner = () => {
  return (
    <div className="banner small-banner text-in-left">
      <a href="shop.html">
        <div
          className="banner-bg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage:
              "url( https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg )",
            height: "259px",
          }}
        >
          <div className="caption">
            <div className="banner-info">
              <h3 className="title">
                Get rid of
                <br />
                <strong> Mosquitoes</strong>
                <br />
                in best way
              </h3>
            </div>
            <span className="banner-action button">Shop Now</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Smallbanner;
