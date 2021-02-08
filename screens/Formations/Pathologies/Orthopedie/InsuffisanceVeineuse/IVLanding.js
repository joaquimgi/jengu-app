import React from "react";
import { Button, Text, View } from "native-base";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";

const IVLanding = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.section1}>
        <Icon
          raised
          name="compass"
          type="font-awesome"
          color="#f50"
          onPress={() => navigation.navigate("IVIntro")}
          size={40}
        />
        <Text>Introduction</Text>
      </View>
      <View style={styles.section2}>
        <View>
          <Icon
            raised
            name="comment-medical"
            type="font-awesome-5"
            color="#f50"
            onPress={() => navigation.navigate("IVAnamnese")}
            size={40}
          />
          <Text>Anamnèse</Text>
        </View>
        <View>
          <Icon
            raised
            name="book-medical"
            type="font-awesome-5"
            color="#f50"
            onPress={() => navigation.navigate("IVPhysio")}
            size={40}
          />
          <Text>Physiopathologie</Text>
        </View>
      </View>
      <View style={styles.section1}>
        <Icon
          raised
          name="diagnoses"
          type="font-awesome-5"
          color="#f50"
          onPress={() => console.log("hello")}
          size={40}
        />
        <Text>Symptômes</Text>
      </View>
      <View style={styles.section2}>
        <View style={styles.iconStyle}>
          <Icon
            raised
            name="exclamation-circle"
            type="font-awesome-5"
            color="#f50"
            onPress={() => console.log("hello")}
            size={40}
          />
          <Text>Facteurs aggravants</Text>
        </View>
        <View style={styles.iconStyle}>
          <Icon
            raised
            name="hand-holding-medical"
            type="font-awesome-5"
            color="#f50"
            onPress={() => navigation.navigate("IVStrategie")}
            size={40}
          />
          <Text>Stratégie Thérapeutique</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button iconLeft rounded info>
          <Icon name="link" />
          <Text>Liens utiles et ressources</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  section2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconStyle: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "center",
  },
});

export default IVLanding;
