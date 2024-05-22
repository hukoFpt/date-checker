"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  function clearFields() {
    setDay("");
    setMonth("");
    setYear("");
  }

  function DayIsMonth (day: number, month: number) => {
    return day === month;
  };

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <>
      <div className="text-2xl text-center font-bold pt-10">
        Date Time Checker
      </div>
      <div className="flex flex-col justify-center w-1/6 mx-auto">
        <div className="flex gap-2 pt-2 justify-between">
          <label htmlFor="day">Day: </label>
          <input
            className="border-2 border-neutral-400 rounded-lg w-2/3 px-2 "
            type="number"
            id="day"
            name="day"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="flex gap-2 pt-2 justify-between">
          <label htmlFor="month">Month: </label>
          <input
            className="border-2 border-neutral-400 rounded-lg w-2/3 px-2"
            type="number"
            id="month"
            name="month"
            min="1"
            max="12"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div className="flex gap-2 pt-2 justify-between">
          <label htmlFor="year">Year: </label>
          <input
            className="border-2 border-neutral-400 rounded-lg w-2/3 px-2"
            type="number"
            id="year"
            name="year"
            min="1"
            max="9999"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-5 pt-2">
          <button
            className="bg-neutral-600 text-white px-2 w-[100px] rounded-lg"
            onClick={clearFields}
          >
            Clear
          </button>
          <button className="bg-neutral-600 text-white px-2 w-[100px] rounded-lg">
            Check
          </button>
        </div>
        <div className="pt-16">
          <div>
            <div>Message: </div>
            <div>This is message box</div>
          </div>
          <div>
            <div>Error: </div>
            <div>This is error box</div>
          </div>
        </div>
      </div>
    </>
  );
}
