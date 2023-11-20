
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { submitAnswer, resetQuiz } from '../actions/quizActions';
// import ScoreModal from './scoremodal';

// const QuizForm = () => {
//   const dispatch = useDispatch();
//   const questions = useSelector((state) => state.questions);

//   // State to track the user's score
//   const [score, setScore] = useState(0);
//   const [modalVisible, setModalVisible] = useState(false);


//   const handleAnswerSubmit = (questionId, selectedOption, correctOption) => {
//     dispatch(submitAnswer(questionId, selectedOption));

//     // Calculate the score
//     if (selectedOption === correctOption && !questions[questionId - 1].selectedOption) {
//       setScore(score + 1);
//     }
//   };
//   const handleCloseModal = () => {
//     // Your logic to handle closing the modal
//     setModalVisible(false);
//   };

//   const handleQuizReset = () => {
//     // Reset the score and dispatch the reset action
//     setScore(0);
//     dispatch(resetQuiz());
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.headingText}>Quiz Form</Text>
//         </View>
//         {questions.map((question, index) => (
//           <View key={question.id} style={styles.questionContainer}>
//             <Text style={styles.questionNumber}>Question {index + 1}:</Text>
//             <Text style={styles.questionText}>{question.text}</Text>
//             {question.options.map((option, optionIndex) => (
//               <TouchableOpacity
//                 key={optionIndex}
//                 style={[
//                   styles.optionButton,
//                   {
//                     backgroundColor:
//                       question.selectedOption === option ? '#3498db' : '#ecf0f1',
//                   },
//                 ]}
//                 onPress={() =>
//                   handleAnswerSubmit(question.id, option, question.correctOption)
//                 }
//               >
//                 <Text style={styles.optionText}>{String.fromCharCode(65 + optionIndex)}. {option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         ))}
//         <Text style={styles.scoreText}>Score: {score}</Text>
//         <Button title="SUBMIT Quiz" onPress={handleQuizReset} />
//         <ScoreModal isVisible={modalVisible} onClose={handleCloseModal} score={score} />

//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   headingContainer: {
//     marginBottom: 20,
//   },
//   headingText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   questionContainer: {
//     marginBottom: 20,
//   },
//   questionNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 5,
//   },
//   questionText: {
//     fontSize: 20,
//     marginBottom: 5,
//     color: 'black',
//   },
//   optionButton: {
//     backgroundColor: '#ecf0f1',
//     padding: 5,
//     marginVertical: 5,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   optionText: {
//     fontSize: 20,
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default QuizForm;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { submitAnswer, resetQuiz } from '../actions/quizActions';
// import ScoreModal from './scoremodal'; // Make sure to use the correct import path for your ScoreModal component

// const QuizForm = () => {
//   const dispatch = useDispatch();
//   const questions = useSelector((state) => state.questions);

//   // State to track the user's score
//   const [score, setScore] = useState(0);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleAnswerSubmit = (questionId, selectedOption, correctOption) => {
//     dispatch(submitAnswer(questionId, selectedOption));

//     // Calculate the score
//     if (selectedOption === correctOption && !questions[questionId - 1].selectedOption) {
//       setScore(score + 1);
//     }
//   };

//   const handleCloseModal = () => {
//     // Your logic to handle closing the modal
//     setModalVisible(false);
//   };

//   const handleQuizReset = () => {
    
//     // Reset the score and dispatch the reset action
//     setScore(score );
//     dispatch(resetQuiz(true));

//     // Set the modal to be visible
//     setModalVisible(true);

//     // You can use setTimeout to make the modal disappear after a certain duration
//     // Adjust the duration (in milliseconds) as needed
//     setTimeout(() => {
//       setModalVisible(false);
//     }, 5000); // For example, the modal will disappear after 5000 milliseconds (5 seconds)
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.headingText}>Quiz Form</Text>
//         </View>
//         {questions.map((question, index) => (
//           <View key={question.id} style={styles.questionContainer}>
//             <Text style={styles.questionNumber}>Question {index + 1}:</Text>
//             <Text style={styles.questionText}>{question.text}</Text>
//             {question.options.map((option, optionIndex) => (
//               <TouchableOpacity
//                 key={optionIndex}
//                 style={[
//                   styles.optionButton,
//                   {
//                     backgroundColor:
//                       question.selectedOption === option ? '#3498db' : '#ecf0f1',
//                   },
//                 ]}
//                 onPress={() =>
//                   handleAnswerSubmit(question.id, option, question.correctOption)
//                 }
//               >
//                 <Text style={styles.optionText}>
//                   {String.fromCharCode(65 + optionIndex)}. {option}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         ))}
//         <Text style={styles.scoreText}>Score: {score}</Text>
//         <Button title="SUBMIT Quiz" onPress={handleQuizReset} />
//         <ScoreModal isVisible={modalVisible} onClose={handleCloseModal} score={score} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // Your existing styles
//   // ...
// });

