export const FORM_SAVE_REGISTER = 'FORM_SAVE_REGISTER';
// export const DECREMENT = 'DECREMENT';

export const formSaveRegister = payload => {
  return {
    type: FORM_SAVE_REGISTER,
    payload
  };
};

// export const decrement = () => {
//   return {
//     type: DECREMENT
//   };
// };
