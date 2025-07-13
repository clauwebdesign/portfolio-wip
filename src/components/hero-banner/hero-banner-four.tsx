'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <span className="tp-hero-3-category tp_reveal_anim">
               Hey, I&apos;m Claudia.
              </span>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{"UX"} UI Designer based in US</span>
                <span className="tp-reveal-line"></span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                {/* ux/ui design / motion design / branding / development */}
              </span>
              <Link className="tp-btn-black-2" href="/contact">
                Check my Work{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
