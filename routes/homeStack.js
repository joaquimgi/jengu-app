import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Header from "../components/Header";
import Pathologie from "../screens/Formations/Pathologies/Pathologie";
import Orthopedie from "../screens/Formations/Pathologies/Orthopedie/Orthopedie";
import IVLanding from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVLanding";
import IVIntro from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVIntro";
import IVAnamnese from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVAnamnese";
import IVPhysio from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVPhysio";
import IVPhysio2 from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVPhysio2";
import IVStrategie from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVStrategie";
import IVPhyto from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVPhyto";
import IVAroma from "../screens/Formations/Pathologies/Orthopedie/InsuffisanceVeineuse/IVAroma";

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => (
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
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title="Home" />,
        };
      }}
    />
    <Screen
      name="Pathologies"
      component={Pathologie}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Pathologies" />
          ),
        };
      }}
    />
    <Screen
      name="Orthopedie"
      component={Orthopedie}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Orthopédie" />
          ),
        };
      }}
    />
    <Screen
      name="IVLanding"
      component={IVLanding}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVIntro"
      component={IVIntro}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVAnamnese"
      component={IVAnamnese}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVPhysio"
      component={IVPhysio}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVPhysio2"
      component={IVPhysio2}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVStrategie"
      component={IVStrategie}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVPhyto"
      component={IVPhyto}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
    <Screen
      name="IVAroma"
      component={IVAroma}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Insuffisance Veineuse" />
          ),
        };
      }}
    />
  </Navigator>
);
