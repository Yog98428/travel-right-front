import React from "react";
import {Link} from "react-router-dom";

interface type {
  title: string;
}

const homeScreenCategoryComponent = ({title}: type) => {
  return (
    <div className="">
      <Link to="product-category">
        <img
          width="300"
          height="300"
          alt={title}
          src="assets/images/category/16.png"
        />
        <h2 className="">{title} </h2>
      </Link>
    </div>
  );
};

export default homeScreenCategoryComponent;
