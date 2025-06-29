import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/portfolio/pachamama/app1.jpg";
import ser_img_2 from "@/assets/img/portfolio/pachamama/app2.jpg";
import ser_img_3 from "@/assets/img/portfolio/pachamama/app3.jpg";
import ser_img_4 from "@/assets/img/portfolio/pachamama/app4.jpg";
import ser_img_5 from "@/assets/img/portfolio/pachamama/app5.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Accessing the app",
    title: "Log in or Sign up",
    text: "The first screen welcomes users with a friendly message. New users can quickly create an account, while returning users can easily log in and continue where they left off.",
    lists: [
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Discover and Explore",
    title: "Quick access to products",
    text: "The home screen gives a quick view of featured items and main categories, making it easy to start browsing. Users can search or explore by category right away. The Favorites screen is also designed for fast access, helping users keep track of what they like.",
    lists: [
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Filter",
    title: "Search made simple",
    text: "Users can apply filters like category, location, and price to quickly find what they need. This helps make the browsing experience faster and more personalized.",
    lists: [
      "Filter by product category",
      "Sett a price range that fits your budget",
      "Choose location to see nearby options",
      "Combine filters for more precise results",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Quick info and easy shopping",
    title: "Product Details & Cart",
    text: "Users can view product name, price, description, and related items all in one place. Adding products to the cart takes just one tap. The cart keeps track of selected items, making it simple to review and complete the purchase whenever ready.",
    lists: [
    ],
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "Order Tracking & Profile",
    title: "Track and manage",
    text: "Users can track their orders live from checkout to delivery with real-time updates and notifications. In the profile section, they can manage personal details, review past orders, and adjust saved settings easily.",
    lists: [
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
