import React from "react";
import "./style.css";

export default function Button({
  buttonText,
  clickHandler,
  section,
  disabled
}) {
  //const {text, clicker, section} = props;

  //console.log("Параметры", props);

  return (
    <button
      className={`button ${section}__button${disabled === true ? " disabled" : ""}`}
      onClick={clickHandler}
    >
      {buttonText}
    </button>
  );
}
