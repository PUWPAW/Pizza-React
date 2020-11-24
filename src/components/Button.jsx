import React from "react";
import classNames from "classnames";

function Button(props) {
  const btnClasses = classNames("button", {
    "button--cart": props.type === "cart",
    "button--add": props.type === "add",
    "button--outline": props.outline,
  });

  return <button className={btnClasses}>{props.children}</button>;
}

export default Button;
