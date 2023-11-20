// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import quizReducer from './quizReducer'; // Import your quizReducer

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer, // Include your quizReducer
});

export default rootReducer;
