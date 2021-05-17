import React from "react";

const Bigbanner = () => {
  return (
    <div className="banner large-banner large-banner-v1 text-in-left">
      <a href="shop.html">
        <div
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage:
              "url( https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg)",
            height: "259px",
          }}
          className="banner-bg"
        >
          <div className="caption">
            <div className="banner-info">
              <h3 className="title">
                <span>
                  <span className="offer-amount">
                    70
                    <span className="offer-symbol">
                      %<span className="offer-text">off</span>
                    </span>
                  </span>
                  Live with Style
                  <br /> in kitchen{" "}
                </span>
              </h3>
              <ul className="subtitle">
                <li>CERAMICS</li>
                <li>CUTLERY</li>
                <li>ACCESORIES</li>
                <li>CHAIRS</li>
              </ul>
            </div>
            <span className="banner-action button">Browse</span>
          </div>
          {/* <!-- .caption--> */}
        </div>
      </a>
    </div>
  );
};

export default Bigbanner;
