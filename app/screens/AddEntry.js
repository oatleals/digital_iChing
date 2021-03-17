import React, {useState} from 'react'
import { Button, SafeAreaView, ImageBackground, Text, StyleSheet, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler'
//import {Text} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

var entryTitle = AsyncStorage.getItem("question")

function AddEntry(props){

    const [entryDescription, setEntryDescription] = useState()

    const saveEntry = async() => {
        try{
            await AsyncStorage.setItem("entryDescription", entryDescription)   
        } catch (err){
            alert(err)
        }
    }

    /*const getTitle = async() => {
        try{
            const question = await AsyncStorage.getItem("question")

            if (question !== null) {
                setEntryTitle(question)
            }
        } catch (err) {
            alert("Failed to fetch the data from storage")
        }
    }*/


    //const [entryTitle, setEntryTitle] = useState()

                    //<Text style = {styles.questionTitle}> useEffect(() => { getTitle() }, []) </Text>
    return(
        <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>

            <View style = {styles.container}>

                <Text style = {{fontFamily: 'futura-bold', fontSize: 20, textAlign: "center", alignContent: 'center'}}>Description:</Text>
                <TextInput style = {styles.input}
                    placeholder = "Enter a description"

                    onChangeText= {entryDescription => setEntryDescription(entryDescription)}
                    value = {entryDescription}
                />

                <Button title="Add to Jounral" color = "#008b8b" onPress={() => (props.navigation.navigate("Home"), saveEntry(), alert("Journal Entry Saved"))} />

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    },

    /*iconButton: {
        backgroundColor: '#008080',
        position: 'absolute',
        right: 0,
        top: 40,
        flex: 2
    },*/

    questionTitle: {
        fontFamily: 'futura-bold',
        fontSize: 20,
        marginBottom: 15
    },

    buttonContainer: {
        flex: 1,
        marginTop: 20,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    backgroundImage: {
        paddingBottom: 100,
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
      },

    /*titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },

    title: {
        fontSize: 24,
        marginBottom: 16
    },*/

    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 10
    }
})

export default AddEntry