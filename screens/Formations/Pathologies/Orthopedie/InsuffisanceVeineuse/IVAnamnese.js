import React, { useState } from "react";
import { Text, View, Button, Icon } from "native-base";
import { TextInput } from "react-native";

const IVAnamnese = ({ navigation }) => {
  const [step, setStep] = useState(0);

  return (
    <View>
      {step === 0 && (
        <>
          <View>
            <Text>
              Un patient se présente à la pharmacie, et se plaint d’avoir mal
              aux jambes. Écrivez ci-dessous 4 questions que vous pouvez lui
              poser afin d’orienter votre diagnostic et la prise en charge du
              patient.
            </Text>
          </View>
          <View>
            <Text>
              L’exercice est libre, et sert à vous projeter dans la situation si
              elle se présente un jour à vous (et elle se présentera).
            </Text>
          </View>
          <View>
            <TextInput
              multiline
              numberOfLines={10}
              style={{ height: 200, borderColor: "gray", borderWidth: 1 }}
            />
          </View>
          <View>
            <Button
              iconRight
              light
              onPress={() => {
                setStep(1);
              }}
            >
              <Text>Découvrir nos conseils</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        </>
      )}

      {step === 1 && (
        <>
          <View>
            <Text>
              Afin d'identifier si le patient est atteint d'Insuffisance
              Veineuse, vous pouvez poser les questions suivantes :
            </Text>
          </View>
          <View>
            <Text>- Depuis quand ?</Text>
          </View>
          <View>
            <Text>- A quel niveau est la douleur ? Aux deux jambes ?</Text>
          </View>
          <View>
            <Text>- Est-ce que les jambes gonflent dans la journée ?</Text>
          </View>
          <View>
            <Text>- Est-ce qu'il prend des traitements ?</Text>
          </View>
          <View>
            <Text>- Est-ce qu'il y a des varices et où ?</Text>
          </View>
          <View>
            <Text>
              - Est-ce qu'il travaille toute la journée debout / assis ?
            </Text>
          </View>
          <View>
            <Text>
              - Est-ce que la douleur est amplifiée suite à un long moment
              debout / assis ?
            </Text>
          </View>
          <View>
            <Text>
              - Est-ce qu'on lui a déjà proposé des traitements pour
              l'insuffisance veineuse ?
            </Text>
          </View>
          <View>
            <Text>
              Il n'y a pas de mauvaise réponse ! Tu peux t'inspirer de ces
              propositions, mais ça reste toujours à adapter selon le cas qui se
              présente :)
            </Text>
          </View>

          <View>
            <Button
              iconRight
              light
              onPress={() => navigation.navigate("IVPhysio")}
            >
              <Text>Chapitre suivant</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        </>
      )}
    </View>
  );
};

export default IVAnamnese;
