// quizReducer.js
const initialState = {
    questions: [
      {
        id: 1,
        text: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctOption: 'Paris',
        selectedOption: null,
      },
      {
        id: 2,
        text: 'Which programming language is often used for building web applications?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        correctOption: 'JavaScript',
        selectedOption: null,
      },
      {
        id: 3,
        text: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctOption: 'Blue Whale',
        selectedOption: null,
      },
      {
        id: 4,
        text: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctOption: 'Mars',
        selectedOption: null,
      },
      {
        id: 5,
        text: 'In which year did the Titanic sink?',
        options: ['1912', '1923', '1935', '1947'],
        correctOption: '1912',
        selectedOption: null,
      },
      {
        id: 6,
        text: 'What is the capital of Japan?',
        options: ['Seoul', 'Tokyo', 'Beijing', 'Bangkok'],
        correctOption: 'Tokyo',
        selectedOption: null,
      },
      {
        id: 7,
        text: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'South Korea', 'Japan', 'Vietnam'],
        correctOption: 'Japan',
        selectedOption: null,
      },
      {
        id: 8,
        text: 'What is the currency of Brazil?',
        options: ['Euro', 'Pound Sterling', 'Real', 'Yen'],
        correctOption: 'Real',
        selectedOption: null,
      },
      {
        id: 9,
        text: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctOption: 'William Shakespeare',
        selectedOption: null,
      },
      {
        id: 10,
        text: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        correctOption: 'Au',
        selectedOption: null,
      },
    {
        id: 11,
        text: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctOption: 'Paris',
        selectedOption: null,
      },
      {
        id: 12,
        text: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctOption: 'Mars',
        selectedOption: null,
      },
      {
        id: 13,
        text: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctOption: 'Blue Whale',
        selectedOption: null,
      },
    ],
  };
  
  const quizReducer = (state = initialState, action) => {
    switch (action.type) {
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
  