// export default QuizForm;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { submitAnswer, resetQuiz } from '../actions/quizActions';
// import ScoreModal from './scoremodal';

// const QuizForm = () => {
//   const dispatch = useDispatch();
//   const questions = useSelector((state) => state.questions);

//   // State to track the user's score
//   const [score, setScore] = useState(0);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleAnswerSubmit = (questionId, selectedOption, correctOption) => {
//     dispatch(submitAnswer(questionId, selectedOption));

//     // Calculate the score only if the selected option is correct and hasn't been selected before
//     if (selectedOption === correctOption && !questions[questionId - 1].selectedOption) {
//       setScore(score + 1);
//     }
//   };

//   const handleCloseModal = () => {
//     // Your logic to handle closing the modal
//     setModalVisible(false);
//   };

//   const handleQuizReset = () => {
//     // Reset the score in the state and dispatch the reset action
//     setScore(0);
//     dispatch(resetQuiz());
//   };

//   const handleQuizSubmit = () => {
//     // Show the modal when the user submits the quiz
//     setModalVisible(true);
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.headingText}>Quiz Form</Text>
//         </View>
//         {questions.map((question, index) => (
//           <View key={question.id} style={styles.questionContainer}>
//             <Text style={styles.questionNumber}>Question {index + 1}:</Text>
//             <Text style={styles.questionText}>{question.text}</Text>
//             {question.options.map((option, optionIndex) => (
//               <TouchableOpacity
//                 key={optionIndex}
//                 style={[
//                   styles.optionButton,
//                   {
//                     backgroundColor:
//                       question.selectedOption === option ? '#3498db' : '#ecf0f1',
//                   },
//                 ]}
//                 onPress={() =>
//                   handleAnswerSubmit(question.id, option, question.correctOption)
//                 }
//               >
//                 <Text style={styles.optionText}>{String.fromCharCode(65 + optionIndex)}. {option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         ))}
//         <Text style={styles.scoreText}>Score: {score}</Text>
//         <Button title="Submit Quiz" onPress=  {handleQuizReset} />
//         <ScoreModal isVisible={modalVisible} onClose={handleCloseModal} score={score} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   headingContainer: {
//     marginBottom: 20,
//   },
//   headingText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   questionContainer: {
//     marginBottom: 20,
//   },
//   questionNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 5,
//   },
//   questionText: {
//     fontSize: 20,
//     marginBottom: 5,
//     color: 'black',
//   },
//   optionButton: {
//     backgroundColor: '#ecf0f1',
//     padding: 5,
//     marginVertical: 5,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   optionText: {
//     fontSize: 20,
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default QuizForm;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswer, resetQuiz } from '../actions/quizActions';
import ScoreModal from './scoremodal';

const QuizForm = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  // State to track the user's score
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAnswerSubmit = (questionId, selectedOption, correctOption) => {
    dispatch(submitAnswer(questionId, selectedOption));

    // Calculate the score only if the selected option is correct and hasn't been selected before
    if (selectedOption === correctOption && !questions[questionId - 1].selectedOption) {
      setScore(score + 1);
    }
  };

  const handleCloseModal = () => {
    // Reset the score and dispatch the reset action when closing the modal
    setScore(0);
    dispatch(resetQuiz());

    // Close the modal
    setModalVisible(false);
  };

  const handleQuizSubmit = () => {
    // Show the modal when the user submits the quiz
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Quiz Form</Text>
        </View>
        {questions.map((question, index) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionNumber}>Question {index + 1}:</Text>
            <Text style={styles.questionText}>{question.text}</Text>
            {question.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.optionButton,
                  {
                    backgroundColor:
                      question.selectedOption === option ? '#4AD7E6' : '#ecf0f1',
                  },
                ]}
                onPress={() =>
                  handleAnswerSubmit(question.id, option, question.correctOption)
                }
              >
                <Text style={styles.optionText}>{String.fromCharCode(65 + optionIndex)}. {option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={styles.submitButtonContainer}>
          <Button title="Submit Quiz" color="#4AD7E6" onPress={handleQuizSubmit} style={styles.submitButton} />
        </View>
        {/* <Text style={styles.scoreText}>Score: {score}</Text> */}
        {/* <Button  title="Submit Quiz" Color='#4AD7E6' onPress={handleQuizSubmit} style={styles.submitButton}/> */}
        <ScoreModal isVisible={modalVisible} onClose={handleCloseModal} score={score} />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 40,
  },
  headingContainer: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'darkorange',
    marginTop:10,
    marginBottom:-10,
    alignSelf:'center'
  },
  questionContainer: {
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffc107',
    marginBottom: 5,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 5,
    color: 'black',
  },
  optionButton: {
    backgroundColor: 'grey',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  optionText: {
    fontSize: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  submitButtonContainer:{
    marginBottom: 50, // Adjust the marginBottom value as needed
    marginTop:20,
    borderRadius:1
  },
  submitButton:{
   fontSize:30 
  }
  
});

export default QuizForm;




