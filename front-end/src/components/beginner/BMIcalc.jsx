"use client";
import { useState } from "react";

export default function Beginner() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  function bmi(a, b) {
    const calc = a / (b * b);
    let status = "";

    if (18.4 >= calc) {
      status = "underweight";
    } else if (18.4 <= calc && calc <= 24.9) {
      status = "normal";
    } else if (24.9 <= calc && calc <= 39.9) {
      status = "overweight";
    } else {
      status = "obese";
    }
    setResult(` BMI: ${calc.toFixed(1)} - ${status}`);
  }

  const handleClick = () => {
    if (!weight || !height) {
      alert("please enter both weight and height");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    bmi(w, h);
  };

  return (
    <div>
      BMI calculator
      <div className="flex flex-col gap-3 items-start">
        <input
          type="number"
          placeholder="weight (kg)"
          className="bg-amber-50 w-[100px]"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="height (meters)"
          className="bg-amber-50 w-[100px]"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button className="bg-amber-50 p-1 rounded-2xl" onClick={handleClick}>
          calculate
        </button>
        <p>{result}</p>
      </div>
    </div>
  );
}
