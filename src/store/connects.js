import { connect } from "react-redux";

import {
  toggleElement,
  slideChange,
  slideNext,
  slidePrev,
  inputChange,
  formSend,
  addSlideAction,
  addSlideSubmitAction,
  deleteSlideAction
} from "./actions";

import Header from "../components/Header";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Content from "../components/Content";
import App from "../App";

export const AppConnect = connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    onToggleModal(elem) {
      dispatch(toggleElement(elem));
    }
  })
)(App);

export const ContentConnect = connect(
  state => ({
    content: [...state.content]
  }),
  dispatch => ({
    onSlideNext(id, current) {
      dispatch(slideNext(id, current));
    },

    onSlidePrev(id, index) {
      dispatch(slidePrev(id, index));
    },

    onSlideChange(id, current) {
      dispatch(slideChange(id, current));
    }
  })
)(Content);

export const FormConnect = connect(
  state => ({
    ...state.form
  }),
  dispatch => ({
    onInputChange(index, val, valid) {
      dispatch(inputChange(index, val, valid));
    },
    onFormSend(val, index) {
      dispatch(formSend(val, index));
    },
    onToggleModal(elem) {
      dispatch(toggleElement(elem));
    },
    onAddSlideSubmit(id, path, title, intro, product, statement) {
      dispatch(
        addSlideSubmitAction(id, path, title, intro, product, statement)
      );
    }
  })
)(Form);

export const AddSlideFormConnect = connect(
  state => ({
    ...state.slideForm
  }),
  dispatch => ({
    onInputChange(index, val, valid) {
      dispatch(inputChange(index, val, valid));
    },
    onFormSend(val, index) {
      dispatch(formSend(val, index));
    },
    onToggleModal(elem) {
      dispatch(toggleElement(elem));
    },
    onAddSlideSubmit(id, path, title, intro, product, statement) {
      dispatch(
        addSlideSubmitAction(id, path, title, intro, product, statement)
      );
    }
  })
)(Form);

export const ModalConnect = connect(
  state => ({
    ...state.modal
  }),
  dispatch => ({
    onToggleModal(elem) {
      dispatch(toggleElement(elem));
    }
  })
)(Modal);

export const HeaderConnect = connect(
  state => ({
    ...state.header,
    content: state.content
  }),
  dispatch => ({
    onToggleModal(elem) {
      dispatch(toggleElement(elem));
    },
    onAddSlide(id) {
      dispatch(addSlideAction(id));
    },
    onDeleteSlide(id) {
      dispatch(deleteSlideAction(id));
    }
  })
)(Header);
