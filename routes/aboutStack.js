import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../components/Header";

const { Navigator, Screen } = createStackNavigator();

export const AboutNavigator = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#cf4343",
        height: 60,
      },
      headerTintColor: "#ffffff",
    }}
  >
    <Screen
      name="About"
      component={About}
      options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title="About" />,
        };
      }}
    />
  </Navigator>
);
