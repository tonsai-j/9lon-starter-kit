import { FORM_SAVE_REGISTER } from "./../actions/form-input-action";

let initState = {
  formRegister: {}
};

let formReducer = (state = initState, action) => {
  // console.log("action=>", action);
  switch (action.type) {
    case FORM_SAVE_REGISTER:
      return Object.assign({}, state, { formRegister: action.payload });
    default:
      return state;
  }
};

export default formReducer;
