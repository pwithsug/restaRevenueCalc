"use client"; // if using Next.js app directory

import { useRouter } from "next/navigation"; // if Next.js 13+ app dir
import { useState } from "react";

const Free = () => {
  const router = useRouter();
  const [diningRoomSeats, setDiningRoomSeats] = useState("");
  const [barSeats, setBarSeats] = useState("");
  const [avDPrice, setAvDPrice] = useState("");
  const [avMPrice, setAvMPrice] = useState("");
  const [daysOpen, setDaysOpen] = useState("");
  const [profitMargin, setProfitMargin] = useState("");

  const changeAvDPrice = (e) => {
    let input = e.target.value.replace(/$/g, "");    
    input = input.replace(/[^\d]/g, "");

    setAvDPrice(input);
  };
  const changeAvMPrice = (e) => {
    let input = e.target.value.replace(/$/g, "");
    input = input.replace(/[^\d]/g, "");

    setAvMPrice(input);
  };
  const changeBarSeats = (e) => {
    let input = e.target.value;
    setBarSeats(input);
  };
  const changeDaysOpen = (e) => {
    let input = e.target.value;
    setDaysOpen(input);
  };
  const changeProfitMargin = (e) => {
    let input = e.target.value.replace(/%/g, "");
    // Remove non-numeric characters
    input = input.replace(/[^\d]/g, "");
    
    setProfitMargin(input);
  };
  const changeDiningRoomSeats = (e) => {
    let input = e.target.value;

    setDiningRoomSeats(input);
  };

//   1. Guests per Day
//  Total Seats × Average Turnover (default 2.5)
//  2. Daily Revenue
//  Guests per Day × (Meal Price + Drink Price)
//  3. Annual Revenue
//  Daily Revenue × Days Open
//  4. Profit Estimate
//  Annual Revenue × Net Margin (default 18%)
//  5. Break-Even (shown in paid tiers)
//  Startup Cost ÷ Annual Profit
  const guestsPerDay = () => {
    return parseInt(diningRoomSeats) * 2.5;
  };
  const dailyrevenue = () => {
    return guestsPerDay() * (parseInt(avMPrice) + parseInt(avDPrice));
  };
  const annualRevenue = () => {
    return dailyrevenue() * parseInt(daysOpen);
  };
  const profitEstimate = () => {
    return annualRevenue() * (parseInt(profitMargin) / 100);
  };
  const breakEven = () => {
    return profitEstimate() !== NaN && 1 / profitEstimate();
  };

  return (
    <div className="min-h-screen min-w-[600px] flex items-center justify-center bg-[#b9e5ff] ">
      <div className="w-full max-w-lg bg-transparent">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-[#0d1b2a] mb-4 leading-tight">
          LET’S START <br /> WITH THE BASIC.
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-5 text-3xl">
          <div className="flex justify-between items-center ">
            <label className="font-semibold text-[#0d1b2a] ">
              Dining Room Seats
            </label>
            <input
              type="text"
              value={diningRoomSeats}
              onChange={changeDiningRoomSeats}
              className="w-40 border-2 border-[#0d1b2a] bg-white text-[#0d1b2a] font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-[#0d1b2a]">
              Bar Seats <span className="text-2xl font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={barSeats}
              onChange={changeBarSeats}
              className="w-40 border-2 border-[#0d1b2a] bg-white text-[#0d1b2a] font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-[#0d1b2a]">
              Average Meal Price
            </label>
            <input
              type="text"
              value={avMPrice ? `$${avMPrice}` : ""}
              onChange={changeAvMPrice}
              className="w-40 border-2 border-[#0d1b2a] bg-white text-[#0d1b2a] font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-[#0d1b2a]">
              Average Drink Price
            </label>
            <input
              type="text"
              value={avDPrice ? `$${avDPrice}` : ""}
              onChange={changeAvDPrice}
              className="w-40 border-2 border-[#0d1b2a] bg-white text-[#0d1b2a] font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-[#0d1b2a]">Days Open</label>
            <input
              type="text"
              value={daysOpen}
              onChange={changeDaysOpen}
              className="w-40 border-2 border-[#0d1b2a] bg-white text-[#0d1b2a] font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-[#0d1b2a]">
              Profit Margin
            </label>
            <input
              type="text"
              value={profitMargin ? `${profitMargin}%` : ""}
              onChange={changeProfitMargin}
              className="w-40 border-2 border-[#0d1b2a] bg-white text-[#0d1b2a] font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={() => router.push("/results")}
            className="bg-[#e91e63] hover:bg-[#d81b60] text-white text-lg font-bold py-3 rounded-lg mt-6 transition"
          >
            SEE MY RESULTS
          </button>
          <div className="bg-[#f9f9f9] p-5 mt-5 rounded text-[#0d1b2a] shadow-md">
            <h2 className="text-2xl font-bold mb-5">Projection Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-xl">
                <span>Annual Revenue:</span>
                <span className="font-semibold">{annualRevenue()? `$ ${annualRevenue()}` : ''}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Annual Profit:</span>
                <span className="font-semibold">{profitEstimate() ? `$${profitEstimate()}`:''}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Break-Even Year:</span>
                <span className="font-semibold">{breakEven() ? `$${breakEven()}`:''}</span>
              </div>
            </div>
          </div>

          {/* Link */}
          <div className="text-center text-2xl text-[#0d1b2a] mt-4">
            Want more options?{" "}
            <a href="#" className="underline font-semibold">
              Unlock Premium.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Free;
