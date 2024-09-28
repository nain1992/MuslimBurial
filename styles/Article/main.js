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

    imagebg: {
      height: getPercent(35, height),
      width: getPercent(100, width),
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#F4F6F6",
      alignSelf: "center",
    },
    optionswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      height: getPercent(8, height),
      alignItems: "flex-end",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#5CB9F2",
      marginBottom: 3,
    },
    optionsbtn: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    articletextwrapper: {
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-around",
      height: getPercent(50, height),
    },
    datetext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#969FA2",
    },
    title: {
      fontFamily: "Bold",
      fontSize: rf(24),
      color: "#455154",
    },
  });
