import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function LoggedGuess({roundNumber, deviceName, guess}){
    return(
    <View style={styles.container}>
        <Text style={styles.item}>#{roundNumber} </Text>
        <Text style={styles.item}>{deviceName}'s Guess: {guess}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Colors.dark,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 45,
        marginTop: 15,
        justifyContent: 'space-between',
        alignContent: 'stretch'
        
    },
    item: {
        fontSize: 16
    }
});