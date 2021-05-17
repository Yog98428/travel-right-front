import React from "react";
import Bigbanner from "./bigbanner";
import Smallbanner from "./smallbanner";
import Rightbanner from "./rightbanner";

const Banners = () => {
  return (
    <div className="container-custom">
      <div className="banners banners-v2">
        <div className="row">
          <Smallbanner />
          <Bigbanner />
          <Rightbanner />
        </div>
      </div>
    </div>
  );
};

export default Banners;
