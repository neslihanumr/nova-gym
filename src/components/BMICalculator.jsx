import React, { useState } from "react";
import IMAGES from "../images";

const InputField = ({ type, label, value, onChange }) => (
  <div className="relative mb-2">
    <label className=" text-[#ffffff]">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 mt-3 bg-[#151515] text-[#f0f0f0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0EA18]"
    />
  </div>
);

export default function BMIcalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBMI] = useState("");

  function calculateBMI(e) {
    e.preventDefault();
    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage("Severe Thinness.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 16 && bmi < 17) {
      setMessage("Moderate Thinness.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage("Mild Thinness.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("Healthy weight.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("Overweight.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 30 && bmi < 35) {
      setMessage("Obese Class I.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 35 && bmi < 40) {
      setMessage("Obese Class II.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 40) {
      setMessage("Obese Class III.");
      setBMI("Your BMI is " + bmi.toFixed(2));
    }
  }

  function resetCalculator(e) {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setMessage("");
    setBMI("");
  }

  return (
    <div className="bg-[#07060B] min-h-screen flex items-start justify-center p-4">
      <div className="container mt-32 h-full w-full">
        <div className="flex justify-center mb-14">
          <span data-aos="fade-up" className="text-sm font-jura text-with-lines w-3/12 text-[#C0EA18] whitespace-nowrap">
            BMI Calculator
          </span>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="bg-[#242424] gap-6 p-5 w-full h-96 flex flex-col md:flex-row">
          {/* Left Column */}
          <div data-aos="fade-up" data-aos-delay="600" className="w-full md:w-2/5 md:pr-4 hidden lg:block">
            <img
              src={IMAGES.bmiCalc}
              alt="bmi calculator"
              width={364}
              height={364}
              className="-mt-24"
            />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-2/4">
            <form className="flex flex-col space-y-2">
              <div className="flex space-x-4">
                <InputField
                  value={weight}
                  type="text"
                  label="Weight (kg)"
                  onChange={(e) => setWeight(e.target.value)}
                />
                <InputField
                  value={height}
                  type="text"
                  label="Height (cm)"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="flex space-x-4">
                <div className="relative mb-4 w-1/">
                  <label className="text-[#ffffff]">Gender</label>
                  <select className="w-5/6 p-2 mt-3 bg-[#151515] text-[#f0f0f0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0EA18]">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row justify-start space-x-0 md:space-x-4 mb-6">
                <button
                  type="button"
                  onClick={calculateBMI}
                  className="bg-[#ffffff] text-[#000] p-2 w-full rounded-md hover:bg-[#C0EA18] hover:text-[#000] transition-colors duration-500 ease-in-out"
                >
                  Calculate
                </button>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-[#000000] text-[#ffffff] p-2 w-full rounded-md"
                >
                  Reset
                </button>
              </div>

              {/* BMI Section */}
              {message && bmi && (
                <div className="p-4 bg-[#151515] text-[#f0f0f0] rounded-md">
                  <h3>
                    {message} {bmi}
                  </h3>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
