import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function SyntaxPage({ onNavigate }) {
  return (
    <main className="min-h-screen">
      <div className="sm:w-full sm:h-full w-full h-[425px] relative flex flex-col items-center justify-center">
        <img
          src="./heroimg.png"
          alt="hero image"
          className="w-full rounded-br-[220px] h-[425px]"
        />
        <div className="overlyBg absolute w-full h-full rounded-br-[220px]"></div>
        <div className="flex flex-col items-center justify-center absolute">
          <img src="./syntax-logo.png" alt="syntax-logo" className="w-64" />
          <h1 className="developers uppercase">developers</h1>
        </div>
      </div>
      <div className="hero-left mt-6 uppercase right-1 top-20 flex flex-col items-start tracking-widest">
        <h1 className="py-2 px-6 border border-2 border-l-0 text-3xl mb-1">welcome</h1>{" "}
        <span className="pl-2">
          to our <span className="HeroText2">workspace</span>
        </span>
      </div>

      <div className="hero-right flex flex-col items-center justify-center">
        <p className="text-[12px] hero-pharagraph text-center p-10">
          Vercel provides free hosting for static sites and serverless
          functions, making it an excellent choice for developers looking to
          deploy their projects quickly.
        </p>

        <button
          onClick={onNavigate}
          className="items-center gap-2 px-6 flex rounded-full py-1 border border-2 mt-5"
        >
          <span className="text-lg font-semibold">Let's Go</span>
          <i className="text-3xl">
            <MdOutlineKeyboardDoubleArrowRight />
          </i>
        </button>
      </div>
    </main>
  );
}

export default SyntaxPage;
