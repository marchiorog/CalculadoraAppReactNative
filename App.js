import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput('Error');
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Calculadora" />
        </Appbar.Header>

        <TextInput
          label="Resultado"
          value={input}
          mode="outlined"
          style={styles.resultDisplay}
          disabled
        />

        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <Button mode="outlined" onPress={() => handleButtonPress('1')}>1</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('2')}>2</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('3')}>3</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('+')}>+</Button>
          </View>
          <View style={styles.row}>
            <Button mode="outlined" onPress={() => handleButtonPress('4')}>4</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('5')}>5</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('6')}>6</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('-')}>-</Button>
          </View>
          <View style={styles.row}>
            <Button mode="outlined" onPress={() => handleButtonPress('7')}>7</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('8')}>8</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('9')}>9</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('*')}>*</Button>
          </View>
          <View style={styles.row}>
            <Button mode="outlined" onPress={() => handleButtonPress('0')}>0</Button>
            <Button mode="outlined" onPress={handleClear}>C</Button>
            <Button mode="outlined" onPress={handleEvaluate}>=</Button>
            <Button mode="outlined" onPress={() => handleButtonPress('/')}>/</Button>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  resultDisplay: {
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
