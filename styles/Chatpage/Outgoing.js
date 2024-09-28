import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
      alignSelf: "flex-end",
      maxWidth: getPercent(80, width),
    },

    msgbody: {
      backgroundColor: "#EB5757",
      padding: 8,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    textmsg: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#fff",
      marginLeft: 10,
    },
    audioiconbody: {
      height: getPercent(8, height),
      width: getPercent(25, height),
      backgroundColor: "#EB5757",
      padding: 8,
      borderRadius: 10,
      shadowColor: "#000",
      flexDirection: "row",
      alignItems: "center",
    },
    textbody: {
      padding: 8,
      borderRadius: 10,
    },
    audiocontainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
  });
