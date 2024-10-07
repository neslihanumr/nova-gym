import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../images";

const SectionTitle = ({ title, highlight }) => (
  <h2 className="font-jura font-semibold text-4xl text-[#D9D9D9]">
    {title} <br />
    <span className="font-inter text-[#98F224]">{highlight}</span>
  </h2>
);

const Paragraph = ({ children }) => (
  <p className="text-[#CCCCCC] font-jura mt-5 text-lg tracking-wide">
    {children}
  </p>
);

const IconCard = ({ image, title, description }) => (
  <div className="flex flex-col items-center w-full lg:w-1/3 h-64">
    <img src={image} alt={title} className="w-12 h-12 mb-4" />
    <h3 className="text-xl font-jura text-white mb-2">{title}</h3>
    <p className="text-center text-gray-400">{description}</p>
  </div>
);

function WeightLoss() {
  return (
    <>
      <div className="relative h-screen">
        <img
          src={IMAGES.weightLossHero}
          alt="Weight Loss"
          className="absolute w-full h-full object-cover lg:mt-16"
        />
        <div className="container absolute inset-0 flex justify-start items-center ">
          <h1 className="text-5xl md:text-8xl italic font-inter font-medium text-[#D9D9D9]" data-aos="fade-up">
            WEIGHT LOSS
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-[#1E1E1E]">
        <div className="flex justify-start container" data-aos="fade-up"data-aos-delay="300">
          <div className="mt-28">
            <SectionTitle title="What Is" highlight="Weight Loss" />
            <Paragraph>
              Weight loss occurs when you consume fewer calories than your body
              needs, leading to the burning of stored fat for energy. Effective
              weight loss involves a combination of a balanced diet, regular
              physical activity, and healthy lifestyle changes. <br />
              Focus on nutrient-dense foods like fruits, vegetables, lean
              proteins, and whole grains while reducing intake of sugary and
              processed foods. <br />
              Consistent exercise, including both cardiovascular and strength
              training, can boost metabolism and enhance fat loss. Remember,
              sustainable weight loss is a gradual process, and it's important
              to set realistic goals and stay motivated.
            </Paragraph>
          </div>
        </div>
        <div className="bg-neutral-900 ">
          <div className="container py-20 flex flex-col lg:flex-row justify-between items-center gap-14 mt-48">
            <div className="lg:w-1/2 flex justify-start" data-aos="fade-up"data-aos-delay="600">
              <img
                src={IMAGES.weightLossImg}
                alt="Weight Loss"
                className="w-full rounded-3xl"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-up"data-aos-delay="900">
              <SectionTitle title="Effective Exercise Tips for Weight Loss" />
              <div className="text-[#CCCCCC] leading-8 font-jura mt-5 text-lg tracking-wide">
                <p>
                  <strong style={{ color: "#98F224" }}>Frequency:</strong> At
                  least 150 minutes of moderate-intensity or 75 minutes of
                  vigorous-intensity aerobic exercise per week.
                </p>
                <p>
                  <strong style={{ color: "#98F224" }}>Intensity:</strong>{" "}
                  Moderate (brisk walking, swimming) or vigorous (running, HIIT)
                  activities.
                </p>
                <p>
                  <strong style={{ color: "#98F224" }}>
                    Strength Training:
                  </strong>{" "}
                  Include muscle-strengthening exercises at least 2 days a week.
                </p>
                <p>
                  <strong style={{ color: "#98F224" }}>Consistency:</strong>{" "}
                  Exercise regularly and make it a part of your routine.
                </p>
                <p>
                  <strong style={{ color: "#98F224" }}>Progression:</strong>{" "}
                  Gradually increase the duration and intensity as you improve.
                </p>
                <p>
                  <strong style={{ color: "#98F224" }}>
                    Lifestyle Integration:
                  </strong>{" "}
                  Add more physical activities to your daily life (e.g., take
                  stairs, walk more).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-24 pb-40" data-aos="fade-up"data-aos-delay="1000">
          <h2 className="font-jura text-2xl text-white">
            How Can I Help You Get on Track?
          </h2>
          <div className="flex flex-col lg:flex-row justify-around items-center mt-36 space-y-12 lg:space-y-0 lg:space-x-8 cursor-pointer">
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
            <button className="px-6 py-2 bg-[#98F224] text-gray-900 font-jura font-semibold rounded transform transition-transform duration-300 ease-in-out hover:scale-105">
                BOOK A FREE CONSULTATION TODAY!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeightLoss;
