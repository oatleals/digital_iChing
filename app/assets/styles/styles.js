import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'cover', // or 'stretch'
  },
  backgroundImage: {
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
  },
  hexLine: {
    width: 150,
    height: 25,
    resizeMode: "contain",
    justifyContent: "flex-start"
  },
  coinButton: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  },
  item: {
    backgroundColor: '#008080',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});