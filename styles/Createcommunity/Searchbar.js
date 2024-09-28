import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      backgroundColor: "#fff",
      borderRadius: 100,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      shadowColor: "#000",
      marginVertical: 10,
      paddingHorizontal: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    input: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
      marginLeft: 10,
    },
  });
