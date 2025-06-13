import React from "react";
import { Metadata } from "next";
import PortfolioDetailsPachamamaMain from "@/pages/portfolio/details/portfolio-details-pachamama";


export const metadata: Metadata = {
  title: "Details | Pachamama",
};

const PortfolioDetailsPachamamaPage = () => {
  return (
    <PortfolioDetailsPachamamaMain/>
  );
};

export default PortfolioDetailsPachamamaPage;
