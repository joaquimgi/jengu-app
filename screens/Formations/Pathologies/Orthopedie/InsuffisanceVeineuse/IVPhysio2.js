import React from "react";
import { View, Button, Icon, Text } from "native-base";
import { ProgressBar, Colors } from "react-native-paper";

const IVPhysio2 = ({ navigation }) => {
  return (
    <View>
      <View>
        <ProgressBar progress={0.8} color={Colors.red800} />
      </View>
      <View>
        <Text>Tableau récap</Text>
      </View>
      <View>
        <Button
          iconRight
          light
          onPress={() => {
            navigation.navigate("IVAnamnese");
          }}
        >
          <Text>Chapitre suivant</Text>
          <Icon name="arrow-forward" />
        </Button>
      </View>
    </View>
  );
};

export default IVPhysio2;
