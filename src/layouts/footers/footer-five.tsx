import React from "react";
import { UpArrow } from "@/components/svg";

export default function FooterFive() {
  return (
    <footer>
      {/* copyright area start */}
      <div className="tp-copyright-5-area tp-copyright-5-style-2 black-bg pt-20 pb-20">
        <div className="container container-1560">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-5 d-none d-xl-block">
              <div className="tp-copyright-5-left-info">
                <span>
                  Phone:
                  <a href="tel:+14074317334"> (407) 431-7334</a>
                </span>
                <span>
                  Email:
                  <a href="mailto:cdiazalvarino@gmail.com"> cdiazalvarino@gmail.com</a>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="tp-copyright-2-social text-start text-sm-center text-xl-center">
                <a className="mb-10" href="https://www.linkedin.com/in/claudia-diaz-alvarino/" target="_blank">
                  Linkedin
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-5">
              <div className="tp-copyright-2-left text-center text-md-end">
                <p>©{new Date().getFullYear()}- All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
