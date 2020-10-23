import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 16
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",

 
  },
  backgroundImage: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'cover', // or 'stretch'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200,
    flex: 0.5,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});