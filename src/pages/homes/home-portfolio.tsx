"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one-portfolio";
import GalleryOne from "@/components/gallery/gallery-one";

import ProjectFive from "@/components/project/project-five-portfoliohome";
import ContactOne from "@/components/contact/contact-one";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import FooterFive from "@/layouts/footers/footer-five";

const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

             {/* hero area start */}
             <HeroBannerOne />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            <div id="smooth-wrapper">
                    <div id="smooth-content">
                      <main>
                        {/* portfolio hero */}
                        <div
                          className="tm-hero-area tm-hero-ptb"
                          style={{ backgroundImage: "url(/assets/img/inner-project/hero/hero-bg.jpg)" }}
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="tm-hero-content">
                                  <span className="tm-hero-subtitle">Portfolio</span>
                                  <h4 className="tm-hero-title tp-char-animation">
                                   Relevant Projects
                                  </h4>
                                </div>
                                <div className="tm-hero-text">
                                  <p className="tp_title_anim">
                                    We’re a diverse team that works as fancies attention to
                                    details, enjoys beers on Friday nights and aspires to
                                    design the dent in the universe.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* portfolio hero */}
            
                        {/* portfolio area */}
                        <ProjectFive style_2={true} />
                        {/* portfolio area */}
                      </main>
                    </div>
                  </div>

           

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}

          </main>

          {/* footer area */}
          <FooterFive />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
    
  );
};

export default HomeFourMain;


