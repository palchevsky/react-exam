import C from "./constants";

export const toggleElement = elem => ({
  type: C.TOGGLE_ELEMENT,
  elem
});

export const slideChange = (id, index) => ({
  type: C.SLIDE_CHANGE,
  id,
  index
});

export const slideNext = (id, current) => ({
  type: C.SLIDE_NEXT,
  id,
  current
});

export const slidePrev = (id, current) => ({
  type: C.SLIDE_PREV,
  id,
  current
});

export const inputChange = (index, value, valid) => ({
  type: C.INPUT_CHANGE,
  index,
  value,
  valid
});

export const formSend = (index, value) => ({
  type: C.FORM_SEND,
  index,
  value
});

export const addSlideAction = id => ({
  type: C.ADD_SLIDE,
  id
});

export const deleteSlideAction = id => ({
  type: C.DELETE_SLIDE,
  id
});

export const addSlideSubmitAction = (
  id,
  path,
  title,
  intro,
  product,
  statement
) => ({
  type: C.ADD_SLIDE_SUBMIT,
  id,
  path,
  title,
  intro,
  product,
  statement
});
