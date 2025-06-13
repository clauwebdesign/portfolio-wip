import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// images
// import p_img_1 from "@/assets/img/home-05/project/project-4.jpg";
// import p_img_2 from "@/assets/img/home-05/project/project-5.jpg";
// import p_img_3 from "@/assets/img/home-05/project/project-6.jpg";
// import p_img_4 from "@/assets/img/home-05/project/project-7.jpg";
// import p_img_5 from "@/assets/img/portfolio/aci/home.jpg";
import p_img_1 from "@/assets/img/portfolio/aci/home.jpg";

const project_data = [
  {
    id: 1,
    title: "",
    category: "",
    img: p_img_1,
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectSixHomepage({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-5 ${
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
            <div key={item.id} className="col-xl-12 col-lg-6 col-md-12">
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
