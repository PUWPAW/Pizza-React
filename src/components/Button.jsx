import React from "react";
import classNames from "classnames";

function Button({ type, outline, onClick, children }) {
  const btnClasses = classNames("button", {
    "button--cart": type === "cart",
    "button--add": type === "add",
    "button--outline": outline,
  });

  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
