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
    homeupdatestextwrapper: {
      height: getPercent(10, height),
      paddingHorizontal: getPercent(5, width),
      justifyContent: "flex-end",
    },
    updatestext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#455154",
    },
    imagebg: {
      height: getPercent(25, height),
      width: getPercent(90, width),
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#F4F6F6",
      alignSelf: "center",
    },
    optionsbtn: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      backgroundColor: "#fff",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "flex-end",
      margin: 10,
    },
    articletextwrapper: {
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-around",
      height: getPercent(20, height),
    },
    datetext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#969FA2",
    },
    title: {
      fontFamily: "Bold",
      fontSize: rf(20),
      color: "#455154",
    },
    cardwrapper: {
      marginBottom: getPercent(10, height),
    },
  });
