import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Newcommunity/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Ionicons from "@expo/vector-icons/Ionicons";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import Standardfield from "../../globalComponents/Standardfield";
import Entypo from "@expo/vector-icons/Entypo";

const Newcommunity = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [Name, setName] = useState("");
  const [id, setId] = useState("");
  const [passcode, setPasscode] = useState("");
  const [hidepassword, setHidepassword] = useState(true);
  const [hidecode, setHidecode] = useState(true);
  const [confirmpassword, setConfirmpassword] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <View style={styles.optionswrapper}>
            <TouchableOpacity
              onPress={() => props?.navigation?.goBack()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
              <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>New Community Groups</Text>
          <Text style={styles.fieldtitle}>Create Group Name</Text>
          <Standardfield
            placeholder="Type Here"
            value={Name}
            onChangeText={(val) => setName(val)}
          />
          <Text style={styles.fieldtitle}>Unique ID Provided (Generated)</Text>
          <Standardfield
            placeholder="685234"
            value={id}
            onChangeText={(val) => setId(val)}
            secureTextEntry={hidecode ? true : false}
            icon={<Entypo name="eye-with-line" size={15} color="#4B4B4B" />}
            onPress={() => setHidecode(!hidecode)}
          />
          <Text style={styles.fieldtitle}>Create Password</Text>
          <Standardfield
            placeholder="Minimum 8 letters"
            value={passcode}
            onChangeText={(val) => setPasscode(val)}
            icon={<Entypo name="eye-with-line" size={15} color="#4B4B4B" />}
            maxLength={8}
            secureTextEntry={hidepassword ? true : false}
            onPress={() => setHidepassword(!hidepassword)}
          />
          <Text style={styles.fieldtitle}>Re-enter Password</Text>
          <Standardfield
            placeholder="Minimum 8 letters"
            value={passcode}
            onChangeText={(val) => setPasscode(val)}
            icon={<Entypo name="eye-with-line" size={15} color="#4B4B4B" />}
            maxLength={8}
            secureTextEntry={confirmpassword ? true : false}
            onPress={() => setConfirmpassword(!confirmpassword)}
          />
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <StandardButton
              title={"Click to Proceed"}
              onPress={() => props?.navigation?.navigate("Searchpublic")}
            />
          </View>
        </View>
      </ScrollView>
      <Bottommenu active={"Group"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Newcommunity);
