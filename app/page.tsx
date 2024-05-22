"use client";

import React, { useState } from "react";

export default function Home() {
  function clearFields() {
    setDay("");
    setMonth("");
    setYear("");
  }

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  function DaysInMonth(month: number, year: number): number {
    let daysInMonth = 0;
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      daysInMonth = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      daysInMonth = 30;
    } else if (month === 2) {
      if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
      } else {
        daysInMonth = 28;
      }
    } else {
      daysInMonth = 0;
    }
    return daysInMonth;
  }

  function IsValidDate(year: number, month: number, day: number): boolean {
    const daysInMonth = DaysInMonth(month, year);
    console.log(daysInMonth);
    if (month >= 1 && month <= 12) {
      if (day >= 1) {
        if (day <= daysInMonth) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const checkDate = () => {
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(day)) {
      alert("Input data for Day is inccorect format");
      return;
    } else if (parseInt(day) < 1 || parseInt(day) > 31) {
      alert("Input data for Day is out of range");
      return;
    }
    if (!numberRegex.test(month)) {
      alert("Input data for Month is incorrect format");
      return;
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      alert("Input data for Month is out of range");
      return;
    }
    if (!numberRegex.test(year)) {
      alert("Input data for Year is incorrect format");
      return;
    } else if (parseInt(year) < 1 || parseInt(year) > 9999) {
      alert("Input data for Year is out of range");
      return;
    }
    if (IsValidDate(parseInt(year), parseInt(month), parseInt(day))) {
      alert(`${day}/${month}/${year} is a valid date`);
    } else {
      alert(`${day}/${month}/${year} is NOT a valid date`);
    }
  };

  return (
    <>
      <div className="text-2xl text-center font-bold pt-48">
        Date Time Checker
      </div>
      <div className="flex flex-col justify-center w-1/6 mx-auto">
        <div className="flex gap-2 pt-2 justify-between">
          <label htmlFor="day">Day: </label>
          <input
            className="border-2 border-neutral-400 rounded-lg w-2/3 px-2 "
            type="text"
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
            type="text"
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
            type="text"
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
          <button
            className="bg-neutral-600 text-white px-2 w-[100px] rounded-lg"
            onClick={checkDate}
          >
            Check
          </button>
        </div>
      </div>
    </>
  );
}
