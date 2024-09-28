import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    profilename: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#EFEFEF",
      borderRadius: 10,
      justifyContent: "center",
      paddingHorizontal: 10,
      marginVertical: 5,
    },
    singlepayment: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#000000",
      paddingLeft: getPercent(5, width),
      marginVertical: 8,
    },
    cardbody: {
      height: getPercent(25, height),
      width: getPercent(90, width),
      overflow: "hidden",
      borderRadius: 10,
      alignSelf: "center",
    },
    fieldbody: {
      paddingHorizontal: getPercent(5, width),
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#1E2022",
    },
    fieldinnerbody: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#EFEFEF",
      borderRadius: 10,
      justifyContent: "center",
      marginVertical: 5,
      paddingHorizontal: 10,
    },

    btnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
    wrapper: {
      marginBottom: getPercent(9, height),
    },
  });
