import { useState } from 'react';

import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);


  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  }


  return (
    <View style={styles.appContainer}>
      
      <GoalInput onAddGoal={addGoalHandler}/>
      
      <View style={styles.goalsContainer}>
          
          <FlatList 
            data={courseGoals} 
            renderItem={ (itemData) => {
              return <GoalItem index={itemData.index} text={itemData.item}/>;
          }} />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },


  goalsContainer: {
    flex: 10,
    marginTop: 20
  },
});

