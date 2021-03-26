import React, { useState, useContext } from 'react';
//Lines
import Yang from '../assets/trigrams/Yang_Nine_Line.png' //9
import Yin from '../assets/trigrams/Yin_Six_Line.png' //6

//coins
import Yang_heads from '../assets/coins/Yang_heads.png';
import Yin_tails from '../assets/coins/Yin_Tails.png';

//trigrams pictures
import Chien from '../assets/trigrams/chien.png'
import Chen from '../assets/trigrams/chen.png'
import Kan from '../assets/trigrams/Kan.png'
import Ken from '../assets/trigrams/Ken.png'
import Kun from '../assets/trigrams/Kun.png'
import Li from '../assets/trigrams/Li.png'
import Sun from '../assets/trigrams/Sun.png'
import Tui from '../assets/trigrams/Tui.png'

//bg for trigrams
import chien_Heaven from '../assets/trigrams/chien_Heaven.jpg'
import chen_Thunder from '../assets/trigrams/chen_Thunder.jpg'
import kan_Water from '../assets/trigrams/Kan_Water.jpg'
import ken_Mountain from '../assets/trigrams/Ken_Mountain.jpg'
import kun_Earth from '../assets/trigrams/Kun_Earth.jpg'
import li_Fire from '../assets/trigrams/Li_Fire.jpg'
import sun_Wind from '../assets/trigrams/Sun_Wind.jpg'
import tui_Lake from '../assets/trigrams/Tui_Lake.jpg'

import { Image, ImageBackground, 
        SafeAreaView, Button,StyleSheet, View,Text} from 'react-native'


import {styles} from '../assets/styles/styles'
import {hexData} from '../assets/dictionary/HexagramDatabase'
import {hexChar} from '../assets/hex/hex'

//animations
import h2h from '../assets/animations/CoinSpin/H2H.png'
import h2t from '../assets/animations/CoinSpin/H2T.png'
import t2h from '../assets/animations/CoinSpin/T2H.png'
import t2t from '../assets/animations/CoinSpin/T2T.png'

//pulled from data base
var HexagramText = ""
var HexagramIMG = ""
var HexagramJudgment = ""

var UpperTrigram = null
var LowerTrigram = null

var genHex = ""
var genLowerTri = ""
var genUpperTri = ""

//Pull the labels out of Trigram database
var UpperTriName = null
var LowerTriName = null
var UpperTriMeaning = null
var LowerTriMeaning = null
var hexName = ""
var ChinaName = ""