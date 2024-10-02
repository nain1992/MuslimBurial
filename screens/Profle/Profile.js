import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Profile/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Menubutton from "./components/Menubutton";
import { getPercent } from "../../middleware";

const Profile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <View style={styles.profileheader}>
            <LinearGradient
              colors={["#0BA7FF", "#9DE4D3"]}
              style={styles.background}
            />
            <View style={styles.btnwrapper}>
              <TouchableOpacity
                onPress={() => props?.navigation?.goBack()}
                style={styles.backbtnbody}
              >
                <Ionicons name="chevron-back" size={18} color="#fff" />
                <Text style={styles.backtext}>Back</Text>
              </TouchableOpacity>
              <View style={styles.titlebody}>
                <Text style={styles.title}>Profile</Text>
              </View>
            </View>
          </View>
          <View style={styles.listwrapper}>
            <View style={{ height: getPercent(5, height) }}></View>

            <View
              style={{
                height: getPercent(10, height),
                justifyContent: "center",
              }}
            >
              <Text style={styles.nametext}>Adnan Rana</Text>
              <Text style={styles.statustext}>Status: Verified</Text>
            </View>

            <TouchableOpacity
              onPress={() => props?.navigation?.navigate("Verification")}
              style={styles.directdebitbody}
            >
              <LinearGradient
                colors={["#FFA4B8", "rgba(255, 164, 184, 0)"]}
                style={styles.backgrounddebit}
              />
              <Text style={styles.cardtext}>Verify Account ID Document</Text>
            </TouchableOpacity>
            <Menubutton
              image={require("../../assets/78.png")}
              title={"Personal Information"}
              onPress={() => props?.navigation?.navigate("Personalinfo")}
            />
            <Menubutton
              image={require("../../assets/78.png")}
              title={"Next of Kin"}
              onPress={() => props?.navigation?.navigate("Nexttokin")}
            />
            <Menubutton
              image={require("../../assets/78.png")}
              title={"Local Mosque"}
              onPress={() => props?.navigation?.navigate("Localmosque")}
            />
            <Menubutton
              onPress={() => alert("Coming Soon!")}
              image={require("../../assets/78.png")}
              title={"Wealth"}
            />
            <Menubutton
              onPress={() => alert("Coming Soon!")}
              image={require("../../assets/78.png")}
              title={"Memories"}
            />
            <Menubutton
              onPress={() => props?.navigation?.navigate("Securityquestion")}
              image={require("../../assets/78.png")}
              title={"Security Questions"}
            />
            <Menubutton
              onPress={() => props?.navigation?.navigate("Form")}
              image={require("../../assets/78.png")}
              title={"Feedback Form"}
            />
            <Menubutton
              onPress={() => alert("Coming Soon!")}
              image={require("../../assets/78.png")}
              title={"Log Out"}
            />
          </View>
        </View>
        <View style={styles.profilepicbody}></View>
      </ScrollView>
      <Bottommenu active={"Profile"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Profile);
