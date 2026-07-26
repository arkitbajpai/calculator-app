import React from "react";

export default function Display({ value }) {
  const isLong = value.length > 8;

  return (
    <div className="calc-display">
      <span
        className="calc-display__value"
        style={{ fontSize: isLong ? "1.9rem" : "2.75rem" }}
      >
        {value}
      </span>
    </div>
  );
}
