import React, { Component } from "react";
import Input from "../Input";
import "./style.css";
import Button from "../Button";

class Form extends Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  render() {
    console.log(this.props);
    const {
      section,
      use,
      heading,
      intro,
      inputs = [],
      valid,
      onToggleModal
    } = this.props;

    const Inputs = inputs.map((inputProp, index) =>
      inputProp.type == "submit" ? (
        <Button
          buttonText={inputProp.value}
          section={section} disabled={!valid}
          clickHandler={e => this.handleSubmit(e)}
        />
      ) : (
        <Input
          inputProp={inputProp}
          section={section}
          index={index}
          key={index}
          onChangeHandler={this.handleInputChange}
        />
      )
    );

    return (
      <section className="modal-section">
        <h2 className={`${section}__heading`}>{heading}</h2>
        <p className={`${section}__intro`}>{intro}</p>
        <Button
          buttonText="закрыть"
          clickHandler={() => onToggleModal(use)}
          section="form"
        />
        <form
          className={`${section}__form form ${valid ? "disabled" : ""}`}
          onSubmit={e => this.handleSubmit(e)}
        >
          {Inputs}
        </form>
      </section>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onToggleModal, onAddSlideSubmit, inputs, use } = this.props;

    if (use == "modal") {
      onAddSlideSubmit(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
        inputs[4].value,
        inputs[5].value
      );
    } else {
      this.submit();
    }

    onToggleModal(use);
    //_title.focus()
  }

  handleInputChange(e, index) {
    const { onInputChange } = this.props;
    let value = e.target.value;
    let valid;
    switch (e.target.type) {
      case "email":
        valid = !!value.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%_\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        );
        break;
      case "textarea":
        valid = !!value.match(/^[0-9+\(\)#\.\s\/ext-]+$/g);
        break;
      case "text":
        valid = !!value.match(/([a-zA-Z]*)/g);
        break;
      case "tel":
        valid = !!value.match(/^[0-9+\(\)#\.\s\/ext-]+$/g);
        break;
      default:
        break;
    }

    onInputChange(index, value, valid);
    // inputs.every((input) => input.valid ) ? onFormDisabled(true) : onFormDisabled(false)
  }

  clearInput(index) {
    this.props.onInputChange(index, "", false);
  }

  submit() {
    const { inputs } = this.props;
    console.log("forminputs", inputs);
  }
}

export default Form;
