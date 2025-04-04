import React from "react";
import CardGrid from "./components/CardGrid";

const servicesData = [
  {
    icon: <i class="bx bx-shopping-bag" id="service-icons"></i>,
    text: "Rent your home conveniently",
  },
  {
    icon: <i class="bx bx-home" id="service-icons"></i>,
    text: "Find your dream apartment",
  },
  {
    icon: <i class="bx bx-chat" id="service-icons"></i>,
    text: "24/7 customer support",
  },
  {
    icon: <i class="bx bx-coin-stack" id="service-icons"></i>,
    text: "5% Fixed Commission",
  },
];

const Services = () => (
  <CardGrid
    title="Our Services"
    subtitle="Here is how we can help you"
    cardsData={servicesData}
  />
);

export default Services;
