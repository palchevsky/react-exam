import C from "./constants";

// export const rootReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//       default:
//       return state
//   }
// }

export const app = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_ELEMENT:
      if (action.elem === "form") {
        return {
          ...state,
          formOpen: !state.formOpen
        };
      }
      return { ...state, modalOpen: !state.modalOpen };

    default:
      return state;
  }
};

export const formSend = (state = {}, action) => {
  switch (action.type) {
    case C.FORM_SEND:
      return {
        ...state,
        valid: !state.valid
      };
    default:
      return state;
  }
};

export const deleteSlide = (state = {}, action) => {
  switch (action.type) {
    case C.DELETE_SLIDE:
      return state.id !== action.id
        ? state
        : {
            ...state,
            slides: state.slides.filter(
              slide => slide.index < state.slides.length - 1
            )
          };

    default:
      return state;
  }
};

export const slideNext = (state = {}, action) => {
  switch (action.type) {
    case C.SLIDE_NEXT:
      return state.id !== action.id
        ? state
        : {
            ...state,
            current:
              action.current == state.slides.length - 1 ? 0 : action.current + 1
          };
    default:
      return state;
  }
};

export const slidePrev = (state = {}, action) => {
  switch (action.type) {
    case C.SLIDE_PREV:
      return state.id !== action.id
        ? state
        : {
            ...state,
            current:
              action.current == 0 ? state.slides.length - 1 : action.current - 1
          };
    default:
      return state;
  }
};

export const slideChange = (state = {}, action) => {
  switch (action.type) {
    case C.SLIDE_CHANGE:
      return state.id !== action.id
        ? state
        : {
            ...state,
            current: action.index
          };
    default:
      return state;
  }
};

export const addSlide = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_SLIDE:
      return state.id !== action.id
        ? state
        : {
            ...state,
            slides: [
              ...state.slides,
              {
                path: "slides1/slider17.jpg",
                title: "new",
                index: state.slides.length,
                intro: "New resumer",
                type: "new brand",
                statement: "new description"
              }
            ]
          };
    default:
      return state;
  }
};

export const slideFormAdd = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_SLIDE_SUBMIT:
      return state.id != action.id
        ? state
        : {
            ...state,
            slides: [
              ...state.slides,
              {
                path: action.path,
                title: action.title,
                index: state.slides.length,
                intro: action.intro,
                type: action.product,
                statement: action.statement
              }
            ]
          };
    default:
      return state;
  }
};

export const slideForm = (state = {}, action) => {
  switch (action.type) {
    case C.INPUT_CHANGE:
      return {
        ...state,
        inputs: state.inputs.map(i => inputChange(i, action))
        // valid: state.inputs.every(i => i.valid == true)
      };

    default:
      return { ...state };
  }
};

export const content = (state = [], action) => {
  switch (action.type) {
    case C.SLIDE_NEXT:
      return state.map(c => slideNext(c, action));
    case C.SLIDE_CHANGE:
      return state.map(c => slideChange(c, action));
    case C.SLIDE_PREV:
      return state.map(c => slidePrev(c, action));
    case C.ADD_SLIDE:
      return state.map(c => addSlide(c, action));
    case C.ADD_SLIDE_SUBMIT:
      return state.map(c => slideFormAdd(c, action));
    case C.DELETE_SLIDE:
      return state.map(c => deleteSlide(c, action));
    default:
      return [...state];
  }
};

export const modal = (state = {}, action) => {
  return state;
};

export const header = (state = {}, action) => {
  return state;
};

export const form = (state = {}, action) => {
  switch (action.type) {
    case C.INPUT_CHANGE:
      return {
        ...state,
        inputs: state.inputs.map(i => inputChange(i, action))
        // valid: state.inputs.every(i => i.valid == true)
      };

    default:
      return { ...state };
  }
};

export const inputChange = (state = {}, action) => {
  switch (action.type) {
    case C.INPUT_CHANGE:
      return state.index !== action.index
        ? state
        : {
            ...state,
            value: action.value,
            valid: action.valid
          };
    default:
      return state;
  }
};

// export const  inputChange = (state = {}, action) => {
//     switch (action.type) {
//         case C.INPUT_CHANGE:
//             return (state.id !== action.id) ?
//                 state :
//                 {
//                     ...state,
//                     value: action.value
//                 }
//         default :
//             return state
//     }
// }

export const contacts = (state = {}, action) => {
  return state;
};

export const consultation = (state = {}, action) => {
  return state;
};

export const mapPoints = (state = {}, action) => {
  return state;
};

export const bottomForm = (state = {}, action) => {
  return state;
};

export const footer = (state = {}, action) => {
  return state;
};
