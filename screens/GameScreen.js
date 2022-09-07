import {  View, Text } from "react-native"
import { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import * as Device from 'expo-device';
import Title from "../components/BasicUI/Title";
import PhoneGuess from "../components/GameRelatedUI/PhoneGuess";
import PrimaryButton from "../components/BasicUI/PrimaryButton"

export default function GameScreen({userInput}){

    const deviceName = Device.deviceName;
    let minBoundary = 1;
    let maxBoundary = 100;

    const initialGuess = guessNumber(1, 100, userInput);

    const [currentGuess, setCurrentGuess]  = useState(initialGuess);  

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
            <Text>Higher or Lower?</Text>
            <View style={styles.buttonsContainer}>
                <View>
                    <PrimaryButton onPress={newGuess.bind(this, 'greater')}>+</PrimaryButton>
                </View>
                <View>
                    <PrimaryButton onPress={newGuess.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer: {
        flexDirection: 'row',      
    },
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