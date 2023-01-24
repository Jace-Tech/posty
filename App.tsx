import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { IRootStackParamList, ScreenType } from './src/@types';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const { Screen, Navigator } = createStackNavigator<IRootStackParamList>()

  const Screens: ScreenType[] = [
    {
      name: "Home",
      component: HomeScreen,
      options: {
        animation: "fade",
        headerShown: false
      }
    }
  ]
  return (
    <NavigationContainer>
      <StatusBar style='auto' animated />
      <Navigator initialRouteName='Home'>
        { Screens.map(screen => <Screen {...screen} key={screen.name} />) }
      </Navigator>
    </NavigationContainer>
  );
}
