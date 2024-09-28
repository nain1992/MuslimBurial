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
    nextotkin: {
      fontFamily: "Bold",
      fontSize: rf(18),
      color: "#fff",
      marginVertical: getPercent(2, height),
      paddingLeft: getPercent(5, width),
    },
    modalBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
    },
    modalContainer: {
      backgroundColor: "white",
      width: getPercent(90, width),
      borderRadius: 10,
      padding: 20,
    },
    optionItem: {
      paddingVertical: 15,
      height: getPercent(7, height),
      width: getPercent(90, width),
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    optionText: {
      fontSize: rf(14),
      fontFamily: "Bold",
    },
    customPicker: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#EDEEF0",
      alignSelf: "center",
      marginVertical: 5,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    pickerText: {
      fontSize: rf(12),
      fontFamily: "Bold",
      color: "#ADB4C0",
    },
  });
