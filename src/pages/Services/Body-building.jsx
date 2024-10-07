import React from "react";
import IMAGES from "../../images";
import { Link } from "react-router-dom";

const SectionTitle = ({ title, highlight }) => (
  <h2 className="font-jura text-3xl md:text-4xl text-[#D9D9D9]">
    {title} <br />
    <span className="font-inter text-[#98F224]">{highlight}</span>
  </h2>
);

const Paragraph = ({ children }) => (
  <p className="text-[#CCCCCC] font-jura font-extralight mt-5 text-base md:text-lg tracking-wide">
    {children}
  </p>
);

const TrainerCard = ({ image, name }) => (
  <div className="group relative w-72 md:w-80 h-96 md:h-92 mx-8 md:mx-12 mb-24 md:mb-36 overflow-hidden rounded-lg shadow-lg">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
      <h3 className="text-md md:text-lg font-jura text-white">{name}</h3>
    </div>
  </div>
);

function BodyBuilding() {
  return (
    <>
      <div className="relative h-screen">
        <img
          src={IMAGES.bodyBuildingHero}
          alt="Body Building"
          className="absolute w-full h-full object-cover lg:mt-16"
        />
        <div className="container absolute inset-0 md:justify-start flex justify-center items-center">
          <h1 className="text-4xl md:text-8xl italic font-inter font-medium text-[#D9D9D9]" data-aos="fade-up" >
            BODY BUILDING
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-[#1E1E1E]">
        <div className="flex justify-start container">
          <div className="mt-16 md:mt-28" data-aos="fade-up"data-aos-delay="300">
            <SectionTitle title="What Is" highlight="Body Building" />
            <Paragraph>
              Bodybuilding is a sport and fitness regimen focused on the
              development and growth of muscle mass and overall strength. This
              practice involves a combination of weight training, proper
              nutrition, and rest to achieve a well-defined, muscular
              physique.It is not just about lifting heavy weights but also about
              understanding the science of muscle growth and recovery. <br />{" "}
              <br />
              Bodybuilding requires a disciplined approach to both training and
              diet. Weight training routines are designed to target specific
              muscle groups, with a focus on progressive overload to continually
              challenge the muscles. This helps in increasing muscle size and
              strength over time. Equally important is a well-structured
              nutrition plan, which provides the essential nutrients needed for
              muscle repair and growth. Bodybuilders often follow a diet rich in
              protein, complex carbohydrates, and healthy fats to fuel their
              workouts and optimize recovery. <br />
              <br /> Additionally, rest and recovery play a crucial role in
              bodybuilding. Muscles need time to repair and grow after intense
              workouts, so getting adequate sleep and managing stress are key
              components of a successful bodybuilding program. Many bodybuilders
              also incorporate techniques such as stretching, massage, and
              active recovery to enhance their overall performance and prevent
              injuries.
            </Paragraph>
          </div>
        </div>
        <div className="bg-neutral-900">
          <div className="container py-12 md:py-16 flex flex-col lg:flex-row justify-between items-start mt-40 md:mt-60 gap-8 md:gap-12">
            <div className="lg:w-1/2 flex justify-end" data-aos="fade-up"data-aos-delay="600">
              <img
                src={IMAGES.bodyBuildingImg}
                alt="Body Building"
                className="rounded-xl"
              />
            </div>
            <div className="lg:w-1/2 " data-aos="fade-up"data-aos-delay="900">
              <h3 className="text-4xl md:text-6xl text-white font-jura">
                Transform Your Body with Expert Training
              </h3>
              <p className="text-[#CCCCCC] font-jura mt-4 md:mt-6">
                Achieve your bodybuilding goals with our comprehensive training
                programs. Get expert advice, tailored workouts, and nutritional
                guidance to help you build muscle and strength effectively.
                Start your transformation today!
              </p>
              <div className="flex items-start mt-8 md:mt-10">
                <Link 
                to="/contact"
                className="px-4 py-1 md:px-6 md:py-2 rounded-sm bg-[#98F224] text-gray-900">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-40 md:mt-52" data-aos="fade-up"data-aos-delay="1200">
          <span className="text-md font-jura text-with-lines w-3/12 text-[#C0EA18] whitespace-nowrap">
            Our Trainers
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-24 gap-6 md:gap-8" data-aos="fade-up"data-aos-delay="1500">
          <TrainerCard image={IMAGES.trainer1} name="James Anderson" />
          <TrainerCard image={IMAGES.trainer2} name="Emily Johnson" />
          <TrainerCard image={IMAGES.trainer3} name="Michael Roberts" />
        </div>
      </div>
    </>
  );
}

export default BodyBuilding;
