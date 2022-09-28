import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import * as Device from 'expo-device';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';



export default function App() {

  const deviceName = Device.deviceName;

  const [startGameWithUserNumber, setStartGameWithUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [numOfRounds, setNumOfRounds] = useState(0);

  function startGameHandler(userNumber){
    setStartGameWithUserNumber(userNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numOfRounds){
    setGameIsOver(true);
    setNumOfRounds(numOfRounds);
  }

  function newGameHandler(){
    setStartGameWithUserNumber();
    setNumOfRounds(1);
  }

  return (
    <LinearGradient colors={['#35D6ED', '#65DDEF', '#7AE5F5', '#97EBF4', '#C9F6FF']} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} style={styles.container} imageStyle={ startGameWithUserNumber != null ? styles.imageGame : styles.imageStart} resizeMode='contain'>
      <SafeAreaView style={styles.container}>
        {startGameWithUserNumber != null ? gameIsOver? <EndGameScreen phoneName={deviceName} roundsNumber={numOfRounds} userInput={startGameWithUserNumber} onNewGame={newGameHandler}/> : <GameScreen userInput={startGameWithUserNumber} onGameOver={gameOverHandler} deviceName={deviceName}/> : <StartGameScreen startGameWithNumber={startGameHandler}/>}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStart: {
    marginTop: 270,
    opacity: 0.75
  },
  imageGame:{
    opacity: 0.45
  }
});
