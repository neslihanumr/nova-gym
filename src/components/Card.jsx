import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../images";

const Card = ({ image, title, text, link }) => {
  const isSecondCard = title === "Kick Boxing";

  return (
    <div
      className="bg-[#242424] flex flex-col items-center p-6 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      style={{
        backgroundColor: isSecondCard ? "#98F224" : "#242424",
        color: isSecondCard ? "#1E1E1E" : "#FFFFFF",
      }}
    >
      <div className="flex justify-center w-full mb-3">
        <img src={image} alt={title} className="h-10" />
      </div>
      <h5
        className="text-md text-center font-bold font-jura mt-3 transition-colors duration-300 ease-in-out"
        style={{ color: isSecondCard ? "#1E1E1E" : "#FFFFFF" }}
      >
        {title}
      </h5>
      <p
        className="text-center mt-4 transition-colors duration-300 ease-in-out"
        style={{ color: isSecondCard ? "#1E1E1E" : "#868686" }}
      >
        {text}
      </p>
      <div className="text-center mt-auto">
        <Link to={link}>
          <button
            className="read-more font-jura flex items-center gap-1 space-x-2 mt-4 transition-colors duration-300 ease-in-out"
            style={{ color: isSecondCard ? "#1E1E1E" : "#FFFFFF" }}
          >
            Read More{" "}
            <img
              src={isSecondCard ? IMAGES.readMore : IMAGES.readMoreWhite}
              alt="Read More Icon"
              className="w-3 h-3"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
