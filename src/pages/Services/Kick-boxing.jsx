import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../images";

const SectionTitle = ({ title, highlight }) => (
  <h2 className="font-jura text-4xl text-[#D9D9D9]">
    {title} <br />
    <span className="font-inter text-[#98F224]">{highlight}</span>
  </h2>
);

const Paragraph = ({ children }) => (
  <p className="text-[#CCCCCC] font-jura mt-5 text-lg tracking-wide">
    {children}
  </p>
);
const IconCard = ({ image, title }) => (
  <div className="flex flex-col items-center w-full lg:w-1/3 h-64">
    <img src={image} alt={title} className="w-32 h-32  mb-4 rounded-full" />
    <h3 className="text-md font-inter text-white mb-2">{title}</h3>
  </div>
);

function KickBoxing() {
  return (
    <>
      <div className="relative h-screen">
        <img
          src={IMAGES.kickBoxingHero}
          alt="Kick Boxing"
          className="absolute w-full h-full object-cover lg:mt-16"
        />
        <div className=" container absolute inset-0  md:justify-start flex justify-start items-center">
          <h1 className="text-5xl md:text-8xl italic font-inter font-medium text-[#D9D9D9]" data-aos="fade-up">
            KICK BOXING
          </h1>
        </div>
      </div>
      <div className=" min-h-screen bg-[#1E1E1E]">
        <div className="flex justify-start container" data-aos="fade-up"data-aos-delay="300">
          <div className="mt-28">
            <SectionTitle title="What Is" highlight="Kick Boxing" />
            <Paragraph>
              Kick Boxing is a high-intensity martial art that combines elements
              of traditional boxing with kicks from martial arts such as karate
              and Muay Thai. This sport is practiced for self-defense, general
              fitness, or as a contact sport. <br />
              Kick Boxing is suitable for all fitness levels and can be adapted
              to meet individual needs and goals, making it a popular choice for
              both fitness enthusiasts and martial arts practitioners.
            </Paragraph>
          </div>
        </div>
        <div className="bg-neutral-900">
          <div className="container flex flex-col justify-start items-start mt-48" data-aos="fade-up"data-aos-delay="600">
            <h2 className="text-3xl text-[#98F224] font-jura mb-4 mt-16">
              KICKBOXING SERVICES
            </h2>
          </div>
          <div className="container mt-16 pb-28" data-aos="fade-up"data-aos-delay="600">
            <div className="flex flex-col lg:flex-row justify-around items-center mt-24 space-y-3 lg:space-y-0 lg:space-x-8 cursor-pointer">
              <IconCard
                image={IMAGES.oneBoxing}
                title="ONE ON ONE KICKBOXING"
              />
              <IconCard image={IMAGES.cardioBoxing} title="CARDIO BOXING" />
              <IconCard image={IMAGES.groupBoxing} title="GROUP BOXING" />
            </div>

            <div className="flex justify-center mt-24 ">
              <Link to="/contact">
              <button className="px-6 py-2 bg-[#98F224] text-gray-900 font-jura font-semibold rounded transform transition-transform duration-300 ease-in-out hover:scale-105">
                BOOK A FREE CONSULTATION TODAY!
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KickBoxing;
