import React from "react";
import Image from "next/image";
import { CloseTwo, Linkdin } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/portfolio/home/aci.jpg";
import gallery_2 from "@/assets/img/portfolio/home/pachamama.jpg";
import gallery_3 from "@/assets/img/portfolio/home/elmiron.jpg";
import gallery_4 from "@/assets/img/portfolio/home/bearing.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({openOffcanvas,setOpenOffcanvas}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p> */}
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus/>
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" width={80} height={80}/>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:+14074317334">+1 (407) 431 7334</a>
                </li>
                <li>
                  <a href="mailto:cdiazalvarino@gmail.com">cdiazalvarino@gmail.com</a>
                </li>
                <li>
                  <a href="#">Miami, FL</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Me</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/claudia-diaz-alvarino/" target="_blank"><Linkdin /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
