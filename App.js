import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [startGameWithUserNumber, setStartGameWithUserNumber] = useState();

  function startGameHandler(userNumber){
    setStartGameWithUserNumber(userNumber);
  }

  return (
    <LinearGradient colors={['#35D6ED', '#65DDEF', '#7AE5F5', '#97EBF4', '#C9F6FF']} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} style={styles.container} imageStyle={ startGameWithUserNumber != null ? styles.imageGame : styles.imageStart} resizeMode='contain'>
      <SafeAreaView style={styles.container}>
        {startGameWithUserNumber != null ? <GameScreen userInput={startGameWithUserNumber}/> : <StartGameScreen startGameWithNumber={startGameHandler}/>}
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
    opacity: 0.75
  },
  imageGame:{
    opacity: 0
  }
});
