import React, {useState} from 'react';
import {Text, TextInput, View, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

function CalculatorComponent() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [selectedOperation, setSelectedOperation] = useState('+');
  const [result, setResult] = useState('');
  const [totalOperations, setTotalOperations] = useState(0);

  const performCalculation = {
    '+': (x, y) => {
      return x + y;
    },
    '-': (x, y) => {
      return x - y;
    },
    '*': (x, y) => {
      return x * y;
    },
    '/': (x, y) => {
      return x / y;
    },
  };

  const performOperation = (type) => {
    if (input1 !== '' && input2 !== '') {
      setResult(performCalculation[type](+input1, +input2));
      setSelectedOperation(type);
      setTotalOperations((prevState) => +prevState + 1);
    }
  };

  const performReset = () => {
    setInput1('');
    setInput2('');
    setSelectedOperation('+');
    setResult('');
  };

  return (
    <SafeAreaProvider>
      <View>
        <KeyboardAvoidingView enabled>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            scrollEnabled
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text style={styles.totalOperations}>
                Total Operations performed: {totalOperations}
              </Text>

              <View style={styles.view}>
                <TextInput
                  keyboardType="number-pad"
                  style={styles.textInput}
                  placeholder="Eg: 1"
                  value={input1}
                  onChangeText={(e) => setInput1(e)}
                />
                <Text style={styles.selectedOperation}>
                  {selectedOperation}
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  style={styles.textInput}
                  placeholder="Eg: 2"
                  value={input2}
                  onChangeText={(e) => setInput2(e)}
                />
              </View>

              <View style={styles.view}>
                <Button
                  style={styles.btn}
                  labelStyle={styles.btnText}
                  mode="contained"
                  onPress={() => performOperation('+')}>
                  +
                </Button>

                <Button
                  style={styles.btn}
                  labelStyle={styles.btnText}
                  mode="contained"
                  onPress={() => performOperation('-')}>
                  -
                </Button>

                <Button
                  style={styles.btn}
                  labelStyle={styles.btnText}
                  mode="contained"
                  onPress={() => performOperation('*')}>
                  *
                </Button>

                <Button
                  style={styles.btn}
                  labelStyle={styles.btnText}
                  mode="contained"
                  onPress={() => performOperation('/')}>
                  /
                </Button>
              </View>

              <View style={styles.view}>
                <View style={styles.reset}>
                  <Button
                    labelStyle={styles.btnText}
                    onPress={performReset}
                    mode="contained"
                    color="rgb(169,60,50)">
                    Reset
                  </Button>
                </View>
                {result !== '' && (
                  <View style={styles.resultContainer}>
                    <Text style={styles.total}>Result: {result}</Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaProvider>
  );
}

export default CalculatorComponent;
