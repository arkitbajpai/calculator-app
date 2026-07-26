import { useState } from "react";

const OPERATIONS = {
  "÷": (a, b) => a / b,
  "×": (a, b) => a * b,
  "−": (a, b) => a - b,
  "+": (a, b) => a + b,
};

function formatNumber(value) {
  const num = parseFloat(value);
  if (!isFinite(num)) return "Error";

  const rounded = Math.round(num * 1e10) / 1e10;
  const str = rounded.toString();

  if (str.replace("-", "").replace(".", "").length > 12) {
    return num.toPrecision(10).replace(/\.?0+$/, "").replace(/\.?0+e/, "e");
  }
  return str;
}

/**
 * Encapsulates all calculator state and behavior.
 * UI components stay presentational and just call these handlers.
 */
export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [activeOp, setActiveOp] = useState(null);

  const inputDigit = (digit) => {
    if (display === "Error") {
      setDisplay(String(digit));
      setWaitingForOperand(false);
      return;
    }
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (display === "Error" || waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearAll = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setActiveOp(null);
  };

  const toggleSign = () => {
    if (display === "Error" || display === "0") return;
    setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);
  };

  const inputPercent = () => {
    if (display === "Error") return;
    const value = parseFloat(display);
    setDisplay(formatNumber(String(value / 100)));
  };

  const performOperation = (nextOperator) => {
    if (display === "Error") return;
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator && !waitingForOperand) {
      const result = OPERATIONS[operator](previousValue, inputValue);
      const formatted = formatNumber(String(result));
      setPreviousValue(formatted === "Error" ? null : parseFloat(formatted));
      setDisplay(formatted);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
    setActiveOp(nextOperator);
  };

  const handleEquals = () => {
    if (display === "Error" || operator === null || previousValue === null) return;
    const inputValue = parseFloat(display);
    const result = OPERATIONS[operator](previousValue, inputValue);
    const formatted = formatNumber(String(result));
    setDisplay(formatted);
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
    setActiveOp(null);
  };

  return {
    display,
    activeOp,
    inputDigit,
    inputDecimal,
    clearAll,
    toggleSign,
    inputPercent,
    performOperation,
    handleEquals,
  };
}
