import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Button, 
  TextInput, 
  View, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length > 0) {
      setCourseGoals(currentGoals => [{ key: uuidv4(), value: goalTitle }, ...currentGoals]);
    }
    setIsAddMode(false);
  }

  const deleteGoalHandler = goalKey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    })
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }


  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key} 
        data={courseGoals}
        renderItem={itemData => (
        <GoalItem 
          goalKey={itemData.item.key}
          onDelete={deleteGoalHandler} 
          title={itemData.item.value} />
        )}
        style={styles.textContainer} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60
  },
  textContainer: {
    marginTop: 10
  },
});
