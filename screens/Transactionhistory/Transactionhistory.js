import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Transactionhistory/main";
import { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import Bottommenu from "../../globalComponents/Bottommenu";
import { getPercent } from "../../middleware";

const Transactionhistory = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [moneyin, setMoneyin] = useState(true);
  const [moneyout, setMoneyout] = useState();
  const [transactionrecord, setTransactionrecord] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerbody}>
        <TouchableOpacity
          onPress={() => props?.navigation?.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
          <Text style={styles.headertitle}>Back</Text>
        </TouchableOpacity>
        <View style={styles.titlewrapper}>
          <Text style={styles.headertitle1}>TRANSACTION HISTORY</Text>
        </View>
      </View>
      <View style={styles.mainwrapper}>
        <View style={styles.wrapper}>
          <View style={styles.currentbalance}>
            <View style={styles.iconbody}>
              <Image
                source={require("../../assets/down.png")}
                style={{ height: "50%", width: "50%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.balancetext}>Money in</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amounttext}>£0</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.currentbalance}>
            <View
              style={[
                styles.iconbody,
                {
                  backgroundColor: "rgba(221, 80, 80, 0.28)",
                },
              ]}
            >
              <Image
                source={require("../../assets/up.png")}
                style={{ height: "50%", width: "50%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.balancetext}>Money out</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amounttext}>£0</Text>
          </View>
        </View>
      </View>

      <View style={styles.moneyinputwrapper}>
        <TouchableOpacity
          onPress={() => {
            setMoneyin(true);
            setMoneyout(false);
            setTransactionrecord(!transactionrecord);
          }}
          style={[
            styles.moneyinbtn,
            {
              backgroundColor: moneyin ? "#fff" : "transparent",
            },
          ]}
        >
          <Text style={styles.moneybtntext}>Money In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMoneyout(true);
            setMoneyin(false);
            setTransactionrecord(!transactionrecord);
          }}
          style={[
            styles.moneyinbtn,
            {
              backgroundColor: moneyout ? "#fff" : "transparent",
            },
          ]}
        >
          <Text style={styles.moneybtntext}>Money Out</Text>
        </TouchableOpacity>
      </View>
      {transactionrecord ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <View key={index} style={styles.transactionswrapper}>
                <View style={styles.imagebody}></View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <Text style={styles.moneybtntext}>
                    Transfer from Quenti Caralo
                  </Text>
                  <Text style={styles.trasnferamount}>+ $10</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.transactionswrapper}>
          <View
            style={{
              height: getPercent(45, height),
              width: getPercent(90, width),
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/copy.png")}
              style={{ height: "90%", width: "90%" }}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Transactionhistory);
