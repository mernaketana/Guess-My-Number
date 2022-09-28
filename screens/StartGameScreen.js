import { useState } from "react";
import { View, TextInput, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/BasicUI/PrimaryButton";
import Title from "../components/BasicUI/Title";
import Colors from "../constants/colors"

export default function StartGameScreen({startGameWithNumber}){

    const [userInput, setUserInput] = useState('');

    const {width, height} = useWindowDimensions();

    const marginTopDistance = height < 380 ? 30 : 100;

    function userInputHandler(text){
        setUserInput(text);
    }

    function resetUserInput(){
        setUserInput('');
    }

    function confirmUserInput(){
        const inputStringToInt = parseInt(userInput);

        // Alert is not a component but an object, an API exposed by react native. It creates a native alert dialog.
        if (isNaN(inputStringToInt) || inputStringToInt <= 0 || inputStringToInt > 99){
            Alert.alert('invalid number', 'number has to be between 1 and 99', [{text: 'ok', onPress: resetUserInput, style:'destructive'}]);
            return;
        }
        startGameWithNumber(userInput);
    }

    return(
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior={'position'}>            
                <View style={[styles.inputContainer, {marginTop: marginTopDistance}]}>
                    <Title title={'Guess My Number'}/>
                    <Text style={styles.text}>Enter a number!</Text>
                    <TextInput placeholder="00" placeholderTextColor={Colors.light} value={userInput} style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} onChangeText={userInputHandler}/>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.singleButton}>
                            <PrimaryButton onPress={resetUserInput}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.singleButton}>
                            <PrimaryButton onPress={confirmUserInput}>Confirm</PrimaryButton>
                        </View>
                    </View>
                    <View style={styles.spacer}/>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: Colors.dark,
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    textInput:{
        marginTop: 20,
        marginBottom: 25,
        height: 50,
        width: 50,
        fontSize: 32, 
        borderBottomColor: Colors.dark,
        borderBottomWidth: 1,
        color: Colors.dark,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    singleButton: {
        flex: 1,
    },
    text: {
        marginTop: 20,
        color: Colors.dark,
        fontWeight: 'bold',
        fontSize: 20,
    }
});