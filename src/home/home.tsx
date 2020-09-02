import React, {useState} from 'react';
import {Text, TextInput, View, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function HomeComponent(navigation) {
  const navigate = (component) => {
    navigation.navigation.navigate(component);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Button
          style={styles.btn}
          labelStyle={styles.btnText}
          mode="contained"
          onPress={() => navigate('Calculator')}>
          Calculator App
        </Button>

        <Button
          style={styles.btn}
          labelStyle={styles.btnText}
          mode="contained"
          onPress={() => navigate('Notes')}>
          Notes App
        </Button>
      </View>
    </SafeAreaProvider>
  );
}

export default HomeComponent;
