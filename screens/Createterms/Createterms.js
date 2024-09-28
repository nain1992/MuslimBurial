import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Createterms/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Ionicons from "@expo/vector-icons/Ionicons";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import AntDesign from "@expo/vector-icons/AntDesign";

const Createterms = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [Agree, setAgree] = useState(true);
  let terms = ["Standard T&C's", "Standard T&C's"];

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
            Please establish your group's terms and conditions. Note that the
            standard terms and conditions cannot be altered. You can enhance
            your group's terms by selecting from the provided suggestions.
            Furthermore, you have the option to include specific custom terms
            for your group.
          </Text>
          <Text style={styles.standardtext}>Standard T&C's</Text>

          {terms?.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.terms}>
                <View style={styles.termpicbody}></View>
                <Text style={styles.mmbtext}>{item}</Text>
              </TouchableOpacity>
            );
          })}
          <Text style={styles.standardtext}>Suggested T&C's - Optional</Text>
          {terms?.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.terms}>
                <View style={styles.termpicbody}></View>
                <Text style={styles.mmbtext}>{item}</Text>
              </TouchableOpacity>
            );
          })}
          <Text style={styles.standardtext}>Custom T&C's</Text>
          <TouchableOpacity style={styles.typeyourterms}>
            <View style={styles.termpicbody}></View>
            <TextInput placeholder="Type Your Term" multiline />
          </TouchableOpacity>

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
              //   onPress={() => props?.navigation?.navigate("Dashboard")}
              title={"Click To Proceed"}
            />
          </View>
          <View style={{ alignItems: "center", marginVertical: 5 }}>
            <StandardButton
              customStyles={{ backgroundColor: "#27AE60" }}
              title={"Save for later"}
            />
          </View>
        </View>
      </ScrollView>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Createterms);
