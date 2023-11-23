
import React from 'react';
import { View, Text, Modal, Button, StyleSheet,  } from 'react-native';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';

const ScoreModal = ({ isVisible, onClose, score }) => {
  const getScoreColor = () => {
    if (score < 2) {
      return 'red';
    } else if (score >= 2 && score < 4) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  const fullName = useSelector((state) => state.fullName);


  const share = async () => {
    const options = {
      message: `Hey, I'm ${fullName}! I scored ${score} points in the quiz. Can you beat my score?`,

    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

  };


  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={{ ...styles.scoreText, color: getScoreColor() }}>
        Hey, Your Score : {score}/6 
          {/* <Text style={styles.scoreText}>Hey, Your Score : {score}/6 </Text> */}
          </Text>
          <Text style={styles.fullNameText}>{`Congratulations, ${fullName}!`}</Text>

        
          <View style={styles.buttonContainer}>

          <Button title="Share" color={'darkturquoise'} onPress={share} styles={styles.button} />
          <Button title="Close" color="crimson" onPress={onClose}  />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 25,
    elevation: 20,
    color: 'black',
    borderWidth:2,
    borderColor:'orange'
  },
  scoreText: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
    color: 'green',

  },
  fullNameText: {
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 10,
    color: 'green',
  },

  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20,
  },

  button:{
    flex: 1, 
    marginHorizontal: 10 , 
    height: 80,
    

  }
});

export default ScoreModal;

