import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    headerbody: {
      flexDirection: "row",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: getPercent(3, height),
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#1F2933",
    },
    supporttext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#78809E",
    },
    picbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      borderRadius: 100,
      backgroundColor: "#0BA7FF",
    },
  });
