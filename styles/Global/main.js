import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

export const Profilefieldstyles = ({ width, height }) =>
  StyleSheet.create({
    fieldbody: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#EDEEF0",
      alignSelf: "center",
      marginVertical: 5,
      paddingHorizontal: 10,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(12),

      color: "#000000",
    },
    feedbackinput: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(12),
      textAlignVertical: "top",
      color: "#000000",
      height: "90%",
    },
    iconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

//standardField Styles starts here
export const Standardfieldstyles = ({ width, height }) =>
  StyleSheet.create({
    fieldbody: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#EDEEF0",
      alignSelf: "center",
      marginVertical: 10,
      paddingHorizontal: 10,
      // justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
    },
  });

//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      backgroundColor: "#5CB9F2",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      fontSize: rf(15),
      fontFamily: "Bold",
      color: "#fff",
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

// bottom menu styles
export const Bottommenustyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(10, height),
      backgroundColor: "#F4F6F6",
      position: "absolute",
      bottom: 0,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
    },
    iconbody: {
      width: getPercent(15, width),
      height: getPercent(5, height),
      alignItems: "center",
    },
    title: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: "#969FA2",
      marginTop: 4,
    },
  });

//  Header starts here

export const Headerstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(12, height),
      justifyContent: "center",
      backgroundColor: "#fff",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderColor: "#28374D",
    },
    titlewrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    titletext: {
      fontFamily: "SemiBold",
      fontSize: 18,
      color: "rgba(255, 255, 255, 1)",
      marginLeft: 10,
      fontWeight: "600",
    },
  });

export const Donateheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(8, height),
      backgroundColor: "#fff",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "flex-end",
    },

    titlebody: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    titletext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#5CB9F2",
    },
  });

export const Personalheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(15, height),
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-around",
      paddingTop: Platform.OS === "ios" ? 40 : 10,
    },

    iconbody: {
      flexDirection: "row",
      alignItems: "center",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#fff",
    },
    titletext: {
      fontFamily: "Bold",
      fontSize: rf(20),
      color: "#fff",
    },
  });
