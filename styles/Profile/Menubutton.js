import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      marginVertical: 5,
      alignSelf: "center",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      shadowColor: "#000",
      paddingHorizontal: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    iconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#DCDFE3",
      justifyContent: "center",
      alignItems: "center",
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#3F4765",
    },
  });
