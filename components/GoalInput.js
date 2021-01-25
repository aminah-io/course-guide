import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  
  
  return ( 
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputButtonContainer}>
        <TextInput 
          placeholder='Enter a course goal...' 
          style={styles.input}
          onChangeText={goalInputHandler} //updates on every keystroke
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={addGoalHandler} title='Add' />
          <Button title='Clear' onPress={() => setEnteredGoal('')} />
          <Button title='Cancel' color='red' onPress={props.onCancel} />
        </View>
      </View>
    </Modal>  
  );
}


const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: '80%',
    fontSize: 17,
    padding: 10
  },
  inputButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default GoalInput;