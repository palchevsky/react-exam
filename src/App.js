import React, { Component } from "react";
//import CSSModules from 'react-css-modules';
//import  { BrowserRouter, Route, Switch } from 'react-router-dom';
//import 'normalize.css';
import styles from "./App.css";
//import data from './data'
// import {
//   FormConnect,
//   HeaderConnect,
//   ContentConnect,
//   ModalConnect
// } from "./store/connects";
import SkillsInput from "./components/SkillsInput";
// import Content from './components/Content';
// import Form from './components/Form';
// import Modal from './components/Modal';

//const FourOhFour = () => <h1>404</h1>;
// const {modal, header, form, namebox, content, contacts, consultation, mapPoints, bottomForm, footer} = data;

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
        <SkillsInput inputProps={inputProps} onChangeHandler={this.onChangeHandler} {...this.state}/>
        {/* <HeaderConnect />
                <ContentConnect/>
                {newForm}
                {newModal} */}
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
