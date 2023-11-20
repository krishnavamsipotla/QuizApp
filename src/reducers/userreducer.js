// reducers/userReducer.js

import { SET_FULL_NAME } from '../actions/quizActions';

const initialState = {
  fullName: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
