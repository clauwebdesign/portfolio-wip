import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import hero_star from "@/assets/img/home-04/hero/hero-star.png";
import hero_star_2 from "@/assets/img/home-04/hero/hero-star-2.png";
import hero_img from "@/assets/img/portfolio/aci/solution.jpg";

// imgStyle
const imgStyle: CSSProperties = { height: "auto" };
export default function HeroBannerThree() {
  return (
    <div className="tp-hero-4-area tp-btn-trigger">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-4-content-wrap pt-0">
              <div className="tp-hero-4-thumb text-end">
                <Image
                  data-speed=""
                  src={hero_img}
                  alt="hero-img"
                  style={imgStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
