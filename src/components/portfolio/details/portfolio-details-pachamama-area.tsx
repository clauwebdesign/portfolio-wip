
import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';


import HeroBannerThree from "@/components/hero-banner/hero-banner-three-aci";
import ServicePachamama from "@/components/service/service-pachamama";
import ProjectSixHomepage from "@/components/project/project-six-homepage";



// images
import full_image from '@/assets/img/portfolio/pachamama/Pachamama-home.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import full_image_3 from '@/assets/img/portfolio/aci/home.jpg';
import wireframes1 from '@/assets/img/portfolio/pachamama/wireframes1.jpg';
import wireframes2 from '@/assets/img/portfolio/pachamama/wireframes2.jpg';
import full_image_6 from '@/assets/img/portfolio/pachamama/solution.jpg';
import site_map from '@/assets/img/portfolio/pachamama/arquitectura.jpg';
import full_image_users from '@/assets/img/portfolio/pachamama/user_persona.jpg';
import prototype1 from '@/assets/img/portfolio/pachamama/app1.jpg';
import prototype2 from '@/assets/img/portfolio/pachamama/app2.jpg';

import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

// slider images
const slider_images = [port_img_3,port_img_4,port_img_5,port_img_4];

// slider setting
const slider_setting:SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function PortfolioDetailsPachamamaArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
      {/* details are */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-title-box">
                      <h4 className="sv-hero-title mb-50 tp-char-animation">Pachamama</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                  <div className="tp-project-details-3-scroll smooth">
                      <a onClick={scrollTo} className="pointer">
                        <span>
                            <ScrollDownTwo/>
                        </span>
                        Scroll to Explore
                      </a>
                  </div>
                </div>
              
            </div>
          </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
          <Image data-speed="" src={full_image} alt="port-img" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area">
          <div className="container">
            <div className="row align-items-start">
                     <div className="col-xl-6">
                       <div className="project-details-1-title-box pb-50">
                            <span className="project-details-1-subtitle"><i>01</i>Introduction</span>
                                <h4 className="project-details-1-title">Project Overview</h4>
                                <p>Pachamama is a mobile app designed to connect local residents with local organic food producers in Uruguay. It makes it simple to find and buy fresh, healthy food directly from small farmers, without going through intermediaries.</p>
                                <p>This project was developed as part of a UX/UI Design course, with the goal of designing an easy-to-use and engaging app using design tools and a user-focused approach.</p>
                        </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="project-details-1-info-wrap">
                              <div className="project-details-1-info">
                                  <span>Client</span>
                                      <h4>UX/UI Design Course (Course Project)</h4>
                              </div>
                            <div className="project-details-1-info">
                                  <span>Dates</span>
                                        <h4>Dec 2020 - Jan 2021</h4>
                            </div>
                            <div className="project-details-1-info">
                                  <span>Role</span>
                                      <h4>UI / UX Designer</h4>
                                      <h4 className="pt-10">(UX research, interaction design, visual design, prototyping & testing)</h4>
                            </div>                   
                          </div>
                      </div>
            </div>                   
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      {/* <h4 className="blog-details-left-title tp-char-animation tp-menu-text">Project Overview</h4> */}
                  </div>
                </div>
            </div>
              
          </div>
      </div>
      {/* details area */}

      {/* Background area */}
    {/* <div className="showcase-details-2-area pb-50">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">Background</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      An introduction
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">In Uruguay, more people are choosing organic food for its health benefits. As demand grows, organic products are easier to find in markets, small shops, and fairs. However, many of these products still go through middlemen or are imported, which raises prices. At the same time, local producers often don’t have a direct way to reach customers or promote what they grow, so they end up selling to wholesalers at lower prices, and many people never discover their products.</p>
                </div>
              </div>
          </div>
        </div>
    </div> */}
    {/* Background area */}

    {/* Problem area */}
    <div className="showcase-details-2-area pb-50">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">The Problem</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Understanding the Problem
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">In Uruguay, more people are choosing organic food for its health benefits. As demand grows, organic products are easier to find in markets, small shops, and fairs. However, many of these products still go through middlemen or are imported, which raises prices. At the same time, local producers often don’t have a direct way to reach customers or promote what they grow, so they end up selling to wholesalers at lower prices, and many people never discover their products.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* Problem area */}

    {/* Solution area */}
    <div className="showcase-details-2-area">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">Solution</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Solving the Problem
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">Build a platform where people can find and buy organic food—grown or made by independent producers in Uruguay—without needing to go through intermediaries. This way, producers can reach more people without paying for advertising, and customers get direct access to local, healthy food.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* Solution area */}

     {/* images thumb */}
     <div className="tp-project-details-3-thumb">
        <div className="container">
          <div className="row">
              <div className="col-xl-12">
                <div className="tp-project-details-3-thumb-box">
                    <Image className="w-100" src={full_image_6} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* images thumb */}
    
     {/* MVP area */}
     <div className="pd-visual-content-area pb-70">
          <div className="container">
              <div className="row tp-brand-brd-top pt-50">
              {/* <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      test
                    </span>
                </div> */}
                <div className="col-xl-8">
                    <div className="pd-visual-content-left">
                      <div className="">
                          {/* <span className="pd-visual-subtitle tp_fade_bottom">01</span> */}
                          {/* <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">The MVP</h4> */}
                          <h4 className="project-details-1-title tp-char-animation">Defining the MVP</h4>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                    {/* <div className="pd-visual-left-text">
                      <span className="tp-char-animation">Visually match Elena personal style</span>
                    </div> */}
                     {/* <div className="showcase-details-2-section-left">
                          <span className="ab-inner-subtitle mb-25">
                           <Leaf/>
                          Defining the key features
                          </span>
                      </div> */}
                </div>
                <div className="col-xl-12">
                    <div className="pd-visual-right-content">
                      <p className="tp_title_anim">Key MVP features:</p>
                      <div className="pd-visual-right-list">
                          <ul className="tp_fade_bottom">
                            <li>USER REGISTRATION</li>
                            <li>PRODUCT SEARCH</li>
                            <li>POST</li>
                            <li>PURCHASE</li>
                            <li>CONNECT</li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
           
          </div>
        </div>
      {/* MVP area */}

      {/* Solution area */}
    <div className="showcase-details-2-area">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">User Personas</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Solving the Problem
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">Based on the research, two main user types were identified: people (consumers) who want to buy local organic food and producers (local organic farmers) who want to sell their products directly. While both are important, the main focus was on the consumer persona, due to time limitations and course orientation. This is why the core tasks for consumers, like browsing, searching, and purchasing products, were included as part of the MVP to ensure the app was useful from the very first version.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* Solution area */}

     {/* images thumb */}
     <div className="tp-project-details-3-thumb">
        <div className="container">
          <div className="row">
              <div className="col-xl-12">
                <div className="tp-project-details-3-thumb-box">
                    <Image className="w-100" src={full_image_users} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* images thumb */}
    
        {/* Site Map area */}
    <div className="showcase-details-2-area">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">Site Map</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Information Architecture
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">The app was designed to be simple and easy to use for both shoppers and producers. Each part was based on what users need, like searching, posting, chatting, or buying. Because of the short timeline, I focused on the most important features and avoided adding extras I couldn’t fully develop.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* HOMEPAGE area */}
     {/* images thumb */}
     <div className="tp-project-details-3-thumb">
        <div className="container">
          <div className="row">
              <div className="col-xl-12">
                <div className="tp-project-details-3-thumb-box">
                    <Image className="w-100" src={site_map} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* images thumb */}
    
         {/* Wireframes area */}
    <div className="showcase-details-2-area">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">Wireframing</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Mocking up basic wireframes
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">I created low-fidelity wireframes to gather feedback from Product, Engineering and stakeholders on the overall layout, helping to identify improvements early in the process. This involved establishing a standardised visual hierarchy and layout for the future website, before moving into visual design.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* Wireframes area */}

       {/* images thumb */}
       <div className="tp-project-details-3-thumb mb-90">
        <div className="container">
          <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                    <Image className="w-100" src={wireframes1} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                  <Image className="w-100" src={wireframes2} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* images thumb */}

    {/* High Fidelity Prototype area */}
    <div className="showcase-details-2-area">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">High Fidelity Prototype</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Developing the Designs
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">The high-fidelity prototype of Pachamama shows how the final app will look and work. It includes key features like browsing products, talking to producers, and placing orders. The goal is to make it easy for people to buy healthy, local food directly from those who grow it.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* High Fidelity Prototype area */}

    {/* service area */}
    <ServicePachamama />
    {/* service area */}
    </>
  )
}
