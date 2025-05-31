import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "High Fidelity Prototype",
    title: "Internships",
    text: "The website is designed to make it easy for users to find and reserve internships. Internships are shown on a main page, as well as on country and station pages. Clear buttons and links guide users to take action. From the internship page, users can view all options, read more details, and complete their reservation.",
    lists: [
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Design Studio",
    title: "Destinations Page",
    text: "The Destinations page was designed to present each country in a visually engaging and informative way. As a reference, Colombia was created as the first destination to illustrate the structure and visual direction of this page. Like the rest of the site, all content elements were intended to be interactive and dynamically populated from the backend.",
    lists: [
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Biological Stations",
    title: "Biological Stations",
    text: "Each biological station has its own dedicated page, designed to clearly showcase its purpose and offerings within the program.",
    lists: [
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Support",
    title: "Supporting Pages",
    text: "Informational pages were created to provide users with clear guidance on how to complete their reservation, including step-by-step explanations and details about the payment method. The goal was to prioritize user autonomy, minimizing the need for assistance.",
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
            <div className="col-xl-6 col-lg-6">
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
              <div className="col-xl-6 col-lg-6">
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
