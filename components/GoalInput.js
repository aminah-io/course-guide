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
          value={enteredGoal} //updates the value with the enteredGoal text
        />
        <View style={styles.buttonContainer}>
          <Button onPress={addGoalHandler} title='Add' />
          {/*  onPress uses the local function addGoalHandler to pull in the entered goal and do a two-way bind back to the function addGoalHandler in App.js where it is entered into the courseGoals array of current goals */}
          <Button title='Clear' onPress={() => setEnteredGoal('')} />
          {/* onPress calls on the useState function for setting the entered goal to return the input box back to an empty string */}
          <Button title='Cancel' color='red' onPress={props.onCancel} />
          {/* onPress calls the onCancel function in App.js to return the modal back to false, which closes it */}
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