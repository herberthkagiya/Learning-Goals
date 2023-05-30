import { 
    StyleSheet, 
    View,
    Text,
    Pressable
} from "react-native";

function GoalItem(props) {
    return(
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText} key={props.id}>{props.text}</Text>
            </View>
        </Pressable> 
    );    
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 12, 
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    
    goalText: {
        color: 'white'
    }
});