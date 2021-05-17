import React from "react";
import ProductDetails from "../../component/ProductDetails/productDetails";
import NavBar from "../../component/layout/navigation/navbar";
import TopBar from "../../component/layout/navigation/topNav";

const ProductDetail = ({location: {search}}: any) => {
  return (
    <div id="page" className="hfeed site ">
      <TopBar />
      <NavBar />
      <div id="content" className="site-content">
        <ProductDetails search={search} />
      </div>
    </div>
  );
};

export default ProductDetail;
