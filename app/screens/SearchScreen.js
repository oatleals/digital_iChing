import React, { useState, useContext } from "react";
import { IconButton } from "react-native-paper";
//import { SearchBar } from "react-native-elements";

//Lines
import Yang from "../assets/trigrams/Yang_Nine_Line.png"; //9
import Yin from "../assets/trigrams/Yin_Six_Line.png"; //6

//coins
import Yang_heads from "../assets/coins/Yang_heads.png";
import Yin_tails from "../assets/coins/Yin_Tails.png";

//trigrams pictures
import Chien from "../assets/trigrams/chien.png";
import Chen from "../assets/trigrams/chen.png";
import Kan from "../assets/trigrams/Kan.png";
import Ken from "../assets/trigrams/Ken.png";
import Kun from "../assets/trigrams/Kun.png";
import Li from "../assets/trigrams/Li.png";
import Sun from "../assets/trigrams/Sun.png";
import Tui from "../assets/trigrams/Tui.png";

//bg for trigrams
import chien_Heaven from "../assets/trigrams/chien_Heaven.jpg";
import chen_Thunder from "../assets/trigrams/chen_Thunder.jpg";
import kan_Water from "../assets/trigrams/Kan_Water.jpg";
import ken_Mountain from "../assets/trigrams/Ken_Mountain.jpg";
import kun_Earth from "../assets/trigrams/Kun_Earth.jpg";
import li_Fire from "../assets/trigrams/Li_Fire.jpg";
import sun_Wind from "../assets/trigrams/Sun_Wind.jpg";
import tui_Lake from "../assets/trigrams/Tui_Lake.jpg";

import {
  Image,
  ImageBackground,
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  Text,
  FlatList
} from "react-native";

//import { styles } from "../assets/styles/styles";
import { hexData } from "../assets/dictionary/HexagramDatabase";
import { hexChar } from "../assets/hex/hex";

//import { styles } from "../assets/styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

var Hexagram = null;

//pulled from data base
var HexagramText = "";
var HexagramIMG = "";
var HexagramJudgment = "";

var UpperTrigram = null;
var LowerTrigram = null;

var genHex = "";
var genLowerTri = "";
var genUpperTri = "";

var trigramBg = chien_Heaven;

//Pull the labels out of Trigram database
var UpperTriName = null;
var LowerTriName = null;
var UpperTriMeaning = null;
var LowerTriMeaning = null;
var ChinaName = "";

var line6 = Yin;
var line5 = Yin;
var line4 = Yin;
var line3 = Yin;
var line2 = Yin;
var line1 = Yin;

