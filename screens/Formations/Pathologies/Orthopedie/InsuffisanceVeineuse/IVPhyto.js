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
      "La phytothérapie vient en complément de la compression qui reste le traitement de première intention. Chaque personne réagit différemment, le patient est souvent fatigué d'essayer de nouveaux produits, mais malheureusement il n'y a que de cette manière qu'il aura plus de chance d'en trouver un qui lui convienne le plus.",
  },
  {
    title: "Formes très variées",
    description:
      "Les traitements de phytothérapie se présentent sous 2 formes : sous formes orales diverses (comprimé, gelule, sachet, ampoule) et sous formes locales (gel, crème, bombe, spray)",
  },
  {
    title: "Fractions flavonoïques",
    description: "Diosmine : veinotonique et protecteur vasculaire",
  },
  {
    title: "Gingko",
    description:
      "Anticoagulant, augmentation du tonus des veines, diminution de la perméabilité des plus petits vaisseaux (capillaires) ",
    image: require("../../../../../assets/img/Phyto/gingko.jpg"),
  },
  {
    title: "Hamamelis",
    description:
      "Vasculoprotecteur (protégerait l’intégrité de la paroi des vaisseaux sanguins) et veinotonique",
    image: require("../../../../../assets/img/Phyto/hamamelis.jpg"),
  },
  {
    title: "Vigne rouge",
    description:
      "Effet protecteur et stimulant sur les veines et petits vaisseaux sanguins, et capacité à réduire les œdèmes",
    image: require("../../../../../assets/img/Phyto/vignerouge.jpg"),
  },
  {
    title: "Mélilot",
    description:
      "Stimule circulation lymphe (oedème), flavonoïdes protecteurs des vaisseaux et coumarines anticoagulantes",
    image: require("../../../../../assets/img/Phyto/melilot.jpg"),
  },
  {
    title: "Marronier d'Inde",
    description:
      "Effet protecteur et stimulant sur les parois des veines et les petits vaisseaux sanguins, ainsi qu’une capacité à réduire les œdèmes (gonflements) et l’inflammation",
    image: require("../../../../../assets/img/Phyto/marronier.jpg"),
  },
  {
    title: "Cassis",
    description:
      "Diurétique, usage traditionnel dans le traitement de l'insuffisance veineuse",
    image: require("../../../../../assets/img/Phyto/cassis.jpg"),
  },
  {
    title: "Petit-houx",
    description: "Vasoconstrictrices et vasculoprotectrices",
    image: require("../../../../../assets/img/Phyto/petithoux.jpeg"),
  },
];

const IVPhyto = () => {
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

export default IVPhyto;
