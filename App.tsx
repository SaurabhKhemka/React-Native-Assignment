import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CalculatorComponent from './src/calculator/calculator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeComponent from './src/home/home';
import NotesComponent from './src/notes/notes';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeComponent,
      navigationOptions: {
        headerShown: false,
      },
    },
    Calculator: {
      screen: CalculatorComponent,
      navigationOptions: {
        headerShown: false,
      },
    },
    Notes: {
      screen: NotesComponent,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}
