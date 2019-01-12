import React from "react";
import "./style.css";
import Button from "../Button";
//import DeskMenu from '../DeskMenu'

export default function Header({
  onAddSlide,
  onDeleteSlide,
  content = [],
  onToggleModal,
  logoBottom = "",
  logoTop = "",
  buttonText = "",
  heading = "",
  price = ""
}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__desktop-nav-wrapper">
          <div className="logo__wrapper">
            <div className="logo__top">{logoTop}</div>
            <div className="logo__bottom">{logoBottom}</div>
          </div>
          {/* <DeskMenu  content={content} section="main"/> */}
        </div>

        <h1 className="header__heading">{heading}</h1>
        <p className="header__offer>">{price}</p>

        <Button
          buttonText={buttonText}
          clickHandler={() => onToggleModal("modal")}
          section="header"
        />
        <Button
          buttonText="отправить заявку"
          clickHandler={() => onToggleModal("form")}
          section="form"
        />
        <Button
          buttonText="Удалить слайд"
          clickHandler={() => onDeleteSlide("1")}
          section="form"
        />
      </div>
    </header>
  );
}
