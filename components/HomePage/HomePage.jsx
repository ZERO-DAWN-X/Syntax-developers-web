import React from "react";
import Header from "../Header/Header";
import { FiCheckCircle } from "react-icons/fi";

function HomePage() {
  return (
    <main className="min-h-screen px-8 py-4">
      <Header />
      {/* landing section */}
      <div className="mt-14">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <h1 className="landing-header text-[#72D700] uppercase text-[17px] font-semibold">
              We’re Help To <br /> Build Your{" "}
              <span className="text-white">Dream</span>
              <br /> Project
            </h1>
            <p className="text-[11px] pr-5 pb-5 text-[#C9C9C9]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitrLorem ipsum dolor sit amet.
            </p>
          </div>
          <img
            src="./main-img.png"
            alt="main image"
            className="w-[168px] h-[185px]"
          />
        </div>

        <div className="flex justify-between items-center pr-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-[24px] mr-1">1M+</h1>
              <h2 className="text-[10px] text-white">
                Customers visit <br />
                Albino every months
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-[24px]">93%</h1>
              <h2 className="text-[10px] text-white">
                Satisfaction rate
                <br />
                from our customers.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-[24px] mr-3">4.9</h1>
              <h2 className="text-[10px] text-white">
                Average customer
                <br />
                ratings out of 5.00!
              </h2>
            </div>
          </div>
          <button className="uppercase border-2 border-[#72D700] rounded-2xl px-4 py-1 text-[11px] mt-8">
            contact us
          </button>
        </div>
      </div>

      {/* our services */}
      <div className="mt-28 flex flex-col items-center relative">
        <img
          src="./BG-L-Assets.png"
          alt="left-plant"
          className="w-[80px] absolute -left-8 -top-10"
        />
        <img
          src="./BG-R-Assets.png"
          alt="left-plant"
          className="w-[80px] absolute -right-8 bottom-0"
        />

        <h1 className="uppercase text-[16px] font-inter font-semibold tracking-widest">
          <span>Our</span> Services
        </h1>
        <div className="mt-8 our-services-text border border-2 px-5 py-2 uppercase flex flex-col items-center">
          <h1 className="text-[18px]">react / next / vite</h1>
          <h2 className="text-[7px] pt-2">-custom websites</h2>
        </div>

        <div className="grid grid-cols-2 uppercase gap-5 tracking-wider font-medium text-[11px] font-inter">
          <div className="flex flex-col justify-start mt-10 col-span-1">
            <div className="flex items-center gap-2 mb-2 ml-8">
              <i className="text-[#72D700]">
                <FiCheckCircle />
              </i>
              <h1>E-commerce web</h1>
            </div>
            <div className="flex items-center gap-2 mb-2 ml-8">
              <i className="text-[#72D700]">
                <FiCheckCircle />
              </i>
              <h1>app development</h1>
            </div>
            <div className="flex items-center gap-2 mb-2 ml-8">
              <i className="text-[#72D700]">
                <FiCheckCircle />
              </i>
              <h1>website maintenance</h1>
            </div>
          </div>
          <div className="flex flex-col justify-start mt-10 col-span-1">
            <div className="flex items-center gap-2 mb-2 ml-2">
              <i className="text-[#72D700]">
                <FiCheckCircle />
              </i>
              <h1>ui/ux design</h1>
            </div>
            <div className="flex items-center gap-2 mb-2 ml-2">
              <i className="text-[#72D700]">
                <FiCheckCircle />
              </i>
              <h1>free hosting</h1>
            </div>
            <div className="flex items-center gap-2 mb-2 ml-2">
              <i className="text-[#72D700]">
                <FiCheckCircle />
              </i>
              <h1>high security</h1>
            </div>
          </div>

          
        </div>
        <p className="text-[11px] px-8 text-center my-5 text-[#618E74]">
          We are providing the best web based solutions using cutting edge
          technologies. A professional website has a far wider reach than any
          other form of advertising. We understand that the choice of accurate
          graphics, layout and utilization of colors to match the business & the
          industry are essential in establishing the brand image of the company
          via the official website.
        </p>
      </div>

      {/* our projects */}

      {/* contact us */}
      <div className="mt-28 mb-20 flex flex-col items-center relative">
        <img
          src="./BG-L-Assets.png"
          alt="left-plant"
          className="w-[80px] absolute -left-8 -top-10"
        />
        <img
          src="./BG-R-Assets.png"
          alt="left-plant"
          className="w-[80px] absolute -right-8 bottom-0"
        />

        <h1 className="uppercase text-[16px] font-inter font-semibold tracking-widest">
          <span>if you</span> want
        </h1>
        <div className="mt-6 our-services-text border border-2 px-5 py-2 uppercase flex flex-col items-center">
          <h1 className="text-[18px]">custom websites</h1>
          <h2 className="text-[7px] pt-2">-contact us-</h2>
        </div>
        
        <p className="text-[11px] px-10 text-center my-5 text-[#618E74]">
          We are providing the best web based solutions using cutting edge
          technologies. A professional website has a far wider reach than any
          other form of advertising.
        </p>
      </div>
    </main>
  );
}

export default HomePage;
