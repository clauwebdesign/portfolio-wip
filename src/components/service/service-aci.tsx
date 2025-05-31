import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/portfolio/aci/register.jpg";
import ser_img_2 from "@/assets/img/portfolio/aci/internships.jpg";
import ser_img_3 from "@/assets/img/portfolio/aci/destination-station.jpg";
import ser_img_4 from "@/assets/img/portfolio/aci/reservations.jpg";
import ser_img_5 from "@/assets/img/portfolio/aci/help.jpg";
import ser_img_6 from "@/assets/img/portfolio/aci/profile.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Access the website",
    title: "Login or register",
    text: "Users are able to login or register on the website.",
    lists: [
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "High Fidelity Prototype",
    title: "Internships",
    text: "The website is designed to make it easy for users to find and reserve internships. Internships are shown on a main page, as well as on country and station pages. Clear buttons and links guide users to take action. From the internship page, users can view all options, read more details, and complete their reservation.",
    lists: [
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Additional pages",
    title: "Destinations & Biological Stations",
    text: "The Destinations page was designed to showcase each country in a visually engaging and informative way, with Colombia used as the first example to guide structure and style. Each biological station has its own dedicated page, clearly presenting its role in the program. An interactive submenu organizes content into sections like Mission, Location, Activities, Impact, and Station Director. These sections include varied content such as videos, maps, and downloadable documents. All elements across the page are interactive and dynamically loaded from the backend.",
    lists: [
      "Listing internships",
      "CTA redirecting to Reservation Page",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Reservation Experience",
    title: "Interactive Reservations",
    text: "The interactive reservation experience went through several iterations with the client and teams. Initially, a search engine was considered, but the complexity of the implementation and the limited development resources led to the implementation of a dynamic reservation page, accessible from different sections of the website. That offered a dynamic and integrated booking experience.",
    lists: [
      "The user navigates reservation page",
      "The user selects available internships, country, and biological station",
      "The user select the dates of the stay",
      "The user select the place of the stay",
      "The user cpmpletes the payment",
      "The website confirms the reservation and displays a receipt",
    ],
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "Support",
    title: "Supporting Resources",
    text: "Informational pages were created to provide users with clear guidance on how to complete their reservation, including step-by-step explanations and details about the payment method. The goal was to prioritize user autonomy, minimizing the need for assistance.",
    lists: [
      "How to make a reservation",
      "PayPal's Payment",
    ],
  },
  {
    id: 6,
    img: ser_img_6,
    subtitle: "User Profile",
    title: "User Dashboard",
    text: "The user profile was designed to provide users with full access to their reservation and program details in a clear, easy-to-use layout. From this section, users can view where they’ll be staying, see how much they paid, and access details about the program. They can also download the full program information, review past reservations, and make changes or cancellations when permitted by the policy. This section is currently being improved to enhance functionality and user experience.",
    lists: [
      "How to make a reservation",
      "PayPal's Payment",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0 mb-100">
            <div className="col-xl-5 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
