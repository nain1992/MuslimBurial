import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    typemsgwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      position: "absolute",
      bottom: 0,
      height: getPercent(10, height),
      justifyContent: "space-between",
      width: getPercent(100, width),
      backgroundColor: "#fff",
    },
    addiconsbody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      borderRadius: 100,
      backgroundColor: "#56CCF2",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    typemsgbody: {
      height: getPercent(6, height),
      width: getPercent(70, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#DDDDDD",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-between",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    input: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
      width: "90%",
    },
    sendbtn: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
  });
