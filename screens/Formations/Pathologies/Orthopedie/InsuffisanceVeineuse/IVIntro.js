import React, { useState, useEffect } from "react";
import { View, Text, Button, Icon } from "native-base";
import { ProgressBar } from "react-native-multicolor-progress-bar";

import data from "../../../../../assets/data/introduction.json";
import { StyleSheet } from "react-native";

const IVIntro = ({ navigation }) => {
  const [questionData, setQuestionData] = useState(data);
  const [currentStep, setCurrentStep] = useState(questionData[0].id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setuserAnswer] = useState("");

  //is a question or an answer displayed ?
  const [Isquestion, setIsQuestion] = useState(true);
  const [results, setResults] = useState([]);
  const [progress, setProgress] = useState([]);

  const vraiClickhandler = () => {
    setuserAnswer("vrai");
    setIsQuestion(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const fauxClickhandler = () => {
    setuserAnswer("faux");
    setIsQuestion(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const nextHandler = () => {
    setuserAnswer("");
    setIsQuestion(true);
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    if (userAnswer === "vrai" || userAnswer === "faux") {
      setResults((oldArray) => [...oldArray, userAnswer]);
    }
  }, [userAnswer]);

  useEffect(() => {
    let lastValue;

    if (currentQuestion != 5) {
      lastValue = 0.166;
    } else {
      lastValue = 0.17;
    }

    if (userAnswer === "vrai" || userAnswer === "faux") {
      if (results[currentStep] === questionData[currentStep].answer) {
        setProgress((oldArray) => [
          ...oldArray,
          { color: "green", value: lastValue },
        ]);
      } else if (results[currentStep] != questionData[currentStep].answer) {
        let lastValue = 0.17;
        setProgress((oldArray) => [
          ...oldArray,
          { color: "red", value: lastValue },
        ]);
      }
    }
  }, [results]);

  return (
    <View>
      <View>
        <Text>Introduction</Text>
      </View>
      <View>
        <Text>
          L’insuffisance veineuse se traduit par un mauvais retour veineux. Le
          sang circulant dans les veines des membres inférieurs présente des
          difficultés à remonter vers le cœur.
        </Text>
      </View>
      <View>
        <Text>
          Laquelle ou lesquelles de ces affirmations que l'on peut vous poser au
          comptoir vous oriente vers une insuffisance veineuse ?
        </Text>
      </View>
      <View style={styles.progress}>
        <ProgressBar
          backgroundBarStyle={{
            alignItems: "stretch",
            backgroundColor: "#bbbbbb",
            borderRadius: 8.5,
            height: 12,
          }}
          arrayOfProgressObjects={progress}
        />
      </View>
      <View>
        <View>
          <Text>"{questionData[currentStep].question}"</Text>
        </View>

        {userAnswer !== "" && (
          <View>
            {userAnswer === questionData[currentStep].answer && (
              <View>
                <Text style={{ color: "green" }}>
                  Bonne réponse {questionData[currentStep].answerTextVrai}
                </Text>
              </View>
            )}
            {userAnswer !== questionData[currentStep].answer && (
              <View>
                <Text style={{ color: "red" }}>
                  Mauvaise réponse ! {questionData[currentStep].answerTextFaux}
                </Text>
              </View>
            )}
          </View>
        )}
        {Isquestion && (
          <View>
            <Button iconLeft light onPress={vraiClickhandler}>
              <Icon name="check-circle" type="FontAwesome5" />
              <Text>Vrai</Text>
            </Button>
            <Button iconLeft light onPress={fauxClickhandler}>
              <Icon name="times-circle" type="FontAwesome5" />
              <Text>Faux</Text>
            </Button>
          </View>
        )}
        {!Isquestion && currentStep !== 5 && (
          <View>
            <Button iconRight light onPress={nextHandler}>
              <Text>Question suivante</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        )}
      </View>

      {currentQuestion === 6 && (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    padding: 40,
  },
});

export default IVIntro;
