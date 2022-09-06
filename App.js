import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['black', 'grey', 'white']} style={styles.container}>
      <StartGameScreen/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
