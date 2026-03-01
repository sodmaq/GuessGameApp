import { View, Text, Pressable, StyleSheet } from 'react-native';
function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('Pressed!');
  }
  return (
    <View style={styles.buttonOuterConstainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerConstainer, styles.pressed]
            : styles.buttonInnerConstainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterConstainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerConstainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
});
