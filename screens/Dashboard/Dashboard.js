import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Dashboard/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";

import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { getPercent } from "../../middleware";
import Header from "./components/Header";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const shareFile = async () => {
    const fileUri = FileSystem.documentDirectory + "example.txt";
    await FileSystem.writeAsStringAsync(fileUri, "Hello, this is a test file!");
    const available = await Sharing.isAvailableAsync();
    if (!available) {
      Alert.alert("Sharing is not available on this device");
      return;
    }

    await Sharing.shareAsync(fileUri);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header
            peace={"Peace Be Upon You"}
            title={"Supporting the Ummah for a Dignified End."}
          />
          <View style={styles.balancecard}>
            <LinearGradient
              colors={["#0BA7FF", "#9DE4D3"]}
              style={styles.background}
            />
            <View>
              <Text style={styles.cardtext}>Balance</Text>
              <Text style={styles.cardtext}>Memebers</Text>
              <Text style={styles.clams}>Claims processed to date: </Text>
            </View>
            <View>
              <Text style={styles.cardtext}>£1,500</Text>
              <Text style={styles.cardtext}>15</Text>
              <Text style={styles.clams}>0</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Directdebit")}
            style={styles.directdebitbody}
          >
            <LinearGradient
              colors={["#FFA4B8", "rgba(255, 164, 184, 0)"]}
              style={styles.backgrounddebit}
            />
            <Text style={styles.cardtext}>
              Set up Direct Debit: First Payment Due
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Donatepage")}
            style={styles.fundsbody}
          >
            <View style={styles.iconbody}>
              <LinearGradient
                colors={["#E5E8ED", "rgba(229, 232, 237, 0)"]}
                style={styles.funds}
              />
              <Image
                source={require("../../assets/18.png")}
                style={{ height: "50%", width: "50%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.fundstext}>Fund Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Transactionhistory")}
            style={styles.transactionsbody}
          >
            <View style={styles.iconbody}>
              <LinearGradient
                colors={["#E5E8ED", "rgba(229, 232, 237, 0)"]}
                style={styles.funds}
              />
              <Image
                source={require("../../assets/18.png")}
                style={{ height: "50%", width: "50%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.fundstext}>Transaction History</Text>
          </TouchableOpacity>
          <View style={styles.invitewrapper}>
            <TouchableOpacity style={styles.invite}>
              <View style={styles.iconbodyinvite}>
                <Image
                  source={require("../../assets/18.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.fundstext}>Invite</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={shareFile} style={styles.invite}>
              <View style={styles.iconbodyinvite}>
                <Image
                  source={require("../../assets/18.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.fundstext}>Share</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Chatpage")}
            style={styles.group}
          >
            <View style={styles.iconbody}>
              <LinearGradient
                colors={["#E5E8ED", "rgba(229, 232, 237, 0)"]}
                style={styles.funds}
              />
              <Image
                source={require("../../assets/18.png")}
                style={{ height: "50%", width: "50%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.fundstext}>Group Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Dashboard);
