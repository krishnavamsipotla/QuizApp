// // HomeScreen.js

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { setFullName } from '../actions/quizActions';

// const HomeScreen = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const [fullName, setFullNameLocal] = useState('');

//   const handlePressSubmit = () => {
//     dispatch(setFullName(fullName));
//     navigation.navigate('QuizForm');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Full Name"
//         value={fullName}
//         onChangeText={setFullNameLocal}
//       />
//       <Button title="Submit" onPress={handlePressSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'white'
//   },
//   input: {
//     height: 40,
//     width: '50%',
//     borderColor: 'black',
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//   },
// });

// export default HomeScreen;
