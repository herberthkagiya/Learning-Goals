import {
    View, 
    TextInput, 
    Button, 
    StyleSheet,
    Modal
} from 'react-native';

import { useState } from 'react';


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}/>

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal!'
                            onPress={addGoalHandler}/>
                    </View>

                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />   
                    </View>
                </View>

             </View>
        </Modal>
    );
}




export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
    
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        borderRadius: 10
      },

      buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16
      },

      button: {
        width: '40%',
        marginHorizontal: 8
      }
});
