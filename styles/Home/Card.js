import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(14, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderTopWidth: 1,
      borderColor: "#E7EAEB",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      marginVertical: 5,
      shadowColor: "#000",
      backgroundColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    date: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#969FA2",
    },
    title: {
      fontFamily: "Bold",
      fontSize: rf(13),
      color: "#455154",
    },
    textbody: {
      width: "70%",
      justifyContent: "space-evenly",
      height: "90%",
      paddingHorizontal: 10,
    },
    picturebody: {
      height: getPercent(12, height),
      width: getPercent(12, height),
      borderRadius: 10,
      backgroundColor: "#F4F6F6",
    },
  });
