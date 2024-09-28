import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    profilename: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#EFEFEF",
      borderRadius: 10,
      justifyContent: "center",
      paddingHorizontal: 10,
      marginVertical: 5,
    },
    summarytext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#000000",
    },
    singlepayment: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#000000",
      paddingLeft: getPercent(5, width),
      marginBottom: 8,
    },
    cardbody: {
      height: getPercent(25, height),
      width: getPercent(90, width),
      overflow: "hidden",
      borderRadius: 10,
      alignSelf: "center",
    },
    fieldbody: {
      paddingHorizontal: getPercent(5, width),
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#1E2022",
    },
    fieldinnerbody: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#EFEFEF",
      borderRadius: 10,
      justifyContent: "center",
      marginVertical: 5,
      paddingHorizontal: 10,
    },

    btnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
    input: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
    },
    headerbody: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
    },
    headertitle: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#5CB9F2",
    },
    titlewrapper: {
      flex: 0.95,
      justifyContent: "center",
      alignItems: "center",
    },
    headertitle1: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#5CB9F2",
    },
  });
