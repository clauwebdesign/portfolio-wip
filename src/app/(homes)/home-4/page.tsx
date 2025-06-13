import React from 'react';
import { Metadata } from 'next';
import HomeFourMain from '@/pages/homes/home-4';

export const metadata: Metadata = {
  title: "Claudia - Portfolio",
};

const HomePageFour = () => {
  return (
    <HomeFourMain/>
  );
};

export default HomePageFour;