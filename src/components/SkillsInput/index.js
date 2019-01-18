import React, { Component } from "react";
import Input from "../Input";
import "./style.css";
import Button from "../Button";

class SkillsInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDeleteLineHandler = props.onDeleteLineHandler;
    this.onAddLineHandler = props.onAddLineHandler;
    this.onChangeHandler = props.onChangeHandler;
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
      inputs = [],
      valid,
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
          onChangeHandler={this.onChangeHandler}
          valid={validState[lineIndex][inputProp.option]}
        />
      ));

    const SkillsLine = valuesState.map((skill, index) => (
      <div className="skillsLine" key={index}>
        {Inputs(index)}
        <Button
          buttonText="delete"
          clickHandler={this.onDeleteLineHandler}
          section="form"
        />
      </div>
    ));

    return (
      <section className="modal-section">
        <h2 className={`${section}__heading`}>{heading}</h2>
        <p className={`${section}__intro`}>{intro}</p>
        {SkillsLine}
        <Button
          buttonText="+"
          clickHandler={this.onAddLineHandler}
          section="form"
        />
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
