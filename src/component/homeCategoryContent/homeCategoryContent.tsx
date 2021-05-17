import React from "react";
import {Link} from "react-router-dom";

const homeCategoryContent = () => {
  return (
    <li className="category">
      <div className="media">
        <Link to="product-category.html">
          <img
            width="300"
            height="300"
            alt="Mens"
            src="https://swnepal.com.np/wp-content/uploads/2017/10/documentation-banner.jpg"
          />
        </Link>
        <div className="media-body">
          <div className="head-and-list">
            <h4 className="media-heading">
              <Link to="product-category.html">Mens</Link>
            </h4>
            <ul className="sub-categories list-unstyled">
              <li className="cat-item cat-item-20">
                <Link to="product-category.html">Footwear</Link>
              </li>
              <li className="cat-item cat-item-19">
                <Link to="product-category.html">
                  Inner &amp; Protection Wears
                </Link>
              </li>
              <li className="cat-item cat-item-18">
                <Link to="product-category.html">Outerwears</Link>
              </li>
              <li className="cat-item cat-item-16">
                <Link to="product-category.html">Shorts &amp; 3/4th</Link>
              </li>
              <li className="cat-item cat-item-17">
                <Link to="product-category.html">Trackwears</Link>
              </li>
            </ul>
            {/* .sub-categories**/}
          </div>
          {/* .head-and-list**/}
          <Link to="product-category.html" className="view-all">
            View All
          </Link>
        </div>
        {/* .media-body**/}
      </div>
      {/* .media**/}
    </li>
  );
};

export default homeCategoryContent;
