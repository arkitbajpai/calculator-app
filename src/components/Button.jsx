import React from "react";

export default function Button({ children, onClick, variant = "number", active = false, wide = false }) {
  const classes = [
    "calc-btn",
    `calc-btn--${variant}`,
    active ? "calc-btn--active" : "",
    wide ? "calc-btn--wide" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
