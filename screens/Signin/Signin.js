import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Signin/main";
import Standardfield from "../../globalComponents/Standardfield";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signin = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidepassword, setHidepassword] = useState(true);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logobody}>
          <Image
            source={require("../../assets/1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textwrapper}>
          <Text style={styles.everytext}>Every Soul Shall Taste Death</Text>
        </View>
        <Text style={styles.emailtext}>Email</Text>
        <Standardfield
          placeholder="Heloise48@gmail.com"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <Text style={styles.emailtext}>Password</Text>
        <Standardfield
          placeholder="******"
          secureTextEntry={hidepassword ? true : false}
          value={password}
          onChangeText={(val) => setPassword(val)}
          icon={<Entypo name="eye-with-line" size={15} color="#4B4B4B" />}
          onPress={() => setHidepassword(!hidepassword)}
        />
        <View style={styles.btnwrapper}>
          <StandardButton
            title={"Login"}
            onPress={() => props?.navigation?.navigate("Home")}
          />
        </View>

        <View style={styles.orwrapper}>
          <View style={styles.border}></View>
          <Text style={styles.ortext}>OR</Text>
          <View style={styles.border}></View>
        </View>
        <TouchableOpacity
          onPress={() => alert("Coming Soon!")}
          style={styles.socialbtn}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/2.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.btntext}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Coming Soon!")}
          style={styles.socialbtn}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/3.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.btntext}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Register")}
          style={styles.signupbtn}
        >
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Signin);
