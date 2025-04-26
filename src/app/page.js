"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/free");
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#547792]  text-[#183a4d]">
      {/* Headline */}
      <div style={{backgroundImage: "url('/images/111.png')", backgroundSize: "cover", backgroundPosition: "center", width: "100vw"}}>
        <h1 className=" text-5xl font-extrabold text-center mt-30 mb-12 tracking-tight">
          THE RESTAURANT PROFIT CALCULATOR
        </h1>
        <p className=" text-4xl  text-center mb-12">
          Plan it like a pro. Dream it like a chef.
          <br className="hidden md:inline" />
          Decide it like an investor.
        </p>
        {/* CTA */}
        <div className="flex flex-row items-center justify-center gap-4 text-white text-2xl mb-20">
          <button
            onClick={handleClick}
            className="w-[250px] bg-[#a82d23] hover:bg-[#a12d1b]  font-semibold py-5 rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-[#a82d23]/50"
          >
            TRY IT FREE
          </button>
          <button
            className="w-[250px] bg-[#183a4d] hover:bg-[#132c3e]  font-semibold py-5 rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-[#183a4d]/50"
          >
            BOOK A CONSULT
          </button>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="bg-[#94B4C1] w-full  px-6 py-10 shadow-md grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              WHAT IS IT?
            </h2>
            <p className="text-lg">
              Our restaurant profit calculator is a smart tool that helps you plan and
              optimize your restaurant's profitability. With our calculator, you can
              easily estimate your restaurant's potential revenue, expenses, and profit
              margins.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 text-center">WHAT IT SOLVES?</h2>
            <p className="text-lg">Find out if your concept is profitable</p>
            <p className="text-lg">A smart tool for restaurant planning</p>
            <p className="text-lg">A smart tool for restaurant planning</p>
            <p className="text-lg">A smart tool for restaurant planning</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 text-center">HOW IT WORKS?</h2>
            <p className="text-lg">Input numbers. Get a 5-year projection.</p>
            <p className="text-lg">A smart tool for restaurant planning</p>
            <p className="text-lg">A smart tool for restaurant planning</p>
            <p className="text-lg">A smart tool for restaurant planning</p>
          </div>
        </div>
      </div>
      {/* Pricing Cards */}
      <div className=" mx-auto  pt-20  flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-center">UPGRADE FOR MORE FEATURES</h2>
        <p className="text-xl text-center mb-8">
          Get the most out of your restaurant planning with our premium features.
        </p>
      </div>
      <div className="container  py-8 px-28  ">
        {/* Basic */}
        <div className="flex-1 bg-[#c66c51] rounded-xl py-10 px-8 flex flex-col items-center shadow-lg shadow-[#0c1425]/50  w-full mx-auto text-[#0c1425] transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-5xl font-bold mb-1">BASIC</h2>
          <div className="text-5xl font-extrabold mb-1">$59</div>
          <div className=" text-3xl mb-3">one-time</div>
          <ul className="list-disc list-inside  text-xl mb-5 space-y-1 text-left ">
            <li>Unlimited use for one concept</li>
            <li>Save + edit anytime</li>
            <li>Basic menu builder</li>
            <li>Downloadable report</li>
            <li>Set custom profit margin</li>
          </ul>
          <button className=" text-2xl font-bold rounded px-5 py-2 mt-auto shadow  transition border-2 border-[#0c1425] ">
            LEARN MORE
          </button>
        </div>
        {/* Premium */}
        <div className="flex-1 bg-[#f6e187] rounded-xl py-10 px-8 flex flex-col items-center shadow-lg shadow-[#0c1425]/50 min-w-[260px] w-full mx-auto text-[#0c1425] transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-5xl font-bold mb-2">PREMIUM</h2>
          <div className="text-5xl font-extrabold mb-3">$120</div>
          <div className=" text-3xl mb-5">/year</div>
          <ul className="list-disc list-inside  text-xl mb-5 space-y-1 text-left ">
            <li>Everything in Basic</li>
            <li>Unlimited concepts</li>
            <li>Basic menu builder</li>
            <li>Catering, to-go, retail inputs</li>
            <li>Square footage auto-seat calculation</li>
            <li>Scenario comparison</li>
          </ul>
          <button className=" text-2xl font-bold rounded px-5 py-2 mt-auto shadow  transition border-2 border-[#0c1425] ">
            LEARN MORE
          </button>
          {/* text-[#b23b2a] hover:bg-[#f8faf5] bg-white*/}
        </div>
        {/* Elite */}
        <div className="flex-1 bg-[#1d4d3a] rounded-xl py-10 px-8 flex flex-col items-center shadow-lg shadow-[#0c1425]/50 min-w-[260px] w-full mx-auto text-[#f8faf5] transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-5xl font-bold mb-2">Elite</h2>
          <div className="text-5xl font-extrabold mb-3">$299</div>
          <div className=" text-3xl mb-5">/year</div>
          <ul className="list-disc list-inside  text-xl mb-5 space-y-1 text-left ">
            <li>All PREMIUM features</li>
            <li>Real vs. projected tracking inputs</li>
            <li>Staff training planner</li>
            <li>Entertainment/event inputs</li>
            <li>Exit strategy + sell toolkit</li>
            <li>Custom branding on reports</li>
            <li>Consultation request form</li>
            <li>Save/manage up to 10 concepts</li>
            <li>Priority support</li>
          </ul>
          <button className=" text-2xl font-bold rounded px-5 py-2 mt-auto shadow  transition border-2 border-[#0c1425] ">
            LEARN MORE
          </button>
          {/* text-[#b23b2a] hover:bg-[#f8faf5] bg-white*/}
        </div>
      </div>
      {/* Profile */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Elvis Restaino"
          className="w-70 h-70 rounded-full object-cover grayscale border-4 border-[#e3f4fa]"
        />
        <div className="text-center md:text-left">
          <div className="text-[#183a4d] text-6xl font-bold">
            Elvis Restaino
          </div>
          <div className="text-[#183a4d]/80 text-4xl font-bold">
            Award-winning designer,
            <br />
            30+ years experience
          </div>
        </div>
      </div>
      {/* Login link */}
      <div className="text-center text-[#183a4d] text-4xl font-bold mb-2">
        Already a member?{" "}
        <a
          href="#"
          className=" text-5xl underline font-bold hover:text-[#b23b2a]"
        >
          Log in
        </a>
      </div>
    </div>
  );
}
