import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginScreen from "../screens/LoginScreen";
import { AuthProvider, useAuth } from "../context/AuthContext";
import ProductDetailScreen from "../screens/ProductDetailScreen";

export default function Navigation({ colorScheme }) {
  return (
    <AuthProvider>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Default Screen */}
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      
      {/* Product Detail Screen */}
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />

      {/* Not Found Screen */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}