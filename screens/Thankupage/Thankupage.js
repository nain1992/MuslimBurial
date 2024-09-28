import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Thankupage/main";
import Ionicons from "@expo/vector-icons/Ionicons";
import Bottommenu from "../../globalComponents/Bottommenu";
import StandardButton from "../../globalComponents/StandardButton";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

const Thankupage = (props) => {
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
      <TouchableOpacity style={styles.backbtn}>
        <Ionicons name="arrow-back" size={18} color="#5CB9F2" />
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <View style={styles.imagebody}>
          <Image
            source={require("../../assets/hand.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.thankutext}>Thank you for Donating</Text>
        <StandardButton
          title={"Make Another Donation"}
          onPress={() => props?.navigation?.navigate("Donatepage")}
        />
        <TouchableOpacity onPress={shareFile} style={styles.sharewrapper}>
          <View style={styles.sharebodyicon}>
            <Image
              source={require("../../assets/share.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.Sharetext}>Share to social</Text>
        </TouchableOpacity>
      </View>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Thankupage);
