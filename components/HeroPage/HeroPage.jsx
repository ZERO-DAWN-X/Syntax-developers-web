"use client";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HeroPage = ({ onNavigate }) => {
  return (
    <main className="min-h-screen p-16 flex flex-col justify-center items-center">
      {/* plant images */}
      <img
        src="./bg-l-plant.png"
        alt="bg-l-plant"
        className="absolute left-0 top-0 w-40"
      />
      <img
        src="./bg-r-plant.png"
        alt="bg-l-plant"
        className="absolute right-0 bottom-0 w-40"
      />

      {/* Left Section */}
      <div className="hero-left uppercase absolute right-1 top-20 flex flex-col items-end tracking-widest">
        <h1 className="py-2 px-6 border border-r-0 text-3xl mb-1">welcome</h1>{" "}
        <span>
          to our <span className="HeroText2">workspace</span>
        </span>
      </div>

      {/* Right Section */}
      <div className="hero-right flex flex-col items-center justify-center mt-20">
        <img src="./syntax-logo.png" alt="logo" className="w-56" />

        <h1 className="developers uppercase text-sm font-bold">developers</h1>

        <p className="hero-pharagraph mt-10 text-center">
          Vercel provides free hosting for static sites and serverless
          functions, making it an excellent choice for developers looking to
          deploy their projects quickly. When you deploy a project on Vercel,
          you get a free subdomain under vercel.app. However, you can also add
          custom domains if you have one.
        </p>

        <button onClick={onNavigate} className="rounded-full p-2 border mt-28">
          <i className="text-xl">
            <MdOutlineKeyboardDoubleArrowRight />
          </i>
        </button>
      </div>
    </main>
  );
};

export default HeroPage;
