import {DELETE_DATA, UPDATE_LIKE, UPDATE_TEXTINPUT_VALUE} from './Type';

export const updateTextInputValue = parameter => {
  return {
    type: UPDATE_TEXTINPUT_VALUE,
    payload: parameter,
  };
};

export const updateLike = parameter => {
  return {
    type: UPDATE_LIKE,
    payload: parameter,
  };
};

export const deleteData = parameter => {
  return {
    type: DELETE_DATA,
    payload: parameter,
  };
};
