import React from "react";
import IMAGES from "../images";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price, features, isHighlighted }) => (
  <div 
    data-aos="fade-up" data-aos-delay="300"
  >
  <div className={`p-6 flex flex-col items-center w-full  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer ${
    isHighlighted ? "bg-[#C0EA18]" : "bg-white bg-opacity-10" 
  }`}
    
  style={{ height: "auto", minWidth: "300px" }} >
  
    <h5
      className={`text-2xl font-jura mb-2 ${
        isHighlighted ? "text-[#000000]" : "text-[#C0EA18]"
      }`}
    >
      {title}
    </h5>
    <p
      className={`text-4xl font-medium mb-2 ${
        isHighlighted ? "text-[#000000]" : "text-white"
      }`}
    >
      {price}
      <span
        className={`text-xl font-normal ${
          isHighlighted ? "text-[#000000]" : "text-white"
        }`}
      >
        /month
      </span>
    </p>
    <ul
      className={`text-sm  w-full mb-6 ${
        isHighlighted ? "text-[#000000]" : "text-[#f0f0f0]"
      }`}
    >
      {features.map((feature, index) => (
        <li key={index} className="flex items-start mt-4 space-x-2">
          <img
            src={isHighlighted ? IMAGES.pricingBlack : IMAGES.pricing}
            alt="check"
            className="w-4 h-4"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`px-4 py-2 flex items-center space-x-2 ${
        isHighlighted ? "text-[#000000]" : "text-white"
      }`}
    >
      <Link
      to="/Contact"
      >Join Now</Link>
      <img
        src={isHighlighted ? IMAGES.readMore : IMAGES.readMoreWhite}
        alt="join"
        className="w-3 h-3"
      />
    </button>
  </div>
  </div>
);

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Standard",
      price: "$19.99",
      features: [
        "Access to online workout",
        "Nutrition program",
        "Unlimited tools",
        "Adjustable schedule",
        "Unlimited clubs access",
      ],
    },
    {
      title: "Premium",
      price: "$39.99",
      features: [
        "Access to online workout",
        "Nutrition program",
        "Unlimited tools",
        "Adjustable schedule",
        "Unlimited clubs access",
      ],
      isHighlighted: true,
    },
    {
      title: "Medium",
      price: "$29.99",
      features: [
        "Access to online workout",
        "Nutrition program",
        "Unlimited tools",
        "Adjustable schedule",
        "Unlimited clubs access",
      ],
    },
  ];

  return (
    <div className="bg-[#07060B] min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center mt-32 mb-64 h-full w-full">
        <div data-aos="fade-up" className="flex justify-center flex flex-col items-center">
        <h3 className="font-jura text-with-lines w-full text-[#C0EA18]">
          Pricing
        </h3>
        <h4 className="font-jura text-xl mt-4 mb-20 text-[#D8D8D8]">
          Choose Your Plan
        </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 gap-3 mb-3 md:space-x-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
            key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
