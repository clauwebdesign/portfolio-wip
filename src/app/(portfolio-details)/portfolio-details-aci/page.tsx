import React from "react";
import { Metadata } from "next";
import PortfolioDetailsAciMain from "@/pages/portfolio/details/portfolio-details-aci";


export const metadata: Metadata = {
  title: "Details | ACI",
};

const PortfolioDetailsAciPage = () => {
  return (
    <PortfolioDetailsAciMain/>
  );
};

export default PortfolioDetailsAciPage;
