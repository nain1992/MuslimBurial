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
    backbtn: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      margin: getPercent(3, height),
    },
    wrapper: {
      flex: 0.8,
      justifyContent: "space-around",
      alignItems: "center",
    },
    imagebody: {
      height: getPercent(15, height),
      width: getPercent(15, height),
      overflow: "hidden",
    },
    thankutext: {
      fontFamily: "Bold",
      fontSize: rf(20),
      color: "#272B2B",
    },
    sharewrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    sharebodyicon: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
    },
    Sharetext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#5CB9F2",
      marginLeft: 10,
    },
  });
