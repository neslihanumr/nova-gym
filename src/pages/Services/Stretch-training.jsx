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

const BenefitItem = ({ children }) => (
  <li className="leading-10 text-xl font-light space-y-4">{children}</li>
);

const IconCard = ({ image, title, description }) => (
  <div className="flex flex-col items-center w-full lg:w-1/3 h-64">
    <img src={image} alt={title} className="w-12 h-12 mb-4" />
    <h3 className="text-xl font-jura text-white mb-2">{title}</h3>
    <p className="text-center text-gray-400">{description}</p>
  </div>
);

function StretchTraining() {
  return (
    <>
      <div className="relative h-screen">
        <img
          src={IMAGES.stretchHero}
          alt="Stretch Training"
          className="absolute w-full h-full object-cover lg:mt-16"
        />
        <div className="container absolute inset-0 md:justify-start flex justify-start items-center">
          <h1 className="text-5xl md:text-8xl italic font-inter font-medium text-[#D9D9D9]" data-aos="fade-up" >
            STRETCH TRAINING
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-[#1E1E1E]">
        <div className="flex justify-start container" data-aos="fade-up"data-aos-delay="300">
          <div className="mt-28">
            <SectionTitle title="What Is" highlight="Stretch Training" />
            <Paragraph>
              Stretch training is a form of physical exercise that focuses on
              increasing flexibility, improving range of motion, and enhancing
              overall muscle health. It involves various stretching techniques
              to lengthen muscles and improve joint mobility. This type of
              training is suitable for individuals of all fitness levels and can
              help prevent injuries, reduce muscle tension, and promote
              relaxation.
            </Paragraph>
          </div>
        </div>
        <div className="bg-neutral-900">
          <div className="container flex flex-col lg:flex-row justify-between items-center mt-48" data-aos="fade-up"data-aos-delay="600">
            <div className="lg:w-1/2 p-4" >
              <h2 className="text-3xl text-[#98F224] font-jura mb-8 mt-4">
                Benefits of Stretch Training
              </h2>
              <ul className="list-disc list-inside text-[#CCCCCC]">
                <BenefitItem>Increases Flexibility</BenefitItem>
                <BenefitItem>Improves Posture</BenefitItem>
                <BenefitItem>Aids in Recovery</BenefitItem>
                <BenefitItem>Reduces Muscle Tension</BenefitItem>
                <BenefitItem>Boosts Circulation</BenefitItem>
                <BenefitItem>Enhances Relaxation</BenefitItem>
                <BenefitItem>Improves Performance</BenefitItem>
                <BenefitItem>Promotes Mind-Body Connection</BenefitItem>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-end">
              <img
                src={IMAGES.stretchImage}
                alt="Stretch Training"
                className="w-full h-auto max-w-md lg:max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="container mt-24 pb-40" data-aos="fade-up"data-aos-delay="900">
          <h2 className="font-jura text-2xl text-white" >
            How Can I Help You Get on Track?
          </h2>
          <div className="flex flex-col lg:flex-row justify-around items-center mt-36 space-y-12 lg:space-y-0 lg:space-x-8 cursor-pointer" >
            <IconCard
              image={IMAGES.assesment}
              title="Assessment"
              description="Begin with a thorough assessment to understand your current fitness level and goals."
            />
            <IconCard
              image={IMAGES.calendar}
              title="Personalized Plan"
              description="Receive a customized training plan tailored specifically to your needs and objectives."
            />
            <IconCard
              image={IMAGES.customerService}
              title="Ongoing Support"
              description="Enjoy continuous support and adjustments to your plan to ensure you stay on track and achieve your goals."
            />
          </div>
          <div className="flex justify-center mt-24">
            <Link to="/contact">
              <button className="px-6 py-2 bg-[#98F224] text-gray-900 font-jura font-semibold rounded transform transition-transform duration-300 ease-in-out hover:scale-105" >
                BOOK A FREE CONSULTATION TODAY!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default StretchTraining;
