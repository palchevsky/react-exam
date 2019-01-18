import React, { Component } from "react";
import styles from "./App.css";
import SkillsInput from "./components/SkillsInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valuesState: [
        { skill: "", level: "", years: 0 },
        { skill: "", level: "", years: 0 }
      ],
      validState: [
        { skill: false, level: false, years: false },
        { skill: false, level: false, years: false }
      ]
    };
  }

  render() {
    const inputProps = [
      {
        value: "",
        item: "Ваш телефон",
        name: "customerPhone",
        label: true,
        required: "required",
        type: "text",
        hidden: false,
        valid: true,
        option: "skill"
      },
      {
        value: "",
        item: "Введите имя",
        name: "customerName",
        label: true,
        required: "required",
        type: "text",
        hidden: false,
        valid: true,
        option: "level"
      },
      {
        value: "",
        item: "Ваш Email",
        name: "customerEmail",
        label: true,
        required: "required",
        type: "text",
        hidden: false,
        valid: true,
        option: "years"
      }
    ];

    return (
      <React.Fragment>
        <SkillsInput
          inputProps={inputProps}
          onAddLineHandler={this.onAddLineHandler}
          onDeleteLineHandler={this.onDeleteLineHandler}
          onChangeHandler={this.onChangeHandler}
          {...this.state}
        />
      </React.Fragment>
    );
  }

  onChangeHandler = (event, index, option) => {
    let valuesState = this.state.valuesState;
    let validState = this.state.validState;
    // console.log("----->>>>", option, valuesState);
    valuesState[index][option] = event.target.value;
    validState[index][option] = event.target.value !== "" ? true : false;

    this.setState({ valuesState, validState });
  };

  onAddLineHandler = () => {
    this.setState({
      valuesState: [
        ...this.state.valuesState,
        { skill: "", level: "", years: 0 }
      ],
      validState: [
        ...this.state.validState,
        { skill: false, level: false, years: false }
      ]
    });
  };

  onDeleteLineHandler = index => {
    let valuesState = this.state.valuesState;
    let validState = this.state.validState;
    valuesState.splice(index, 1);
    validState.splice(index, 1);
    this.setState({
      valuesState: valuesState,
      validState: validState
    });
  };
}

export default App;
