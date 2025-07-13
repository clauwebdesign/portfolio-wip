import React from 'react';
import { Metadata } from 'next';
import HomeThreeMain from '@/pages/homes/home-portfolio';

export const metadata: Metadata = {
  title: "Liko - Home Three Page",
};

const HomePageThree = () => {
  return (
    <HomeThreeMain/>
  );
};

export default HomePageThree;