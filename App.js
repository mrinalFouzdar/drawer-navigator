import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <Text>Todo...</Text>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User'>
        <Drawer.Screen name='Welcome' component={WelcomeScreen}/>
        <Drawer.Screen name='User' component={UserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


