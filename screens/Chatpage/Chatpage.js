import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Chatpage/main";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Incoming from "./components/Incoming";
import Outgoing from "./components/Outgoing";
import * as ImagePicker from "expo-image-picker";
import Typemsg from "../../globalComponents/Typemsg";
import Ionicons from "@expo/vector-icons/Ionicons";

const Chatpage = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [msg, setMsg] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Photos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={styles.headerbody}>
        <TouchableOpacity
          onPress={() => props?.navigation?.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
          <Text style={styles.headertitle}>Back</Text>
        </TouchableOpacity>
        <View style={styles.titlewrapper}>
          <Text style={styles.headertitle1}>GROUP CHAT</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Incoming
          msgincoming={
            "Salaam all, a sad announcement that my brother from the group has returned to his creator. "
          }
        />
        <Outgoing
          color
          msgoutgoing={"A fund request has been made by Adnan. "}
        />
        <Outgoing audio />
        <Outgoing
          msgoutgoing={"So sad to hear. Inna Lillahi wa innah Lillahi Rajeoun."}
        />

        <Incoming
          msgincoming={"I hope we will be friends forever, friends of life"}
        />
        <Outgoing
          msgoutgoing={"So sad to hear. Inna Lillahi wa innah Lillahi Rajeoun."}
        />
        <Incoming msgincoming={"Thank you for the kind messages."} />
      </ScrollView>

      <Typemsg
        placeholder="Type Something"
        placeholderTextColor={"#AAAAAA"}
        value={msg}
        onChangeText={(val) => setMsg(val)}
        multiline
        onIconPress={pickImage}
      />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Chatpage);
