import { View, Image, Text, useWindowDimensions, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/BasicUI/Title";
import PrimaryButton from "../components/BasicUI/PrimaryButton"
import Colors from "../constants/colors";

export default function EndGameScreen({phoneName, roundsNumber, userInput, onNewGame}){

    const {height, width} = useWindowDimensions();
    
    let imageSize = 300;

    if (width < 380){
        imageSize = 150;
    }

    if(height< 400){
        imageSize= 150;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return(
        <View style={styles.rootContainer}>
            <Title title={'Game Over'}/>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image source={require('../assets/images/endgame.png')} style={styles.image}/>
            </View>
            <Text style={styles.mainText}> {phoneName} needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userInput}</Text></Text>
            <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: Colors.dark,
        marginTop: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    mainText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        color: Colors.lightContrast,
        fontWeight: 'bold'
    }
});