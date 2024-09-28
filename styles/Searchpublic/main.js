import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    optionsbody: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      backgroundColor: "#fff",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      alignSelf: "center",
      marginVertical: 5,
      justifyContent: "space-between",
    },
    iconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      borderRadius: 100,
      backgroundColor: "#E5E8ED",
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    optiontext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#323F4B",
    },
    innerbody: {
      flexDirection: "row",
      alignItems: "center",
    },
    selecticon: {
      height: 20,
      width: 20,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#2FA849",
    },
    confirmtext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#6A7585",
      textAlign: "center",
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    termsbody: {
      height: getPercent(8, height),
      justifyContent: "space-between",
      flexDirection: "row",
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#fff",
      padding: 10,
      shadowColor: "#000",
      alignItems: "center",
      marginVertical: 5,
      alignSelf: "center",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    mmbtext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#272B2B",
      textAlign: "center",
    },
    termpicbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      borderRadius: 10,
      backgroundColor: "#EEFEFF",
      marginRight: 10,
    },
  });
