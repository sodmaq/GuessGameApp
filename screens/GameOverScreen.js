import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from 'react-native';
import Title from '../components/ui/Title.ios';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  // Make sizing logic clearer
  if (width < 380) {
    imageSize = 50;
  } else if (height < 400) {
    imageSize = 50;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>

        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
            resizeMode='cover'
          />
        </View>

        <Text style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          guesses to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rootContainer: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultText: {
    textAlign: 'center',
    fontFamily: 'open-sans',
    fontSize: 20,
    color: 'white',
    marginBottom: 24
  },
  highlight: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold'
  }
});
