import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomePageScreen from "../screens/HomePageScreen/HomePageScreen";
import ActivityLogScreen from "../screens/ActivityLogScreen/ActivityLogScreen";
import LogViewScreen from "../screens/LogViewScreen/LogViewScreen";

const StackNavigator = ({ }) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="HomePageScreen"
          component={HomePageScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="ActivityLogScreen"
          component={ActivityLogScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />

        <Stack.Screen
          name="LogViewScreen"
          component={LogViewScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
