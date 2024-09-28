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

    optionswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      height: getPercent(8, height),
      alignItems: "flex-end",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#5CB9F2",
      //   marginBottom: 3,
    },
    heading: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#272B2B",
      textAlign: "center",
    },

    textmsg: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#6A7585",
      textAlign: "justify",

      marginVertical: getPercent(2, height),
      paddingHorizontal: getPercent(5, width),
      letterSpacing: 1,
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
    terms: {
      height: getPercent(8, height),
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
    standardtext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#272B2B",
      paddingLeft: getPercent(5, width),
      marginVertical: 8,
    },
    typeyourterms: {
      height: getPercent(8, height),
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
  });
