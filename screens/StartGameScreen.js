import { View, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen(){
    return(
<View style={styles.inputContainer}>
    <TextInput style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
    <View style={styles.buttonsContainer}>
        <View style={styles.singleButton}>
            <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButton}>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    </View>
</View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: 'grey',
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    textInput:{
        height: 50,
        width: 50,
        fontSize: 32, 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        color: 'black',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    singleButton: {
        flex: 1
    }
});