import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#9DE4D3",
    },
    scrollwrapper: {
      marginBottom: getPercent(10, height),
    },
    profileheader: {
      height: getPercent(30, height),
      width: getPercent(100, width),
      overflow: "hidden",
    },
    background: {
      position: "absolute",
      height: getPercent(30, height),
      width: getPercent(100, width),
      overflow: "hidden",
    },
    directdebitbody: {
      height: getPercent(10, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#FFA4B8",
      alignSelf: "center",
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPercent(3, width),
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    backgrounddebit: {
      position: "absolute",
      height: "100%",
      width: "100%",
    },
    cardtext: {
      fontFamily: "Bold",
      fontSize: rf(14),
      color: "#FFFDFD",
    },
    listwrapper: {
      minHeight: getPercent(60, height),
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      backgroundColor: "#fff",
    },
    btnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
      alignItems: "center",
      paddingTop: 20,
    },
    backbtnbody: {
      flexDirection: "row",
      alignItems: "center",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#fff",
    },
    titlebody: {
      flex: 0.85,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: "Bold",
      fontSize: rf(18),
      color: "#fff",
    },
    nametext: {
      fontFamily: "Bold",
      fontSize: rf(18),
      color: "#1F2933",
      textAlign: "center",
    },
    statustext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#6B7580",
      textAlign: "center",
    },
    profilepicbody: {
      height: getPercent(14, height),
      width: getPercent(14, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#5CB9F2",
      alignSelf: "center",
      position: "absolute",
      top: getPercent(20, height),
      borderWidth: 2,
      borderColor: "#fff",
    },
    uploadbtnbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#56CCF2",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      top: getPercent(32, height),
    },
  });
