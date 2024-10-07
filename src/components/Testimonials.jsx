import React from "react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IMAGES from "../images";

const TestimonialCard = ({ imgSrc, name, membershipDuration, review }) => (
  <div
    className="bg-white bg-opacity-10 backdrop-blur-md p-6
    flex flex-col items-left sm:h-56 "
  >
    <div className="flex items-center space-x-4">
      <img
        src={imgSrc}
        alt="testimonial"
        className="rounded-full w-16 h-16 mb-4"
      />
      <div className="text-left mb-8">
        <p className="text-lg text-[#f0f0f0] font-semibold">{name}</p>
        <p className="text-sm text-[#D8D8D8]">{membershipDuration}</p>
      </div>
    </div>
    <div className="flex justify-left mt-2">
      <div className="flex justify-left mt-2">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < 4 ? IMAGES.star : IMAGES.halfStar}
            alt="star"
            className="w-3 h-3"
          />
        ))}
      </div>
    </div>
    <p className="text-sm text-[#f0f0f0] mt-2">"{review}"</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      imgSrc: IMAGES.testimonial1,
      name: "Lucas Schmidt",
      membershipDuration: "Member for 1 year",
      review:
        "The coaches are extremely knowledgeable, and the community is incredibly supportive.",
    },
    {
      imgSrc: IMAGES.testimonial2,
      name: "Jane Smith",
      membershipDuration: "Member for 2 years",
      review:
        "I have been a loyal client for over two years now The facilities are top-notch and the atmosphere is always welcoming.",
    },
    {
      imgSrc: IMAGES.testimonial3,
      name: " Emily Johnson",
      membershipDuration: "Member for 3 months",
      review:
        "I absolutely love the content on this site! It's always fresh, engaging, and incredibly informative. Highly recommended!",
    },
    {
      imgSrc: IMAGES.testimonial4,
      name: "David Williams",
      membershipDuration: "Member for 6 months",
      review:
        "The community is very supportive. Fantastic job to the team behind it!",
    },
  ];

  return (
    <div className="bg-[#07060B] min-h-screen ">
      <div className="flex flex-col items-center w-full mt-26">
        <div data-aos="fade-up" className="flex justify-center flex flex-col items-center">
        <h3 className="font-jura text-with-lines w-full text-[#C0EA18] whitespace-nowrap">
          Testimonials
        </h3>
        <h4 className="font-jura text-xl mt-4 mb-14 text-[#D8D8D8]">
          Clients Say About Us
        </h4>
        </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-delay="300" 
          className="w-full h-[60vh] bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${IMAGES.bgTestimonials})`,
          }}
        >
          <div className="container flex justify-center items-center w-full h-full">
            <Swiper
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                768: {
                  width: 768,
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center sm:min-h-64 "
                >
                  <div 
                  className="w-full h-full max-w-md p-8 ">
                    <TestimonialCard {...testimonial} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    
    </div>
  );
};

export default Testimonials;
