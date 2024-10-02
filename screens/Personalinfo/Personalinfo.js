import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Personalinfo/main";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Profileheader from "../../globalComponents/Profileheader";
import Profilefields from "../../globalComponents/Profilefields";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Personalinfo = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [userid, setUserid] = useState("");
  const [fullname, setFullname] = useState("");
  const [mbnumber, setMbnumber] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const currentDate = selectedDate || dateofbirth;
      setDateofbirth(currentDate.toLocaleDateString("en-GB"));
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === "ios"}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.scrollwrapper}>
          <Profileheader
            title={"Personal Information"}
            navigation={props?.navigation}
          />
          <Profilefields
            image={require("../../assets/6.png")}
            placeholder="Create User ID"
            value={userid}
            onChangeText={(val) => setUserid(val)}
          />
          <Profilefields
            image={require("../../assets/7.png")}
            placeholder="Enter Full Name"
            value={fullname}
            onChangeText={(val) => setFullname(val)}
          />
          <Profilefields
            image={require("../../assets/5.png")}
            placeholder="Enter Mobile Number"
            value={mbnumber}
            onChangeText={(val) => setMbnumber(val)}
          />

          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Profilefields
              image={require("../../assets/4.png")}
              placeholder="Date of Birth"
              value={dateofbirth}
              onChangeText={() => {}}
              editable={false}
            />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChangeDate}
              maximumDate={new Date()}
            />
          )}

          <Profilefields
            image={require("../../assets/6.png")}
            placeholder="Address Line 1"
            value={address1}
            onChangeText={(val) => setAddress1(val)}
          />
          <Profilefields
            image={require("../../assets/6.png")}
            placeholder="Address Line 2"
            value={address2}
            onChangeText={(val) => setAddress2(val)}
          />
          <Profilefields
            image={require("../../assets/7.png")}
            placeholder="Town / City"
            value={city}
            onChangeText={(val) => setCity(val)}
          />
          <Profilefields
            image={require("../../assets/5.png")}
            placeholder="Post Code"
            value={postcode}
            onChangeText={(val) => setPostcode(val)}
          />
          <Profilefields
            image={require("../../assets/5.png")}
            placeholder="Enter Email Address"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <Profilefields
            image={require("../../assets/4.png")}
            placeholder="Create Password"
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
          <View style={styles.passwordrequirementwrapper}>
            <View style={styles.imagebody}>
              <Image
                source={require("../../assets/8.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.passwordtext}>
              Password must be 8 characters at least
            </Text>
          </View>
          <TouchableOpacity style={styles.nextbtn}>
            <Text style={styles.btntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Personalinfo);
