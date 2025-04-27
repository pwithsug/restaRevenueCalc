"use client"; // if using Next.js app directory

import { useRouter } from "next/navigation"; // if Next.js 13+ app dir
import { useState } from "react";

const Free = () => {
  const router = useRouter();
  const [startupCost, setStartupCost] = useState("");
  const [diningRoomSeats, setDiningRoomSeats] = useState("");
  const [barSeats, setBarSeats] = useState("");
  const [avDPrice, setAvDPrice] = useState("");
  const [avMPrice, setAvMPrice] = useState("");
  const [daysOpen, setDaysOpen] = useState("");
  const [profitMargin, setProfitMargin] = useState("");

  const changeStartupCost = (e) => {
    let input = e.target.value.replace(/$/g, "");    
    input = input.replace(/[^\d]/g, "");

    setStartupCost(input);
  };
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

  const guestsPerDay = () => {
    return parseFloat(diningRoomSeats).toFixed(2);
  };
  const dailyrevenue = () => {
    return (guestsPerDay() * (parseInt(avMPrice) + parseInt(avDPrice))).toFixed(2);
  };
  const annualRevenue = () => {
    return (dailyrevenue() * parseInt(daysOpen)).toFixed(2);
  };
  const profitEstimate = () => {
    return (annualRevenue() * (parseInt(profitMargin) / 100)).toFixed(2);
  };
  const breakEven = () => {
    return profitEstimate() !== NaN && (startupCost / profitEstimate()).toFixed(2);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b9e5ff] ">
      <div className="w-full 2xl:max-w-xl: xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-sm bg-transparent">
        {/* Title */}
        <h1 className="xl:text-4xl lg:text-4xl sm:text-3xl xl:py-20 sm:py-10 font-extrabold text-center text-dark mb-4 leading-tight">
        Free Trial – Projection Calculator
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-5 2xl:text-3xl lg:text-2xl sm:text-xl">
        <div className="flex justify-between items-center ">
            <label className="font-semibold text-dark ">
              StartUp Cost
            </label>
            <input
              type="text"
              value={startupCost? `$${startupCost}` : ""}
              placeholder="$10000"
              onChange={changeStartupCost}
              className="lg:w-40 sm:w-30 border-2 border-dark bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center ">
            <label className="font-semibold text-dark ">
              Dining Room Seats
            </label>
            <input
              type="text"
              value={diningRoomSeats}
              placeholder="10"
              onChange={changeDiningRoomSeats}
              className="lg:w-40 sm:w-30 border-2 border-dark bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-dark">
              Bar Seats <span className="text-2xl font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={barSeats}
              onChange={changeBarSeats}
              className="lg:w-40 sm:w-30 border-2 border-[#0d1b2a] bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-dark">
              Average Meal Price
            </label>
            <input
              type="text"
              placeholder="$5"
              value={avMPrice ? `$${avMPrice}` : ""}
              onChange={changeAvMPrice}
              className="lg:w-40 sm:w-30 border-2 border-[#0d1b2a] bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-dark">
              Average Drink Price
            </label>
            <input
              type="text"
              placeholder="$5"
              value={avDPrice ? `$${avDPrice}` : ""}
              onChange={changeAvDPrice}
              className="lg:w-40 sm:w-30 border-2 border-[#0d1b2a] bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-dark">Days Open</label>
            <input
              type="text"
              placeholder="5"
              value={daysOpen}
              onChange={changeDaysOpen}
              className="lg:w-40 sm:w-30 border-2 border-[#0d1b2a] bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="font-semibold text-dark">
              Profit Margin
            </label>
            <input
              type="text"
              placeholder="18%"
              value={profitMargin ? `${profitMargin}%` : ""}
              onChange={changeProfitMargin}
              className="lg:w-40 sm:w-30 border-2 border-[#0d1b2a] bg-white text-dark font-bold rounded-md text-center py-1
              focus:outline-none"
            />
          </div>

          {/* Button */}
          {/* <button
            type="button"
            onClick={() => router.push("/results")}
            className="bg-[#e91e63] hover:bg-[#d81b60] text-white text-lg font-bold py-3 rounded-lg mt-6 transition"
          >
            SEE MY RESULTS
          </button> */}
          <div className="bg-[#f9f9f9] p-5 mt-5 rounded text-dark shadow-md">
            <h2 className="text-2xl font-bold mb-5">Projection Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-xl">
                <span>Annual Revenue:</span>
                <span className="font-semibold">{annualRevenue()!="NaN" ? `$${annualRevenue()}` : '$0'}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Annual Profit:</span>
                <span className="font-semibold">{profitEstimate()!="NaN" ? `$${profitEstimate()}`:'$0'}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Break-Even Year:</span>
                <span className="font-semibold">{breakEven()!="NaN" ? `${breakEven()}%`:'0%'}</span>
              </div>
            </div>
          </div>

          {/* Link */}
          <div className="text-center text-2xl text-dark mt-4">
            Want more options?{" "}
            <a href="/basic" className="underline font-semibold">
              Unlock Basic.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Free;
