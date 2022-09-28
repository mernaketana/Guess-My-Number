import {  View, Text, FlatList } from "react-native"
import { useEffect, useState } from "react";
import { StyleSheet, Alert, useWindowDimensions } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Title from "../components/BasicUI/Title";
import PhoneGuess from "../components/GameRelatedUI/PhoneGuess";
import PrimaryButton from "../components/BasicUI/PrimaryButton";
import Colors from "../constants/colors";
import LoggedGuess from "../components/GameRelatedUI/LoggedGuess";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userInput, onGameOver, deviceName, numOfRounds}){   

    const initialGuess = guessNumber(1, 100, userInput);

    const [currentGuess, setCurrentGuess]  = useState(initialGuess);
    const [roundGuesses, setRoundGuesses] = useState([initialGuess]); 

    const {height, width} = useWindowDimensions();

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        if(newRandomNum == userInput){
            onGameOver(roundGuesses.length);
        }
        else{           
            setCurrentGuess(newRandomNum);
            setRoundGuesses(prevRoundGuesses => [...prevRoundGuesses, newRandomNum]);
        }
    }

    const marginTopDistance = width > 500 ? 90 : 70;
    const heightLandscape = width > 500 ? 217 : '100%';
    const direction = width > 500 ? 'row' : 'column';

    return (
        <View style={[styles.screen, {marginTop: marginTopDistance, maxHeight: heightLandscape, flexDirection: direction}]}>
            <View style={styles.firstContainer}>
            <Title title={deviceName + '\'s guess'}/>
            <PhoneGuess number={currentGuess} />
            <Text style={styles.text}>Higher or Lower?</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.singleButton}>
                    <PrimaryButton onPress={newGuess.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </PrimaryButton>
                </View>
                <View style={styles.singleButton}>
                    <PrimaryButton onPress={newGuess.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" style={styles.icon}/>
                    </PrimaryButton>
                </View>
            </View>
            </View>
            <FlatList data={roundGuesses} renderItem={roundGuess => <LoggedGuess roundNumber={roundGuess.index} guess={roundGuess.item} deviceName={deviceName}/>} keyExtractor={item => item} style={{flex: 1, height: 350, marginVertical: 50}}/>
        </View>
    );
};

function guessNumber(min, max, exclude){
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if(randomNum === exclude){
        return guessNumber(min, max, exclude);
    }
    else{
        return randomNum;
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,       
        alignItems: 'center'
    },
    firstContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',            
    },
    singleButton: {
        width: '30%',
        flex: 1,
    },
    text: {
        color: Colors.dark,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },

});