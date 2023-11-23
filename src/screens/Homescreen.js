
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Image,ImageBackground} from 'react-native';
import { useDispatch } from 'react-redux';
import { setFullName } from '../actions/quizActions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [fullName, setFullNameLocal] = useState('');

  const handlePressSubmit = () => {
    dispatch(setFullName(fullName));
    navigation.navigate('QuizForm');
  };

  return (
    <ImageBackground
    source={require('../images/image6.jpg')} // Replace with the actual path to your image
    style={styles.background}
  >
    <View style={styles.container}>
              <Image
          source={require('../images/image3.webp')}
          style={styles.logo}
        />

      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={setFullNameLocal}
        keyboardAppearance="light" // Set to 'light' for a light-themed keyboard

      />
      <Button title="START QUIZ"  onPress={handlePressSubmit} color={'orange'} />
    </View>
     </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    opacity:0.8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'goldenrod',
    opacity:1

  },
  logo: {
    width: 250,
    height: 250,
    borderWidth:40,
    marginBottom: 40,
    opacity:1
    // Additional styling for the logo if needed
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'orange',
    borderWidth: 2,
    // marginTop:40,
    marginBottom: 40,
    padding: 10,
    borderRadius:15,
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },


});

export default HomeScreen;
