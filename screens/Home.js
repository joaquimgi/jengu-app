import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import { globalStyles } from "../assets/styles/global";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
  {
    title: "Conseil par domaine",
    icon: "domaine",
    route: "",
    color: "#F0B6B6",
    key: "A",
  },
  {
    title: "Conseil par pathologie",
    icon: "patho",
    route: "",
    color: "#F9CF90",
    key: "B",
  },
  {
    title: "Marketing",
    icon: "marketing",
    route: "",
    color: "#CFFFCE",
    key: "C",
  },
  {
    title: "Vaccination",
    icon: "vaccination",
    route: "",
    color: "#CAE2FF",
    key: "D",
  },
  { title: "Legislation", icon: "law", route: "", color: "#FFF1CD", key: "E" },
  {
    title: "Gestion Pharma",
    icon: "gestion",
    route: "",
    color: "#FFCECE",
    key: "F",
  },
  {
    title: "Management",
    icon: "management",
    route: "",
    color: "#F2CEFF",
    key: "G",
  },
  {
    title: "Communication",
    icon: "com",
    route: "",
    color: "#CEFFFC",
    key: "H",
  },
  { title: "Marques", icon: "brand", route: "", color: "#FBFFCE", key: "I" },
  { title: "LGO", icon: "lgo", route: "", color: "#FFCEF4", key: "K" },
  { title: "DPC", icon: "dpc", route: "", color: "#ACE8AB", key: "L" },
  {
    title: "Gestion de comptoir",
    icon: "comptoir",
    route: "",
    color: "#B6D3FF",
    key: "M",
  },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

const Home = ({ navigation }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "patho":
        return (
          <MaterialCommunityIcons
            name="bacteria-outline"
            size={45}
            color="black"
          />
        );
      case "domaine":
        return <FontAwesome5 name="book-medical" size={40} color="black" />;
      case "law":
        return <Octicons name="law" size={45} color="black" />;
      case "marketing":
        return <AntDesign name="barschart" size={40} color="black" />;
      case "brand":
        return <FontAwesome name="flag" size={40} color="black" />;
      case "management":
        return (
          <MaterialCommunityIcons
            name="thumbs-up-down"
            size={40}
            color="black"
          />
        );
      case "com":
        return <AntDesign name="message1" size={40} color="black" />;
      case "comptoir":
        return <Ionicons name="people-sharp" size={40} color="black" />;
      case "vaccination":
        return <MaterialIcons name="biotech" size={45} color="black" />;
      case "dpc":
        return <FontAwesome5 name="compass" size={40} color="black" />;
      case "lgo":
        return (
          <MaterialCommunityIcons name="monitor" size={40} color="black" />
        );
      case "gestion":
        return <AntDesign name="linechart" size={40} color="black" />;
      default:
        break;
    }
  };

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor: `${item.color}` }]}
        onPress={() => navigation.navigate("Pathologies")}
      >
        {renderIcon(item.icon)}
        <Text style={styles.itemText}> {item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / 2.5, // approximate a square
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#000000",
  },
});

export default Home;
