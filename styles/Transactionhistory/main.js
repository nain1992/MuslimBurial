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

    wrapper: {
      marginVertical: 10,
    },
    currentbalance: {
      height: getPercent(9, height),
      width: getPercent(40, width),
      alignSelf: "center",
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: "#fff",
      flexDirection: "row",
      paddingHorizontal: 10,
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
    amount: {
      height: getPercent(9, height),
      width: getPercent(40, width),
      alignSelf: "center",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor: "#5CB9F2",
      flexDirection: "row",
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      alignItems: "center",
      shadowRadius: 3.84,

      elevation: 5,
    },
    amounttext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#222",
    },
    iconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(145, 148, 242, 0.52)",
      justifyContent: "center",
      alignItems: "center",
    },
    balancetext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#2C4364",
      marginLeft: 10,
    },
    input: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#fff",
      width: "70%",
    },
    submitbtn: {
      height: getPercent(4, height),
      width: getPercent(20, width),
      borderRadius: 100,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
    textbtn: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#27364E",
    },
    btnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 7,
    },
    bankdetailsbtn: {
      height: getPercent(6, height),
      width: getPercent(40, width),
      backgroundColor: "#FD4E4E",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    btntext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#fff",
    },
    Balancehistory: {
      height: getPercent(6, height),
      width: getPercent(40, width),
      backgroundColor: "#3F72AF",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    moneyinputwrapper: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#EAECF0",
      borderRadius: 100,
      width: getPercent(90, width),
      alignSelf: "center",
      justifyContent: "space-between",
    },
    moneyinbtn: {
      height: getPercent(5, height),
      width: getPercent(42, width),
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    moneybtntext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#27364E",
    },
    transactionswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    imagebody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      borderRadius: 100,
      backgroundColor: "#5CB9F2",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    trasnferamount: {
      color: "#9194F2",
      fontFamily: "Regular",
      fontSize: rf(12),
    },
    mainwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
    },
    headerbody: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
    },
    headertitle: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#5CB9F2",
    },
    titlewrapper: {
      flex: 0.95,
      justifyContent: "center",
      alignItems: "center",
    },
    headertitle1: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#5CB9F2",
    },
  });
