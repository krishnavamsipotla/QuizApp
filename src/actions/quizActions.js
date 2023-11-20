// quizActions.js
export const submitAnswer = (questionId, selectedOption) => ({
    type: 'SUBMIT_ANSWER',
    payload: { questionId, selectedOption },
  });
  
  export const resetQuiz = () => ({
    type: 'RESET_QUIZ',
  });
  // actions/types.js

  
  import { SET_FULL_NAME } from './types';


export const setFullName = (fullName) => ({
  type: SET_FULL_NAME,
  payload: fullName,
});


  