import React from "react";
import { Metadata } from "next";
import PortfolioDetailsAciMain from "@/pages/portfolio/details/portfolio-details-aci";


export const metadata: Metadata = {
  title: "Liko - Portfolio Details 3 page",
};

const PortfolioDetailsAciPage = () => {
  return (
    <PortfolioDetailsAciMain/>
  );
};

export default PortfolioDetailsAciPage;
