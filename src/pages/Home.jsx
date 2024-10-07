import React from "react";
import { Link } from "react-router-dom";
import BMIcalculator from "../components/BMICalculator";
import Card from "../components/Card";
import Pricing from "../components/Price";
import Testimonials from "../components/Testimonials";
import IMAGES from "../images";



//About Us Section
const features = [
  {
    title: "Personal Training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam",
    img: IMAGES.checked,
  },
  {
    title: "Group Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam",
    img: IMAGES.checked,
  },
  {
    title: "Nutritional Guidance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam",
    img: IMAGES.checked,
  },
];
//About Us Section

export default function Home() {
  return (
    
    <>
      {/*Home*/}
      <div className="home-background min-h-screen">
        <div className="container">
          <div
          data-aos="fade-up"
           className="w-full min-h-screen text-[#d8d8d8] flex flex-col justify-end">
            <div className="w-auto">
              <p className=" font-medium">
                NOVA<span className="text-[#C0EA18]">GYM</span> FITNESS CLUB
              </p>
              <span className="block text-[3.8rem] leading-tight lg:text-8xl font-semibold font-inter">
                BE STRONG
                <br />
                <span className="text-[#C0EA18]"> TRAIN HARD </span>
                <br />
                WITH US
              </span>
            </div>
           
            <div className="lg:w-96 mt-48">
              <div className="flex flex-wrap justify-between bg-[#242424] text-[#C0EA18] p-5">
                <div className="w-1/3 p-2 border-r h-16 flex items-center border-[#C0EA18]">
                  <div className="text-center w-full">
                    <div className="text-2xl font-medium">5</div>
                    <div className="text-sm">
                      CERTIFICATE <br />
                      TRAINER
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-2 border-r h-16 flex items-center border-[#C0EA18]">
                  <div className="text-center w-full">
                    <div className="text-2xl font-medium">8</div>
                    <div className="text-sm">
                      YEARS <br />
                      EXPERIENCE
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-2 h-16 flex items-center justify-center">
                  <div className="text-center w-full">
                    <div className="text-2xl font-medium">155</div>
                    <div className="text-sm">
                      LOYAL <br /> CLIENT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      {/*Home*/}
      {/* Card Section*/}
      <div className="bg-[#07060B] min-h-screen flex items-start justify-center ">
        <div className="container text-center mt-52 ">
          <div data-aos="fade-up" className="flex justify-center flex flex-col items-center">
            <span className="text-sm font-jura text-with-lines w-3/12 text-[#C0EA18] whitespace-nowrap">
              Our Advantages
            </span>
            <h4 className="font-jura text-xl mt-4 mb-14 text-[#D8D8D8] ">
            Explore Our Program
          </h4>
          </div>
       

          <div data-aos="fade-up" data-aos-delay="300"  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 cursor-pointer">
            <Card
              image={IMAGES.stretchTraining}
              title="Stretch Training"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec"
              link="/services/Stretch-training"
            />
            <Card
              image={IMAGES.kickBoxing}
              title="Kick Boxing"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec"
              link="/services/Kick-boxing"
            />
            <Card
              image={IMAGES.bodyBuilding}
              title="Body Building"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec"
              link="/services/Body-building"
            />
            <Card
              image={IMAGES.weightLoss}
              title="Weight Loss"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec"
              link="/services/Weight-loss"
            />
          </div>
        </div>
      </div>
      {/* Card Section*/}

      {/*About us*/}
      <div className="bg-[#07060B] min-h-screen flex flex-col md:flex-row items-start">
        <div className="container flex flex-col w-full mt-32 md:flex-row">
          <div data-aos="fade-up" className="text-left flex-1 ">
            <div className="flex justify-left">
              <span className="text-sm font-jura text-with-lines w-2/3 text-[#C0EA18]">
                Why Choose Us
              </span>
            </div>
            <h4 className="font-jura text-3xl mt-4 text-[#D8D8D8]">
              We provide our %100 trusted <br /> fitness sport
            </h4>

            {features.map((feature, index) => (
              <div className="flex-col text-left mt-10" key={index}>
                <div className="flex items-start">
                  <img
                    src={feature.img}
                    alt="check"
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-jura font-medium text-xl text-[#D8D8D8]">
                      {feature.title}
                    </h3>
                    <p className="text-[#868686] flex-col mt-2 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-10 sm:mb-14 md:mb-14">
              <Link
                to="/about"
                className="bg-[#98F224] p-[8px] text-sm rounded-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="flex-1 flex justify-end items-start md:mt-0">
            <img
              src={IMAGES.aboutUs}
              alt="About Us"
              className="w-full h-auto hidden md:block md:w-3/4 lg:w-4/5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/*About us*/}
      <BMIcalculator />
<Testimonials  />
<Pricing />
    </>

  );
}