function SearchScreen(props) {
  const [hexName, setHex] = useState([
    { name: "chienchien", png: hexChar.one, id: '1', line1: Yin, line2: Yin, line3: Yin, line4: Yin, line5: Yin, line6: Yin},
    { name: "kunkun", png: hexChar.two, id: '2', line1: Yang, line2: Yang, line3: Yang, line4: Yang, line5: Yang, line6: Yang},
    { name: "kanchen", png: hexChar.three, id: "3", line1: Yang, line2: Yin, line3: Yang, line4: Yang, line5: Yang, line6: Yin },
    { name: "kenkan", png: hexChar.four, id: "4", line1: Yin, line2: Yang, line3: Yang, line4: Yang, line5: Yin, line6: Yang },
    { name: "kanchien", png: hexChar.five, id: "5", line1: Yang, line2: Yin, line3: Yang, line4: Yin, line5: Yin, line6: Yin },
    { name: "chienkan", png: hexChar.six, id: "6", line1: Yin, line2: Yin, line3: Yin, line4: Yang, line5: Yin, line6: Yang },
    { name: "kunkan", png: hexChar.seven, id: "7", line1: Yang, line2: Yang, line3: Yang, line4: Yang, line5: Yin, line6: Yang },
    { name: "kankun", png: hexChar.eight, id: "8", line1: Yang, line2: Yin, line3: Yang, line4: Yang, line5: Yang, line6: Yang },
    { name: "sunchien", png: hexChar.nine, id: "9", line1: Yin, line2: Yin, line3: Yang, line4: Yin, line5: Yin, line6: Yin },
    { name: "chiensun", png: hexChar.ten, id: "10", line1: Yin, line2: Yin, line3: Yin, line4: Yang, line5: Yin, line6: Yin },
    { name: "kunchien", png: hexChar.eleven, id: "11", line1: Yang, line2: Yang, line3: Yang, line4: Yin, line5: Yin, line6: Yin },
    { name: "chienkun", png: hexChar.twelve, id: "12", line1: Yin, line2: Yin, line3: Yin, line4: Yang, line5: Yang, line6: Yang },
    { name: "chienli", png: hexChar.thirteen, id: "13", line1: Yin, line2: Yin, line3: Yin, line4: Yin, line5: Yang, line6: Yin },
    { name: "lichien", png: hexChar.fourteen, id: "14", line1: Yin, line2: Yang, line3: Yin, line4: Yin, line5: Yin, line6: Yin },
    { name: "kunken", png: hexChar.fifteen, id: "15", line1: Yang, line2: Yang, line3: Yang, line4: Yin, line5: Yang, line6: Yang },
    { name: "chenkun", png: hexChar.sixteen, id: "16", line1: Yang, line2: Yang, line3: Yin, line4: Yang, line5: Yang, line6: Yang },
    { name: "tuichen", png: hexChar.seventeen, id: "17", line1: Yang, line2: Yin, line3: Yin, line4: Yang, line5: Yang, line6: Yin },
    { name: "kensun ", png: hexChar.eighteen, id: "18", line1: Yin, line2: Yang, line3: Yang, line4: Yin, line5: Yin, line6: Yang },
    { name: "kuntui", png: hexChar.nineteen, id: "19", line1: Yang, line2: Yang, line3: Yang, line4: Yang, line5: Yin, line6: Yin },
    { name: "sunkun", png: hexChar.twenty, id: "20", line1: Yin, line2: Yin, line3: Yang, line4: Yang, line5: Yang, line6: Yang },
    { name: "lichen", png: hexChar.twentyOne, id: "21", line1: Yin, line2: Yang, line3: Yin, line4: Yang, line5: Yang, line6: Yin },
    { name: "kenli", png: hexChar.twentyTwo, id: "22", line1: Yin, line2: Yang, line3: Yang, line4: Yin, line5: Yang, line6: Yin },
    { name: "kenkun", png: hexChar.twentyThree, id: "23", line1: Yin, line2: Yang, line3: Yang, line4: Yang, line5: Yang, line6: Yang },
    { name: "kunchen", png: hexChar.twentyFour, id: "24", line1: Yang, line2: Yang, line3: Yang, line4: Yang, line5: Yang, line6: Yin },
    { name: "chienchen", png: hexChar.twentyFive, id: "25", line1: Yin, line2: Yin, line3: Yin, line4: Yang, line5: Yang, line6: Yin },
    { name: "kenchien", png: hexChar.twentySix, id: "26", line1: Yin, line2: Yang, line3: Yang, line4: Yin, line5: Yin, line6: Yin },
    { name: "kenchen",  png: hexChar.twentySeven, id: "27", line1: Yin, line2: Yang, line3: Yang, line4: Yang, line5: Yang, line6: Yin },
  ]);

  const [hexCharacter, setHexCharacter] =  useState()
  const [hexagramState, setHexagram] = useState();

    //=====================Hexagram Generator=====================

  const hexagramGenerator = (hex) => {
    let result = hexChar.one; //placeholder
    let resultText = "";
    let resultTextIMG = "";
    let resultTextJudgement = "";

    for (var item in hexData) {
      //search the hexagram dictionary
      if (hex == hexData[item].id) {
        console.log("Match!");
        result = item;
        resultText = hexData[item].lines;
        resultTextIMG = hexData[item].image;
        resultTextJudgement = hexData[item].judgement;
        hexName = hexData[item].name;
        ChinaName = hexData[item].ChinaName;

        break;
      }
    }
    console.log("Your result was " + result);

    Hexagram = result; //assign hexagram
    HexagramText = resultText; //assign global text
    HexagramIMG = resultTextIMG;
    HexagramJudgment = resultTextJudgement;

    return result;
  };

  //=====================Trigram Generator=====================

  const trigramGenerator = (Trigram) => {
    var trigramDict = {
      //is it worth it to use a dictionary?
      Chien: "333",
      Chen: "344",
      Kan: "434",
      Ken: "443",
      Kun: "444",
      Li: "343",
      Sun: "433",
      Tui: "334",
    };

    let result = { png: Chien, name: "chien", meaning: "heaven" }; //chien is a placeholder
    let resultBg = "";

    //code can be simplified into a For Loop
    if (Trigram == trigramDict.Chien) {
      //chien
      result.png = Chien;
      resultBg = "chien_Heaven";
      result.name = "Chien";
      result.meaning = "Heaven";
    } else if (Trigram == trigramDict.Chen) {
      //chen
      result.png = Chen;
      resultBg = "chen_Thunder";
      result.name = "Chen";
      result.meaning = "Thunder";
    } else if (Trigram == trigramDict.Kan) {
      //Kan
      result.png = Kan;
      resultBg = "kan_Water";
      result.name = "Kan";
      result.meaning = "Water";
    } else if (Trigram == trigramDict.Ken) {
      //Ken
      result.png = Ken;
      resultBg = "ken_Mountain";
      result.name = "Ken";
      result.meaning = "Mountain";
    } else if (Trigram == trigramDict.Kun) {
      //Kun
      result.png = Kun;
      resultBg = "kun_Earth";
      result.name = "Kun";
      result.meaning = "Earth";
    } else if (Trigram == trigramDict.Li) {
      //Li
      result.png = Li;
      resultBg = "li_Fire";
      result.name = "Li";
      result.meaning = "Fire";
    } else if (Trigram == trigramDict.Sun) {
      //Sun
      result.png = Sun;
      resultBg = "sun_Wind";
      result.name = "Sun";
      result.meaning = "Wind";
    } else if (Trigram == trigramDict.Tui) {
      //Tui
      result.png = Tui;
      resultBg = "tui_Lake";
      result.name = "Tui";
      result.meaning = "Lake";
    }

    trigramBg = resultBg;
    return result;
  };

  var hexObj = {
    ChinaName,
    hexName,
    Hexagram,
    HexagramText,
    HexagramIMG,
    HexagramJudgment,
    trigramBg,
    UpperTriMeaning,
    UpperTriName,
    LowerTriMeaning,
    LowerTriName,
  };
  var lineObj = { line1, line2, line3, line4, line5, line6 };

  const create = (item) => {
    line1 = item.line1
    line2 = item.line2
    line3 = item.line3
    line4 = item.line4
    line5 = item.line5
    line6 = item.line6

    genLowerTri;
    genUpperTri;
    genHex;

    console.log(item.id);

    genLowerTri += line1.toString();
    genLowerTri += line2.toString();
    genLowerTri += line3.toString();
    genUpperTri += line4.toString();
    genUpperTri += line5.toString();
    genUpperTri += line6.toString();

    LowerTrigram = trigramGenerator(genLowerTri).png;
    LowerTriName = trigramGenerator(genLowerTri).name;
    LowerTriMeaning = trigramGenerator(genLowerTri).meaning;

    UpperTrigram = trigramGenerator(genUpperTri).png;
    UpperTriName = trigramGenerator(genUpperTri).name;
    UpperTriMeaning = trigramGenerator(genUpperTri).meaning;

    hexagramGenerator(genHex.concat(genLowerTri + genUpperTri));
  }

  const pressHandler = (item) => {
    create(item);
    props.navigation.navigate("Hexagram", { hexObj, lineObj })
  }
  return (
    <ImageBackground
      source={require("../assets/background/backgroundGradient.png")}
      style={styles.image}
    >
      <View style={styles.container}>
      <View style={styles.item}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={hexName}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <Image source = {item.png} style = {styles.hexChar} /> 
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          icon="home"
          color="#008b8b"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    padding: 20,
    alignItems: "center",
    width: 100,
  },
  hexChar: {
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 40,
    width: 50,
    height: 50,
    resizeMode: "contain",
    justifyContent: "flex-start"
  },
  item: {
    marginTop: 24,
    padding: 10,
    backgroundColor: '#008080',
    fontSize: 20,
    fontFamily: 'futura-regular'
  }
});

export default SearchScreen;
