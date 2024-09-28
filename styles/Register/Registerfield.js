import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      marginVertical: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#000000",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      marginRight: 10,
    },
  });
