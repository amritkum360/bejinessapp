import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";  // Import this line
import { Image, Button, View, useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { useAuth } from "../context/AuthContext";

const BottomTab = createBottomTabNavigator();
const TabOneStack = createStackNavigator();  // Ensure Stack is defined here
const TabTwoStack = createStackNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { logout } = useAuth();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={{ uri: "https://bejiness.com/home/bejiness-logo.png" }}
              style={{ width: 100, height: 40 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Logout"
        component={() => (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Logout" onPress={logout} />
          </View>
        )}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="log-out-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} />
    </TabOneStack.Navigator>
  );
}

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} />
    </TabTwoStack.Navigator>
  );
}
