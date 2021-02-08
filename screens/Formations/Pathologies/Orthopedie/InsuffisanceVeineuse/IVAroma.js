import React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from "native-base";

const cards = [
  {
    title: "Essentiel à retenir",
    description:
      "L'Aromathérapie vient en complément de la compression qui reste le traitement de première intention. Chaque personne réagit différemment, le patient est souvent fatigué d'essayer de nouveaux produits, mais malheureusement il n'y a que de cette manière qu'il aura plus de chance d'en trouver un qui lui convienne le plus.",
  },
  {
    title: "Menthe des champs",
    description:
      "Rafraîchissant, anti-inflammatoire, antalgique, phlébotonique et lympthotonique",
    image: require("../../../../../assets/img/Aroma/menthe.jpg"),
  },
  {
    title: "Genèvrier",
    description:
      "Anti-inflammatoire, antalgique, phlébotonique et lympthotonique il est aussi décongestionnant et anti-hématomes",
    image: require("../../../../../assets/img/Aroma/genevrier.jpg"),
  },
  {
    title: "Palmarosa",
    description: "Antalgique et décongestionnant",
    image: require("../../../../../assets/img/Aroma/palmarosa.jpg"),
  },
  {
    title: "Niaouli",
    description: "Phlébotonique, lympthotonique et décongestionnante",
    image: require("../../../../../assets/img/Aroma/niaouli.webp"),
  },
  {
    title: "Eucalyptus citronné",
    description: "Antalgique et anti-inflammatoire",
    image: require("../../../../../assets/img/Aroma/eucalyptus.png"),
  },
  {
    title: "Immortelle",
    description:
      "Antalgique, anti-hématome, décongestionnante et anti-inflammatoire",
    image: require("../../../../../assets/img/Aroma/immortelle.jpg"),
  },
  {
    title: "Lemongrass (citronelle)",
    description: "Antalgique et anti-inflammatoire",
    image: require("../../../../../assets/img/Aroma/citronelle.jpg"),
  },
];

const IVAroma = () => {
  return (
    <Container>
      <Header />
      <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={(item) => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.title}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Text>{item.description}</Text>
              </CardItem>
            </Card>
          )}
        />
      </View>
    </Container>
  );
};

export default IVAroma;
