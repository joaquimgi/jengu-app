import React from "react";
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
  Icon,
} from "native-base";
const cards = [
  {
    text: "Card One",
    name: "One",
    lorem: "lorem ipsummmmm",
  },
  {
    text: "Card 2",
    name: "2",
    lorem: "lorem ipsummmmm",
  },
  {
    text: "Card 3",
    name: "3",
    lorem: "lorem ipsummmmm",
  },
  {
    text: "Card 4",
    name: "4",
    lorem: "lorem ipsummmmm",
  },
];

const About = () => {
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
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text>{item.lorem}</Text>
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: "#ED4A6A" }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          )}
        />
      </View>
    </Container>
  );
};

export default About;
