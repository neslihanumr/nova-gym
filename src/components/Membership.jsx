import React from "react";

export default function Membership() {
  return (
    <div className="bg-gradient-to-b from-[#07060B] to-[#242424] py-16">
      <div className="container text-center">
        <h2 className="text-3xl text-[#C0EA18] font-semibold mb-4">
          Become a Member
        </h2>
        <p className="text-[#D8D8D8] text-lg mb-8">
          Join us today and start your fitness journey!
        </p>

        <ul className="text-left text-[#d8d8d8] mx-auto mb-8 max-w-md">
          <li className="flex items-center mb-4">
            <i className="fa-solid fa-check mr-3 text-[#98F224]"></i>
            Access to all classes
          </li>
          <li className="flex items-center mb-4">
            <i className="fa-solid fa-check mr-3 text-[#98F224]"></i>
            Personalized training programs
          </li>
          <li className="flex items-center mb-4">
            <i className="fa-solid fa-check mr-3 text-[#98F224]"></i>
            Nutrition counseling
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-check mr-3 text-[#98F224]"></i>
            State-of-the-art equipment
          </li>
        </ul>

        <button className="bg-gradient-to-r from-[#C0EA18] to-[#98F224] text-black p-3 rounded-sm font-jura">
          Join Now
        </button>
      </div>
    </div>
  );
}
