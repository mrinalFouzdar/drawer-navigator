import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
// import { NavigationContainer } from '@react-navigation/native';
// import { registerRootComponent } from 'expo';
// mport App from './App';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    //   <View>
    //   <Text>heloo World </Text>
    // </View>
    // <Text>Todo...</Text>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: {backgroundColor: '#ccc'}
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen name="User" component={UserScreen}
        options={{
          drawerIcon: ({color, size})=> (
            <Ionicons name="person" color={color} size={size}/>
          )
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("drawer-navigator", () => App);

// registerRootComponent(App);
