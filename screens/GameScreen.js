import {  View, Text } from "react-native"
import { useState, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import * as Device from 'expo-device';
import Title from "../components/BasicUI/Title";
import PhoneGuess from "../components/GameRelatedUI/PhoneGuess";
import PrimaryButton from "../components/BasicUI/PrimaryButton";
import Colors from "../constants/colors";

export default function GameScreen({userInput, onGameOver}){

    const deviceName = Device.deviceName;
    let minBoundary = 1;
    let maxBoundary = 100;

    const initialGuess = guessNumber(1, 100, userInput);

    const [currentGuess, setCurrentGuess]  = useState(initialGuess);  

    // useEffect is used whenever we want to make a change in the ui based on some functionality with dependencies.
    // In our case whenever the current guess, the user input or the onGameOver function are changed.
    useEffect(() => {
        if (currentGuess == userInput){
            onGameOver();
        }
    }, [currentGuess, userInput, onGameOver]);

    function newGuess(direction){
        if((direction === 'lower' && currentGuess < userInput) || (direction === 'greater' && currentGuess > userInput)){
            Alert.alert('No Cheating!', 'You know that this is wrong.', [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }
        else{
            minBoundary = currentGuess + 1;
        }
        const newRandomNum = guessNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNum);
    }

    return (
        <View style={styles.screen}>
            <Title title={deviceName + '\'s guess'}/>
            <PhoneGuess number={currentGuess} />
            <Text style={styles.text}>Higher or Lower?</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.singleButton}>
                    <PrimaryButton onPress={newGuess.bind(this, 'greater')}>+</PrimaryButton>
                </View>
                <View style={styles.singleButton}>
                    <PrimaryButton onPress={newGuess.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 70,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
            
    },
    singleButton: {
        width: '30%',
    },
    text: {
        color: Colors.dark,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

function guessNumber(min, max, exclude){
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if(randomNum === exclude){
        return guessNumber(min, max, exclude);
    }
    else{
        return randomNum;
    }
};