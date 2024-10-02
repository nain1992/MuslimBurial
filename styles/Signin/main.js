import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    logobody: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      alignSelf: "center",
    },
    textwrapper: {
      height: getPercent(8, height),
      justifyContent: "center",
    },
    everytext: {
      textAlign: "center",
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#4B4B4B",
    },
    emailtext: {
      fontFamily: "Bold",
      fontSize: rf(17),
      color: "#4B4B4B",
      paddingLeft: getPercent(5, width),
    },
    btnwrapper: {
      height: getPercent(10, height),
      justifyContent: "center",
      alignItems: "center",
    },
    orwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    border: {
      width: "45%",
      borderWidth: 0.5,
      borderColor: "#8A8A8A",
      height: 0,
    },
    ortext: {
      fontFamily: "Regular",
      fontSize: rf(15),
      color: "#8A8A8A",
      marginHorizontal: 5,
    },
    socialbtn: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#111B31",
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      marginVertical: 5,
      justifyContent: "center",
    },
    btntext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#4B4B4B",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      marginRight: 10,
    },
    signupbtn: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#C4CACC",
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      marginVertical: 5,
      justifyContent: "center",
    },
    socialbtnwrapper: {
      height: getPercent(30, height),
      justifyContent: "space-around",
      paddingVertical: 10,
    },
  });
