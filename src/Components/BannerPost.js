import React from "react";

const BannerPost = ({ title, img, active }) => {
  return (
    <div className={active ? "banner-post-active" : "banner-post"}>
      <buttton className="banner-button left">
        <img src="https://img.icons8.com/ios-glyphs/60/000000/chevron-left.png" />
      </buttton>
      <div className="banner-content">
        <img src={img} alt="" className="banner-post-img" />
        <h4 className="banner-post-title">{title}</h4>
      </div>

      <buttton className="banner-button right">
        <img src="https://img.icons8.com/ios-glyphs/60/000000/chevron-right.png" />
      </buttton>
    </div>
  );
};

export default BannerPost;
