import React from "react";
import CardGrid from "./components/CardGrid";

const testimonialsData = [
  {
    text: "Amazing service! Found an apartment in less than 3 days and the process was so smoothe",
    name: "Eniola Aborisade",
    stars: Array(4).fill(<i className="bx bxs-star"></i>), // 4 stars,
    image: "/images/eniola.jpg",
  },
  {
    text: "I would like to personally thank you for your outstanding services. Really good customer service.",
    name: "Ayo Robert",
    stars: Array(5).fill(<i className="bx bxs-star"></i>), // 4 stars,
    image: "/images/ayo.jpg",
  },
  {
    text: "I love that there is an online inspection option, it made everything much easier!",
    name: "Kenny Akpan",
    stars: Array(5).fill(<i className="bx bxs-star"></i>), // 4 stars,
    image: "/images/kenny.jpg",
  },
];

const Testimonials = () => (
  <CardGrid
    title="Testimonials"
    subtitle="What our clients are saying"
    cardsData={testimonialsData}
    extraClass="testimonials"
  />
);

export default Testimonials;
