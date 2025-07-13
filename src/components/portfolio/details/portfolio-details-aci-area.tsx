
import React from 'react';
import { scroller } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';


import HeroBannerThree from "@/components/hero-banner/hero-banner-three-aci";
import ServiceACI from "@/components/service/service-aci";
import ProjectSixHomepage from "@/components/project/project-six-homepage";



// images
import full_image from '@/assets/img/portfolio/aci/heroaci.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import full_image_3 from '@/assets/img/portfolio/aci/home.jpg';
import full_image_4 from '@/assets/img/portfolio/aci/wireframes.jpg';
import full_image_5 from '@/assets/img/portfolio/aci/wireframes2.jpg';
import full_image_6 from '@/assets/img/portfolio/aci/solution3.jpg';
import full_image_7 from '@/assets/img/portfolio/aci/arquitectura.jpg';

import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

// slider images
const slider_images = [port_img_3, port_img_4, port_img_5, port_img_4];

// slider setting
const slider_setting: SwiperOptions = {
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

export default function PortfolioDetailsAciArea() {
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
                <h4 className="sv-hero-title mb-50 tp-char-animation">AWAQ Campus Internship</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span>
                    <ScrollDownTwo />
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
        <Image data-speed="" src={full_image} alt="port-img" style={{ height: 'auto' }} />
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
                <p>Awaq ONGD is developing the Awaq Campus Internship website to offer biomonitoring internships and tourism experiences across Latin America. By October 2023, UX research and a brand manual were in place.</p>
                <p>The goal of this project was to design and deliver an intuitive and fully functional MVP for Awaq Campus Internship, enabling students to reserve and manage internship experiences in biological stations across Latin America through an engaging online platform.</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="project-details-1-info-wrap">
                <div className="project-details-1-info">
                  <span>Client</span>
                  <h4>AWAQ ONGD</h4>
                </div>
                <div className="project-details-1-info">
                  <span>Dates</span>
                  <h4>2023-2025</h4>
                </div>
                <div className="project-details-1-info">
                  <span>Role</span>
                  <h4>UI / UX Designer</h4>
                  <h4 className="pt-10">(Interaction, Visual design, Prototyping & Testing)</h4>
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

          {/* <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                     
                        <h4 className="blog-details-left-titletp-char-animation tp-menu-text">Project Overview</h4>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right">
                      <p className="pb-25 ">Awaq ONGD began working on the creation of Awaq Campus Internship website, a platform offering hands-on internship and tourism experiences focused on biomonitoring in biological stations across Latin America. </p>
                      <p>The general goal was to design the Minimum Viable Product (MVP) from scratch, using research insights, the information and main features requested by the client and following the brand guidelines to create a user-friendly, engaging, and consistent platform.</p>
                  </div>
                </div>
            </div> */}

          {/* <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                  <h4 className="blog-details-left-title tp-char-animation tp-menu-text">Background</h4>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right">
                      <p className="pb-25 ">I joined the Awaq Campus Internship project as the main designer during the MVP phase, when the initial UX research had already been completed and a brand manual was in place. I was responsible for the entire UI design and prototyping process, ensuring that the experience was user-friendly, engaging, and aligned with the brand identity. I worked alongside developers and stakeholders to bring the platform to life.
                        </p> 
                      <p>I grew significantly throughout this project, both in my design skills and in collaborating within a cross-functional team. Some of the key achievements during this time include:</p>
                  </div>  
                </div>
            </div>     */}
        </div>
      </div>
      {/* details area */}

      {/* Background area */}
      <div className="showcase-details-2-area pb-50">
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
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">I joined the Awaq Campus Internship project as the main designer during the MVP phase, when the initial UX research had already been completed and a brand manual was in place. I was responsible for the entire UI design and prototyping process, ensuring that the experience was user-friendly, engaging, and aligned with the brand identity. I worked alongside developers, project managers, product owner and stakeholders to bring the platform to life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <Leaf />
                  Understanding the Problem
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">University students in Latin America do not have an easy-to-use online platform where they can find, book, and manage internship and tourism experiences focused on environmental programs. Also, AWAQ — the ONG behind the project — has limited resources. The income from this platform would help support their work, improve the biological stations, and continue offering these learning opportunities to more students in the future, while also supporting Awaq’s mission to protect biodiversity and promote environmental education throughout the region.</p>
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
                  <Leaf />
                  Solving the Problem
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">Based on the identified problems, the proposed solution is a comprehensive web platform that enables users to register, explore available opportunities, make reservations, complete secure payments, and manage their bookings through an intuitive, interactive dashboard. The platform will also feature dedicated tools for administrators, allowing them to efficiently manage users and reservations, export data, and access detailed analytics to support operational decision-making.</p>
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
                <Image className="w-100" src={full_image_6} alt="port-img" style={{ height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* images thumb */}


      {/* hero area start */}
      {/* <HeroBannerThree /> */}
      {/* hero area end */}


      {/* Problem area */}
      {/* <div className="showcase-details-2-area pb-50">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="project-details-1-title tp-char-animation">The MVP</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-12">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Defining the MVP
                    </span>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">As part of the Awaq Campus Internship project, I collaborated closely with product owner, developers and stakeholders to define the MVP. Key features:</p>
                    <p className="pb-25">User Registration. Users could easily create an account.</p>
                      
                </div>
                
              </div>
          </div>
        </div>
    </div> */}
      {/* Problem area */}


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
                <p className="tp_title_anim">As part of the Awaq Campus Internship project, I collaborated closely with product owner, developers and stakeholders to define the MVP. Key features included:</p>
                <div className="pd-visual-right-list">
                  <ul className="tp_fade_bottom">
                    <li>USER REGISTRATION</li>
                    <li>INTERACTIVE RESERVATIONS</li>
                    <li>PAYMENT INTEGRATION</li>
                    <li>USER DASHBOARD</li>
                    <li>CALL SCHEDULING</li>
                    <li>ADMIN DASHBOARD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* MVP area */}

      {/* HOMEPAGE area */}
      <div className="showcase-details-2-area">
        <div className="container">
          <div className="row tp-brand-brd-top pt-50">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="project-details-1-title tp-char-animation">Information Architecture</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Designed to Make an Impact
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">The AWAQ Campus Internship homepage was a central part of the design process, developed through a collaborative and iterative approach. As the project progressed, the client refined their vision and introduced new priorities. It was designed to clearly share the program’s mission, attract users..</p>
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
                <Image className="w-100" src={full_image_7} alt="port-img" style={{ height: 'auto' }} />
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
                  <Leaf />
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
                <Image className="w-100" src={full_image_4} alt="port-img" style={{ height: 'auto' }} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-thumb-box mb-30">
                <Image className="w-100" src={full_image_5} alt="port-img" style={{ height: 'auto' }} />
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
                  <Leaf />
                  Developing the Designs
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">I created high fidelity mockups in Figma, collaborating closely with the Development and Product team to define and clarify any interactions that were not fully detailed in the high-fidelity mockups. I also performed reviews for each front-end implementation, making sure the final output matched the intended design and met usability standards before release.</p>
                <p className="pb-25">The website was built with scalability in mind. Every element was designed to be dynamically managed through the database, which required close coordination with the development and product teams to define the necessary components. Since the content would later be populated dynamically from the backend, due to the client’s request, many text elements were implemented as placeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* High Fidelity Prototype area */}



      {/* service area */}
      <ServiceACI />
      {/* service area */}


      {/* HOMEPAGE area */}
      <div className="showcase-details-2-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="project-details-1-title tp-char-animation">The Homepage</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Designed to Make an Impact
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">The AWAQ Campus Internship homepage was a central part of the design process, developed through a collaborative and iterative approach. As the project progressed, the client refined their vision and introduced new priorities. It was designed to clearly share the program’s mission, attract users, and encourage internship reservations. It followed ACI’s branding while using a fresh, modern look. Illustrations from Storyset (Freepik), recommended in the brand guide, helped make the content more engaging. Key sections the client wanted to highlight were given special attention. Clear visuals and layout showed the benefits of joining, with strong calls to action throughout. The design also included Awaq’s new ECOSOC Special Advisory Status to build trust and inspire users to take part.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HOMEPAGE area */}

      {/* portfolio area */}
      <ProjectSixHomepage style_2={true} />
      {/* portfolio area */}



      {/*information architecture thumb */}
      {/* <div id="xyz" className="tp-project-details-3-thumb mb-120">
          <div className="container container-1560">
            
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-thumb-box">
                    <Image data-speed="" src={full_image_2} alt="port-img" style={{ height: 'auto' }}/>
                  </div>
                </div>
            </div>
          </div>
      </div> */}
      {/* details thumb */}
    </>
  )
}
