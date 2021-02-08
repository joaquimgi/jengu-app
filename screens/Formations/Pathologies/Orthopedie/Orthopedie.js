import React from "react";
import { View, Text, Button, Icon } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../../assets/styles/global";
import FormationSectionCard from "../../../../components/FormationSectionCard";

import ortho from "../../../../assets/data/orthopedie.json";

const Orthopedie = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View>
        <Text>Orthopédie</Text>
      </View>
      <View>
        <Text>
          Vous trouverez ici les formations sur toutes les pathologies communes
          que vous serez ammenés à rencontrer tout le long de votre parcours
          officinal
        </Text>
      </View>

      <FlatList
        data={ortho}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.navigation)}
          >
            <FormationSectionCard>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </FormationSectionCard>
          </TouchableOpacity>
        )}
      />
      <View>
        <Button iconLeft bordered>
          <Icon name="download" />
          <Text>Fiche Synthèse</Text>
        </Button>
      </View>
    </View>
  );
};

export default Orthopedie;
