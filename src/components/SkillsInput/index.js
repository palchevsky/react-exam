import React, { Component } from "react";
import Input from "../Input";
import "./style.css";
import Button from "../Button";

class SkillsInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.props);
    const {
      section,
      use,
      heading,
      intro,
      inputProps,
      valuesState,
      validState,
      onChangeHandler,
      onAddLineHandler,
      onDeleteLineHandler,
      inputs = [],
      valid
    } = this.props;

    const Inputs = lineIndex =>
      inputProps.map((inputProp, index) => (
        <Input
          inputProp={inputProp}
          section={section}
          index={index}
          key={index}
          option={inputProp.option}
          value={valuesState[lineIndex][inputProp.option]}
          onChangeHandler={e => onChangeHandler(e, lineIndex, inputProp.option)}
          valid={validState[lineIndex][inputProp.option]}
        />
      ));

    const SkillsLine = valuesState.map((skill, index) => (
      <div className="skillsLine" key={index}>
        {Inputs(index)}
        <Button
          buttonText="delete"
          clickHandler={onDeleteLineHandler}
          section="form"
        />
      </div>
    ));

    return (
      <section className="skills-section">
        <h2 className={`${section}__heading`}>{heading}</h2>
        <p className={`${section}__intro`}>{intro}</p>
        {SkillsLine}
        <Button buttonText="+" clickHandler={onAddLineHandler} section="form" />
      </section>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onToggleModal, inputs, use } = this.props;
    this.submit();
    onToggleModal(use);
  }

  submit() {
    const { inputs } = this.props;
    console.log("forminputs", inputs);
  }
}

export default SkillsInput;
/*
state вынести в App.js
и обработчики вынести в App.js
и присваивать уже из App.js
*/
