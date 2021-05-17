import React from "react";

const Middlebanner = () => {
  return (
    <div className="container-custom">
      <div className="banner full-width-banner text-in-left banners-v2">
        <a href="shop.html">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage:
                "url( https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300)",
              height: "239px",
            }}
            className="banner-bg"
          >
            <div className="caption">
              <div className="banner-info">
                <h3 className="title">
                  <strong>Seamless entertainment</strong>
                  <br /> from start to end
                </h3>
                <h4 className="subtitle">Discover a world of content</h4>
              </div>
              {/* <!-- .banner-info --> */}
              <span className="banner-action button">
                Browse now
                <i className="feature-icon d-flex ml-4 tm tm-long-arrow-right"></i>
              </span>
            </div>
            {/* <!-- .caption --> */}
          </div>
          {/* <!-- .banner-bg --> */}
        </a>
      </div>
    </div>
  );
};

export default Middlebanner;
