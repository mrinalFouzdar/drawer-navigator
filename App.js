import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
// import { NavigationContainer } from '@react-navigation/native';
// import { registerRootComponent } from 'expo';
// mport App from './App';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    //   <View>
    //   <Text>heloo World </Text>
    // </View>
    // <Text>Todo...</Text>
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: '#3c0a6b'


          // DRAWER SPECIFIC
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: {backgroundColor: '#ccc'}
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={
            {
              // DRAWER SPECIFIC
              // drawerLabel: "Welcome Screen",
              // drawerIcon: ({ color, size }) => (
              //   <Ionicons name="home" color={color} size={size} />
              // ),

              tabBarIcon: ({color,size})=> <Ionicons name='home' color={color} size={size}/>
            }
          }
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={
            {
              // DRAWER SPECIFIC
              // drawerIcon: ({color, size})=> (
              //   <Ionicons name="person" color={color} size={size}/>
              // )
              tabBarIcon: ({color,size})=> <Ionicons name='person' color={color} size={size}/>

            }
          }
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// AppRegistry.registerComponent("drawer-navigator", () => App);

// registerRootComponent(App);
