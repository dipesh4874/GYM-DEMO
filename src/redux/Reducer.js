import {DELETE_DATA, UPDATE_LIKE, UPDATE_TEXTINPUT_VALUE} from './Type';
const intialstate = {
  textinput: [],
};
export const Reducers = (state = intialstate, action) => {
  switch (action.type) {
    case UPDATE_TEXTINPUT_VALUE:
      return {
        ...state,
        textinput: [...action?.payload, ...state?.textinput],
      };
    case UPDATE_LIKE:
      return {
        ...state,
        textinput: state?.textinput.map(item => {
          if (item.id == action?.payload?.id) {
            item.like = action.payload.like;
            return item;
          } else {
            return item;
          }
        }),
      };
    case DELETE_DATA:
      return {
        ...state,
        textinput: state?.textinput.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
