import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return ( 
    <TouchableOpacity onPress={props.onDelete.bind(this, props.goalKey)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-around',
    padding: 10,
    margin: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    width: 'auto',
    fontSize: 20,
    color: 'black'
  },
});

export default GoalItem;

