import React, { useState, useContext, useEffect } from "react";
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

//animations
import h2h from "../assets/animations/CoinSpin/H2H.png";
import h2t from "../assets/animations/CoinSpin/H2T.png";
import t2h from "../assets/animations/CoinSpin/T2H.png";
import t2t from "../assets/animations/CoinSpin/T2T.png";
//import { styles } from "../assets/styles/styles";
import { LongPressGestureHandler, TouchableOpacity } from "react-native-gesture-handler";

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
var HexagramName = "";
var ChinaName = "";

var line6 = Yin;
var line5 = Yin;
var line4 = Yin;
var line3 = Yin;
var line2 = Yin;
var line1 = Yin;

function SearchScreen(props) {
  const [hexName, setHex] = useState([ //somebody please put this in a separate .js file
    { name: "one", png: hexChar.one, id: '1', line1: 4, line2: 4, line3: 4, line4: 4, line5: 4, line6: 4 },
    { name: "two", png: hexChar.two, id: '2', line1: 3, line2: 3, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "three", png: hexChar.three, id: "3", line1: 3, line2: 4, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "four", png: hexChar.four, id: "4", line1: 4, line2: 3, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "five", png: hexChar.five, id: "5", line1: 3, line2: 4, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "six", png: hexChar.six, id: "6", line1: 4, line2: 4, line3: 4, line4: 3, line5: 4, line6: 3 },
    { name: "seven", png: hexChar.seven, id: "7", line1: 3, line2: 3, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "eight", png: hexChar.eight, id: "8", line1: 3, line2: 4, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "nine", png: hexChar.nine, id: "9", line1: 4, line2: 4, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "ten", png: hexChar.ten, id: "10", line1: 4, line2: 4, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "eleven", png: hexChar.eleven, id: "11", line1: 3, line2: 3, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "twelve", png: hexChar.twelve, id: "12", line1: 4, line2: 4, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "thirteen", png: hexChar.thirteen, id: "13", line1: 4, line2: 4, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "fourteen", png: hexChar.fourteen, id: "14", line1: 4, line2: 3, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "fifteen", png: hexChar.fifteen, id: "15", line1: 3, line2: 3, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "sixteen", png: hexChar.sixteen, id: "16", line1: 3, line2: 3, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "seventeen", png: hexChar.seventeen, id: "17", line1: 3, line2: 4, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "eighteen ", png: hexChar.eighteen, id: "18", line1: 4, line2: 3, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "nineteen", png: hexChar.nineteen, id: "19", line1: 3, line2: 3, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "twenty", png: hexChar.twenty, id: "20", line1: 4, line2: 4, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "twentyOne", png: hexChar.twentyOne, id: "21", line1: 4, line2: 3, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "twentyTwo", png: hexChar.twentyTwo, id: "22", line1: 4, line2: 3, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "twentyThree", png: hexChar.twentyThree, id: "23", line1: 4, line2: 3, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "twentyFour", png: hexChar.twentyFour, id: "24", line1: 3, line2: 3, line3: 3, line4: 3, line5: 3, line6: 4 },
    { name: "twentyFive", png: hexChar.twentyFive, id: "25", line1: 4, line2: 4, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "twentySix", png: hexChar.twentySix, id: "26", line1: 4, line2: 3, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "twentySeven", png: hexChar.twentySeven, id: "27", line1: 4, line2: 3, line3: 3, line4: 3, line5: 3, line6: 4 },
    { name: "twentyEight", png: hexChar.twentyEight, id: "28", line1: 3, line2: 4, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "twentyNine", png: hexChar.twentyNine, id: "29", line1: 3, line2: 4, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "thirty", png: hexChar.thirty, id: "30", line1: 4, line2: 3, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "thirtyOne", png: hexChar.thirtyOne, id: "31", line1: 3, line2: 4, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "thirtyTwo", png: hexChar.thirtyTwo, id: "32", line1: 3, line2: 3, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "thirtyThree", png: hexChar.thirtyThree, id: "33", line1: 4, line2: 4, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "thirtyFour", png: hexChar.thirtyFour, id: "34", line1: 3, line2: 3, line3: 4, line4: 4, line5: 4, line6: 4 },
    { name: "thirtyFive", png: hexChar.thirtyFive, id: "35", line1: 4, line2: 3, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "thirtySix", png: hexChar.thirtySix, id: "36", line1: 3, line2: 3, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "thirtySeven", png: hexChar.thirtySeven, id: "37", line1: 4, line2: 4, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "thirtyEight", png: hexChar.thirtyEight, id: "38", line1: 4, line2: 3, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "thirtyNine", png: hexChar.thirtyNine, id: "39", line1: 3, line2: 4, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "forty", png: hexChar.forty, id: "40", line1: 3, line2: 3, line3: 4, line4: 3, line5: 4, line6: 3 },
    { name: "fortyOne", png: hexChar.fortyOne, id: "41", line1: 4, line2: 3, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "fortyTwo", png: hexChar.fortyTwo, id: "42", line1: 4, line2: 4, line3: 3, line4: 3, line5: 3, line6: 4 },
    { name: "fortyThree", png: hexChar.fortyThree, id: "43", line1: 3, line2: 4, line3: 4, line4: 4, line5: 4, line6: 4 },
    { name: "fortyFour", png: hexChar.fortyFour, id: "44", line1: 4, line2: 4, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "fortyFive", png: hexChar.fortyFive, id: "45", line1: 3, line2: 4, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "fortySix", png: hexChar.fortySix, id: "46", line1: 3, line2: 3, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "fortySeven", png: hexChar.fortySeven, id: "47", line1: 3, line2: 4, line3: 4, line4: 3, line5: 4, line6: 3 },
    { name: "fortyEight", png: hexChar.fortyEight, id: "48", line1: 3, line2: 4, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "fortyNine", png: hexChar.fortyNine, id: "49", line1: 3, line2: 4, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "fifty", png: hexChar.fifty, id: "50", line1: 4, line2: 3, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "fiftyOne", png: hexChar.fiftyOne, id: "51", line1: 3, line2: 3, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "fiftyTwo", png: hexChar.fiftyTwo, id: "52", line1: 4, line2: 3, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "fiftyThree", png: hexChar.fiftyThree, id: "53", line1: 4, line2: 4, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "fiftyFour", png: hexChar.fiftyFour, id: "54", line1: 3, line2: 3, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "fiftyFive", png: hexChar.fiftyFive, id: "55", line1: 3, line2: 3, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "fiftySix", png: hexChar.fiftySix, id: "56", line1: 4, line2: 3, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "fiftySeven", png: hexChar.fiftySeven, id: "57", line1: 4, line2: 4, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "fiftyEight", png: hexChar.fiftyEight, id: "58", line1: 3, line2: 4, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "fiftyNine", png: hexChar.fiftyNine, id: "59", line1: 4, line2: 4, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "sixty", png: hexChar.sixty, id: "60", line1: 3, line2: 4, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "sixtyOne", png: hexChar.sixtyOne, id: "61", line1: 4, line2: 4, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "sixtyTwo", png: hexChar.sixtyTwo, id: "62", line1: 3, line2: 3, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "sixtyThree", png: hexChar.sixtyThree, id: "63", line1: 3, line2: 4, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "sixtyFour", png: hexChar.sixtyFour, id: "64", line1: 4, line2: 3, line3: 4, line4: 3, line5: 4, line6: 3 }
  ]
  );



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



  const pressHandler = (item) => {

    line1 = item.line1
    line2 = item.line2
    line3 = item.line3
    line4 = item.line4
    line5 = item.line5
    line6 = item.line6

    genLowerTri;
    genUpperTri;
    genHex;

    genLowerTri += item.line1.toString();
    genLowerTri += item.line2.toString();
    genLowerTri += item.line3.toString();

    genUpperTri += item.line4.toString();
    genUpperTri += item.line5.toString();
    genUpperTri += item.line6.toString();

    console.log("Trigram" + genLowerTri)

    LowerTrigram = trigramGenerator(genLowerTri).png
    LowerTriName = trigramGenerator(genLowerTri).name
    LowerTriMeaning = trigramGenerator(genLowerTri).meaning

    UpperTrigram = trigramGenerator(genUpperTri).png
    UpperTriName = trigramGenerator(genUpperTri).name
    UpperTriMeaning = trigramGenerator(genUpperTri).meaning

    HexagramText = hexData[item.name].lines;
    HexagramIMG = hexData[item.name].image
    HexagramJudgment = hexData[item.name].judgement
    HexagramName = hexData[item.name].name
    ChinaName = hexData[item.name].ChinaName


    var hexObj = {
      ChinaName,
      HexagramName,
      HexagramText,
      HexagramIMG,
      HexagramJudgment,
      trigramBg,
      UpperTriMeaning,
      UpperTriName,
      LowerTriMeaning,
      LowerTriName,
    }

    var lineObj = { line1, line2, line3, line4, line5, line6 };

    props.navigation.navigate("HexagramScreen", { hexObj, lineObj })
  }

  var initalElements = [
    { name: "one", png: hexChar.one, id: '1', line1: 4, line2: 4, line3: 4, line4: 4, line5: 4, line6: 4 },
    { name: "two", png: hexChar.two, id: '2', line1: 3, line2: 3, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "three", png: hexChar.three, id: "3", line1: 3, line2: 4, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "four", png: hexChar.four, id: "4", line1: 4, line2: 3, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "five", png: hexChar.five, id: "5", line1: 3, line2: 4, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "six", png: hexChar.six, id: "6", line1: 4, line2: 4, line3: 4, line4: 3, line5: 4, line6: 3 },
    { name: "seven", png: hexChar.seven, id: "7", line1: 3, line2: 3, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "eight", png: hexChar.eight, id: "8", line1: 3, line2: 4, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "nine", png: hexChar.nine, id: "9", line1: 4, line2: 4, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "ten", png: hexChar.ten, id: "10", line1: 4, line2: 4, line3: 4, line4: 3, line5: 4, line6: 4 },
  ]

  const addHex = () => {
    console.log("Adding more hexagrams")
    var newArray = [...initialElements, { name: "eleven", png: hexChar.eleven, id: "11", line1: 3, line2: 3, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "twelve", png: hexChar.twelve, id: "12", line1: 4, line2: 4, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "thirteen", png: hexChar.thirteen, id: "13", line1: 4, line2: 4, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "fourteen", png: hexChar.fourteen, id: "14", line1: 4, line2: 3, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "fifteen", png: hexChar.fifteen, id: "15", line1: 3, line2: 3, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "sixteen", png: hexChar.sixteen, id: "16", line1: 3, line2: 3, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "seventeen", png: hexChar.seventeen, id: "17", line1: 3, line2: 4, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "eighteen ", png: hexChar.eighteen, id: "18", line1: 4, line2: 3, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "nineteen", png: hexChar.nineteen, id: "19", line1: 3, line2: 3, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "twenty", png: hexChar.twenty, id: "20", line1: 4, line2: 4, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "twentyOne", png: hexChar.twentyOne, id: "21", line1: 4, line2: 3, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "twentyTwo", png: hexChar.twentyTwo, id: "22", line1: 4, line2: 3, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "twentyThree", png: hexChar.twentyThree, id: "23", line1: 4, line2: 3, line3: 3, line4: 3, line5: 3, line6: 3 },
    { name: "twentyFour", png: hexChar.twentyFour, id: "24", line1: 3, line2: 3, line3: 3, line4: 3, line5: 3, line6: 4 },
    { name: "twentyFive", png: hexChar.twentyFive, id: "25", line1: 4, line2: 4, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "twentySix", png: hexChar.twentySix, id: "26", line1: 4, line2: 3, line3: 3, line4: 4, line5: 4, line6: 4 },
    { name: "twentySeven", png: hexChar.twentySeven, id: "27", line1: 4, line2: 3, line3: 3, line4: 3, line5: 3, line6: 4 },
    { name: "twentyEight", png: hexChar.twentyEight, id: "28", line1: 3, line2: 4, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "twentyNine", png: hexChar.twentyNine, id: "29", line1: 3, line2: 4, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "thirty", png: hexChar.thirty, id: "30", line1: 4, line2: 3, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "thirtyOne", png: hexChar.thirtyOne, id: "31", line1: 3, line2: 4, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "thirtyTwo", png: hexChar.thirtyTwo, id: "32", line1: 3, line2: 3, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "thirtyThree", png: hexChar.thirtyThree, id: "33", line1: 4, line2: 4, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "thirtyFour", png: hexChar.thirtyFour, id: "34", line1: 3, line2: 3, line3: 4, line4: 4, line5: 4, line6: 4 },
    { name: "thirtyFive", png: hexChar.thirtyFive, id: "35", line1: 4, line2: 3, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "thirtySix", png: hexChar.thirtySix, id: "36", line1: 3, line2: 3, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "thirtySeven", png: hexChar.thirtySeven, id: "37", line1: 4, line2: 4, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "thirtyEight", png: hexChar.thirtyEight, id: "38", line1: 4, line2: 3, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "thirtyNine", png: hexChar.thirtyNine, id: "39", line1: 3, line2: 4, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "forty", png: hexChar.forty, id: "40", line1: 3, line2: 3, line3: 4, line4: 3, line5: 4, line6: 3 },
    { name: "fortyOne", png: hexChar.fortyOne, id: "41", line1: 4, line2: 3, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "fortyTwo", png: hexChar.fortyTwo, id: "42", line1: 4, line2: 4, line3: 3, line4: 3, line5: 3, line6: 4 },
    { name: "fortyThree", png: hexChar.fortyThree, id: "43", line1: 3, line2: 4, line3: 4, line4: 4, line5: 4, line6: 4 },
    { name: "fortyFour", png: hexChar.fortyFour, id: "44", line1: 4, line2: 4, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "fortyFive", png: hexChar.fortyFive, id: "45", line1: 3, line2: 4, line3: 4, line4: 3, line5: 3, line6: 3 },
    { name: "fortySix", png: hexChar.fortySix, id: "46", line1: 3, line2: 3, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "fortySeven", png: hexChar.fortySeven, id: "47", line1: 3, line2: 4, line3: 4, line4: 3, line5: 4, line6: 3 },
    { name: "fortyEight", png: hexChar.fortyEight, id: "48", line1: 3, line2: 4, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "fortyNine", png: hexChar.fortyNine, id: "49", line1: 3, line2: 4, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "fifty", png: hexChar.fifty, id: "50", line1: 4, line2: 3, line3: 4, line4: 4, line5: 4, line6: 3 },
    { name: "fiftyOne", png: hexChar.fiftyOne, id: "51", line1: 3, line2: 3, line3: 4, line4: 3, line5: 3, line6: 4 },
    { name: "fiftyTwo", png: hexChar.fiftyTwo, id: "52", line1: 4, line2: 3, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "fiftyThree", png: hexChar.fiftyThree, id: "53", line1: 4, line2: 4, line3: 3, line4: 4, line5: 3, line6: 3 },
    { name: "fiftyFour", png: hexChar.fiftyFour, id: "54", line1: 3, line2: 3, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "fiftyFive", png: hexChar.fiftyFive, id: "55", line1: 3, line2: 3, line3: 4, line4: 4, line5: 3, line6: 4 },
    { name: "fiftySix", png: hexChar.fiftySix, id: "56", line1: 4, line2: 3, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "fiftySeven", png: hexChar.fiftySeven, id: "57", line1: 4, line2: 4, line3: 3, line4: 4, line5: 4, line6: 3 },
    { name: "fiftyEight", png: hexChar.fiftyEight, id: "58", line1: 3, line2: 4, line3: 4, line4: 3, line5: 4, line6: 4 },
    { name: "fiftyNine", png: hexChar.fiftyNine, id: "59", line1: 4, line2: 4, line3: 3, line4: 3, line5: 4, line6: 3 },
    { name: "sixty", png: hexChar.sixty, id: "60", line1: 3, line2: 4, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "sixtyOne", png: hexChar.sixtyOne, id: "61", line1: 4, line2: 4, line3: 3, line4: 3, line5: 4, line6: 4 },
    { name: "sixtyTwo", png: hexChar.sixtyTwo, id: "62", line1: 3, line2: 3, line3: 4, line4: 4, line5: 3, line6: 3 },
    { name: "sixtyThree", png: hexChar.sixtyThree, id: "63", line1: 3, line2: 4, line3: 3, line4: 4, line5: 3, line6: 4 },
    { name: "sixtyFour", png: hexChar.sixtyFour, id: "64", line1: 4, line2: 3, line3: 4, line4: 3, line5: 4, line6: 3 }
    ];
    setHexState(newArray);
  }

  const [hexState, setHexState] = useState(initalElements); //To show ur remaining Text


  return (
    <ImageBackground
      source={require("../assets/background/backgroundGradient.png")}
      style={styles.image}>
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <IconButton
            icon="arrow-left"
            color="#008b8b"
            size={50}
            onPress={() => props.navigation.navigate("Home")}
          />

          <Text style={styles.textHeader}>Hexagrams</Text>


        </View>

        <View style={styles.item}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={hexState}
            renderItem={({ item }) => (

              <TouchableOpacity onPress={() => pressHandler(item)}>
                <View style={styles.flatList}>
                  <Image source={item.png} style={styles.hexChar} />
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <Button color="#008b8b" title="View more" onPress={() => { addHex }} />


        </View>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  flatList: {
    flex: 1, flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 2, borderColor: '#c8eae4', paddingLeft: 20
  },

  textHeader: {
    padding: 10, paddingLeft: 40, paddingTop: 30, fontSize: 28, color: "black", fontFamily: 'futura-book'

  },
  textStyle: {
    paddingTop: 10, paddingLeft: 10, fontSize: 20, color: "#c8eae4"

  },

  container: {
    paddingTop: 5,
    flex: 0.8,
    resizeMode: "contain",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },


  buttonContainer: {
    flexDirection: 'row',
    width: 200,
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
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: '#008080',
    fontSize: 25,
    fontFamily: 'futura-book'
  }
});

export default SearchScreen;
