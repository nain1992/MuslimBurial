import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#5CB9F2",
    },
    accounttext: {
      fontFamily: "Bold",
      fontSize: rf(25),
      color: "#27364E",
      marginVertical: getPercent(5, height),
    },
    imagebody: {
      height: getPercent(30, height),
      width: getPercent(30, height),
      overflow: "hidden",
      position: "absolute",
      right: 0,
      top: getPercent(15, height),
    },
    whitebgbody: {
      height: getPercent(50, height),
      width: getPercent(100, width),
      backgroundColor: "#fff",
      borderRadius: 30,
      paddingHorizontal: getPercent(5, width),
    },
    framebody: {
      height: getPercent(40, height),
      width: getPercent(40, height),
      overflow: "hidden",
      alignSelf: "center",
    },
    checktext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#5A6981",
      marginVertical: getPercent(3, height),
    },
    recievetext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#5A6981",
      marginVertical: getPercent(3, height),
    },
    btnwrapper: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: getPercent(3, height),
    },
  });
