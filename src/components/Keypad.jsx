import React from "react";
import Button from "./Button";

export default function Keypad({
  activeOp,
  inputDigit,
  inputDecimal,
  clearAll,
  toggleSign,
  inputPercent,
  performOperation,
  handleEquals,
}) {
  return (
    <div className="calc-keypad">
      <Button variant="function" onClick={clearAll}>C</Button>
      <Button variant="function" onClick={toggleSign}>+/-</Button>
      <Button variant="function" onClick={inputPercent}>%</Button>
      <Button variant="operator" active={activeOp === "÷"} onClick={() => performOperation("÷")}>÷</Button>

      <Button onClick={() => inputDigit(7)}>7</Button>
      <Button onClick={() => inputDigit(8)}>8</Button>
      <Button onClick={() => inputDigit(9)}>9</Button>
      <Button variant="operator" active={activeOp === "×"} onClick={() => performOperation("×")}>×</Button>

      <Button onClick={() => inputDigit(4)}>4</Button>
      <Button onClick={() => inputDigit(5)}>5</Button>
      <Button onClick={() => inputDigit(6)}>6</Button>
      <Button variant="operator" active={activeOp === "−"} onClick={() => performOperation("−")}>−</Button>

      <Button onClick={() => inputDigit(1)}>1</Button>
      <Button onClick={() => inputDigit(2)}>2</Button>
      <Button onClick={() => inputDigit(3)}>3</Button>
      <Button variant="operator" active={activeOp === "+"} onClick={() => performOperation("+")}>+</Button>

      <Button wide onClick={() => inputDigit(0)}>0</Button>
      <Button onClick={inputDecimal}>.</Button>
      <Button variant="operator" onClick={handleEquals}>=</Button>
    </div>
  );
}
