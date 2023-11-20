// // ScoreModal.js
// import React from 'react';
// import { Modal, View, Text, Button } from 'react-native';


// const ScoreModal = ({ isVisible, onClose, score }) => {
//   return (
//     <Modal visible={isVisible} animationType="slide">
//       <View>
//         <Text>Your Score: {score}</Text>
//         <Button title="Close" onPress={onClose} />
//       </View>
//     </Modal>
//   );
// };

// export default ScoreModal;

// ScoreModal.js
import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';



const ScoreModal = ({ isVisible, onClose, score }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.scoreText}>Your Score: {score}</Text>
          {/* Add any additional content for the modal */}
          <Button  title="Close" color = "#FF0B1E"  onPress={onClose} />
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
    borderRadius: 20,
    elevation: 20,
    color:'black'
  },
  scoreText: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 10,
    color:'green'
  },
});

export default ScoreModal;

