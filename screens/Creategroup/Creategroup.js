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
import { styles as _styles } from "../../styles/Creategroup/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Ionicons from "@expo/vector-icons/Ionicons";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import AntDesign from "@expo/vector-icons/AntDesign";

const Creategroup = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [Agree, setAgree] = useState(true);
  let terms = ["Term 1", "Term 2", "Term 3", "Term 4"];

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
          <Text style={styles.heading}>Terms & Conditions</Text>
          <Text style={styles.textmsg}>
            Welcome to the Muslim Burial Fund – a compassionate endeavor
            designed to provide support during moments of loss within the Muslim
            community. To ensure transparency, fairness, and a respectful
            process, we have established the following terms and conditions that
            govern the functioning of this fund:
          </Text>
          {terms?.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.terms}>
                <View style={styles.termpicbody}></View>
                <Text style={styles.mmbtext}>{item}</Text>
              </TouchableOpacity>
            );
          })}
          <Text style={styles.textmsg}>
            We take your privacy very seriously and are committed to protecting
            your personal information. To make sure we give you an outstanding
            supporter experience we’ll sometimes use the information you give us
            to ensure our communications meet your expectations. For more
            information about how we use and protect your data please read our
            Privacy Policy
          </Text>
          <TouchableOpacity
            onPress={() => setAgree(!Agree)}
            style={styles.termsbody}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.termpicbody}></View>
              <Text style={styles.mmbtext}>Agree to T&C's</Text>
            </View>
            {Agree ? (
              <AntDesign name="checkcircle" size={18} color="#2FA849" />
            ) : null}
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginVertical: 5 }}>
            <StandardButton
              onPress={() => props?.navigation?.navigate("Dashboard")}
              title={"Click To Proceed"}
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
export default connect(mapStateToProps, {})(Creategroup);
