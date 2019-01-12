import React, { Component } from "react";
import Input from "../Input";
import "./style.css";
import Button from "../Button";

class SkillsInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.onChangeHandler = this.onChangeHandler.bind(this);
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
      onDeleteLineHandler,
      onAddLineHandler,
      onChangeHandler
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
          onChangeHandler={onChangeHandler}
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
      <section className="modal-section">
        <h2 className={`${section}__heading`}>{heading}</h2>
        <p className={`${section}__intro`}>{intro}</p>
        {SkillsLine}
        <Button
          buttonText="+"
          clickHandler={onAddLineHandler}
          section="form"
        />
        {/* <Button
          buttonText="закрыть"
          clickHandler={() => onToggleModal(use)}
          section="form"
        /> */}
        {/* <form
          className={`${section}__form form ${valid ? "disabled" : ""}`}
          onSubmit={e => this.handleSubmit(e)}
        >
          {Inputs}
        </form> */}
      </section>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onToggleModal, inputs, use } = this.props;
    this.submit();
    onToggleModal(use);
  }

  // onChangeHandler = (event, index, option) => {
  //   let valuesState = this.props.valuesState;
  //   let validState = this.props.validState;
  //   console.log("----->>>>", option, valuesState);
  //   valuesState[index][option] = event.target.value;
  //   validState[index][option] = event.target.value !== "" ? true : false;

  //   this.setState({ valuesState, validState });
  // };

  // onAddLineHandler = () => {
  //   this.setState({
  //     valuesState: [
  //       ...this.props.valuesState,
  //       { skill: "", level: "", years: 0 }
  //     ],
  //     validState: [
  //       ...this.props.validState,
  //       { skill: false, level: false, years: false }
  //     ]
  //   });
  // };

  // onDeleteLineHandler = index => {
  //   let valuesState = this.props.valuesState;
  //   let validState = this.props.validState;
  //   valuesState.splice(index, 1);
  //   validState.splice(index, 1);
  //   this.setState({
  //     valuesState: valuesState,
  //     validState: validState
  //   });
  // };

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
