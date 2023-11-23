// quizReducer.js
const initialState = {
  fullname: '',
  questions: [
    {
      id: 1,
      text: 'What is the capital of France?',
      type: 'multipleChoice',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctOption: 'Paris',
      selectedOption: null,
    },
    {
      id: 2,
      text: 'Which programming language is often used for building web applications?',
      type: 'multipleChoice',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      correctOption: 'JavaScript',
      selectedOption: null,
    },
    {
      id: 3,
      text: 'What is the largest mammal?',
      type: 'multipleChoice',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctOption: 'Blue Whale',
      selectedOption: null,
    },
    {
      id: 4,
      text: 'React Native is a JavaScript framework for building mobile apps.',
      type: 'trueFalse',
      correctOption: true,
      selectedOption: null,
    },
    {
      id: 5,
      text: 'Redux is a state management library for React applications.',
      type: 'trueFalse',
      correctOption: true,
      selectedOption: null,
    },
    {
      id: 6,
      text: 'What is the capital of Japan?',
      type: 'descriptive',
      correctAnswer: 'Tokyo',
      selectedOption: null,
    },
  ],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FULL_NAME':
      return {
        ...state,
        fullName: action.payload,
      };

    case 'SUBMIT_ANSWER':
      const updatedQuestions = state.questions.map((question) => {
        if (question.id === action.payload.questionId) {
          return { ...question, selectedOption: action.payload.selectedOption };
        }
        return question;
      });

      return {
        ...state,
        questions: updatedQuestions,
      };

    case 'RESET_QUIZ':
      return {
        ...state,
        questions: state.questions.map((question) => ({
          ...question,
          selectedOption: null,
        })),
      };

    default:
      return state;
  }
};

export default quizReducer;


  