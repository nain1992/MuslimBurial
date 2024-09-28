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
      //   marginBottom: 3,
    },
    heading: {
      fontFamily: "Bold",
      fontSize: rf(18),
      color: "#5CB9F2",
      textAlign: "center",
      marginVertical: getPercent(3, height),
    },

    textmsg: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#6A7585",
      textAlign: "center",
      marginVertical: getPercent(2, height),
      paddingHorizontal: getPercent(5, width),
      letterSpacing: 1,
    },

    orwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      alignSelf: "center",
    },
    bar: {
      width: "45%",
      borderWidth: 0.5,
      borderColor: "#8A8A8A",
      height: 0,
    },
    ortext: {
      color: "#8A8A8A",
      fontFamily: "Regular",
      fontSize: rf(12),
      marginHorizontal: 10,
    },
    fieldtitle: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#4B4B4B",
      paddingLeft: getPercent(5, width),
      marginVertical: 5,
    },
  });
