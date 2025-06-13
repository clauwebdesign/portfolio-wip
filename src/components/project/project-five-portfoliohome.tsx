import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// images
import p_img_1 from "@/assets/img/portfolio/home/aci.jpg";
import p_img_2 from "@/assets/img/portfolio/home/pachamama.jpg";
import p_img_3 from "@/assets/img/portfolio/home/elmiron.jpg";
import p_img_4 from "@/assets/img/portfolio/home/bearing.jpg";

const project_data = [
  {
    id: 1,
    title: "",
    category: "",
    img: p_img_1,
    // year: 2024,
  },
  {
    id: 2,
    title: "Petit Navire",
    category: "Branding",
    img: p_img_2,
    year: 2024,
  },
  {
    id: 3,
    title: "Big Dream",
    category: "Branding",
    img: p_img_3,
    year: 2024,
  },
  {
    id: 4,
    title: "The Stage",
    category: "Branding",
    img: p_img_4,
    year: 2024,
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-12">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >
                <Link className="cursor-hide" href="/portfolio-details-1">
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={item.img}
                        alt="project-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </span>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${
                    style_2 ? "style-2" : ""
                  } tp-hover-btn-item tp-hover-btn`}
                  href="/portfolio-details-1"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
