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
    scrollwrapper: {
      marginBottom: getPercent(0, height),
    },
    passwordrequirementwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(8, height),
    },
    passwordtext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#27364E",
      marginLeft: 10,
    },
    imagebody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    nextbtn: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#EAECF0",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginBottom: 10,
    },

    btntext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#838FA0",
    },
  });
