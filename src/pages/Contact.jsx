import React from "react";

const ContactButton = ({ iconClass, text }) => (
  <button className="bg-[#151515] p-3 rounded-md flex items-center text-left">
    <div className="flex items-center gap-3 text-[#d8d8d8]">
      <i className={iconClass}></i>
      <span className="text-[#f0f0f0]">{text}</span>
    </div>
  </button>
);

const SocialMediaIcon = ({ iconClass, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`text-[#d8d8d8] hover:text-[#98F224] transition-colors duration-300`}
  >
    <i className={iconClass}></i>
    <span className="sr-only">{label}</span>
  </a>
);

const InputField = ({ type, placeholder, label }) => (
  <div className="relative mb-4">
    <label className=" text-[#ffffff]">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 mt-3 bg-[#151515] text-[#f0f0f0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0EA18]"
    />
  </div>
);

const TextAreaField = ({ placeholder, label }) => (
  <div className="relative mb-4">
    <label className="text-[#ffffff]">{label}</label>
    <textarea
      placeholder={placeholder}
      className="w-full p-3 mt-3 bg-[#151515] text-[#f0f0f0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0EA18]"
      rows="4"
    />
  </div>
);

const Contact = () => {
  return (
    <div className="bg-[#07060B]  min-h-screen flex justify-center items-center p-4 md:p-0">
      <div className="flex flex-col items-center mt-32 mb-64 h-full w-full">
        <h3 className="font-jura mb-14 text-with-lines w-3/12 text-[#C0EA18] whitespace-nowrap">
          Contact Us
        </h3>
        <div className="bg-[#242424] gap-6 p-12 w-full max-w-[1210px] flex justify-center flex-col md:flex-row ">
          {/* Left Column */}
          <div className="w-full md:w-2/5 md:pr-4 mb-10 md:mb-0">
            <h4 className="font-jura text-4xl md:text-4xl mb-4 text-left text-[#98F224] ">
              Contact Us
            </h4>
            <p className="text-[#ffffff] mb-6 text-left">
              Any question? We would be happy to help you!
            </p>
            <div className="flex flex-col space-y-4">
              <ContactButton
                iconClass="fa-solid fa-phone"
                text="+123 456 7890"
              />
              <ContactButton
                iconClass="fa-regular fa-envelope"
                text="novagym@gmail.com"
              />
              <ContactButton
                iconClass="fa-solid fa-location-dot"
                text="123 Main St, Anytown, USA"
              />
            </div>
            <div className="sm:mt-11">
              <h5 className="text-[#98F224] mt-8 mb-4 text-left">
                Our Social Media
              </h5>
              <div className="flex space-x-4">
                <SocialMediaIcon
                  iconClass="fa-brands fa-facebook-f"
                  link="https://www.facebook.com"
                  label="Facebook"
                />
                <SocialMediaIcon
                  iconClass="fa-brands fa-twitter"
                  link="https://twitter.com"
                  label="Twitter"
                />
                <SocialMediaIcon
                  iconClass="fa-brands fa-instagram"
                  link="https://www.instagram.com"
                  label="Instagram"
                />
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-2/4">
            <form className="flex flex-col space-y-4 ">
              <div className="flex space-x-4">
                <InputField
                  type="text"
                  placeholder="Enter First Name"
                  label="First Name"
                />
                <InputField
                  type="text"
                  placeholder="Enter Last Name"
                  label="Last Name"
                />
              </div>
              <InputField
                type="email"
                placeholder="info@example.com"
                label="Email"
              />
              <InputField
                type="tel"
                placeholder="+123 456 7890"
                label="Phone"
              />
              <TextAreaField placeholder="Type here.." label="Message" />
              <div className="md:w-full flex justify-end">
                <button className="bg-[#98F224] text-[#000] p-3 rounded-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
