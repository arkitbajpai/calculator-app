import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import { useCalculator } from "../hooks/useCalculator";
import "./calculator.css";

export default function Calculator() {
  const calc = useCalculator();

  return (
    <div className="calc-wrapper">
      <div className="calc">
        <Display value={calc.display} />
        <Keypad {...calc} />
      </div>
    </div>
  );
}
