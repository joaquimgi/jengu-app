import React, { useCallback, useState } from "react";
import { Text, View, Button, Icon } from "native-base";
import { Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { ScrollView } from "react-native";

const IVPhysio = ({ navigation }) => {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  return (
    <ScrollView>
      <View>
        <Text></Text>
      </View>
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"SgJ_LrAGbJ4"}
          onChangeState={onStateChange}
        />
        <Text>
          Source : Vidéo d’animation médicale sur l’insuffisance veineuse /
          SIGVARIS GROUP
        </Text>
      </View>
      <View>
        <Text>
          Les deux principaux mécanismes de ce processus sont la pompe des
          muscles du mollet et les valvules veineuses. Lorsqu'ils se
          contractent, ils exercent une pression sur les veines, cette pression
          permet au sang de remonter Ce qui entraine l'ouverture des valvules Au
          repos, les muscles du mollet se relâchent et le sang redescend, les
          valvules se referment alors, empêchant le sang de redescendre vers les
          pieds Mais lorsque l'insuffisance veineuse s'installe, les veines se
          dilatent et les valvules ne se referment plus correctement Cela
          entraine un reflux et un ralentissement de la circulation du sang dans
          la veine
        </Text>
      </View>
      <View>
        <Button
          iconRight
          light
          onPress={() => {
            navigation.navigate("IVPhysio2");
          }}
        >
          <Text>Chapitre suivant</Text>
          <Icon name="arrow-forward" />
        </Button>
      </View>
    </ScrollView>
  );
};

export default IVPhysio;
