import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

export default function PhoneGuess({number}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: Colors.dark,
        fontSize: 40,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.dark,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 30,
        width: 270
    }
});