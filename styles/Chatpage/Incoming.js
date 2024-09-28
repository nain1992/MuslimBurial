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
      maxWidth: getPercent(80, width),
    },
    senderpic: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      backgroundColor: "#C4C4C4",
      borderRadius: 100,
      marginRight: 10,
    },
    msgbody: {
      backgroundColor: "#F5F6F8",
      padding: 15,
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
      color: "#121212",
    },
  });
