import React from "react";
import IMAGES from "../images";

const features = [
  {
    title: "Personal Training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,",
    img: IMAGES.checked,
  },
  {
    title: "Group Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,",
    img: IMAGES.checked,
  },
  {
    title: "Nutritional Guidance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquam augue. Aliquam orci ipsum adipiscing elit. Aliquam nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt ",
    img: IMAGES.checked,
  },
];

export default function About() {
  return (
    <>
      <div className="relative w-full">
        <div
          className="w-full bg-cover bg-no-repeat flex items-center justify-center "
          style={{
            backgroundImage: `url(${IMAGES.aboutHero})`,
            backgroundSize: "cover",
            height: "50vh",
          }}
        >
          <h1
          data-aos="fade-up"
            className="text-5xl md:text-6xl lg:text-7xl font-zen-tokyo-zoo text-[#98F224]"
            style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-[#07060B] min-h-screen flex flex-col md:flex-row items-start  ">
        <div data-aos="fade-up" data-aos-delay="300" className="container flex flex-col w-full  mt-36 md:flex-row mb-36">
          <div className="text-left flex-1 ">
            <div className="flex justify-left ">
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
                    <h3 className="font-jura font-bold text-xl text-[#D8D8D8]">
                      {feature.title}
                    </h3>
                    <p className="text-[#868686] flex-col mt-2 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div 
          className="flex-1 flex justify-end items-start md:mt-0">
            <img
              src={IMAGES.aboutImage}
              alt="About Us"
              className="w-full h-auto hidden md:block md:w-3/4 lg:w-4/5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
