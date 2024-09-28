import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Register/main";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Profileheader from "../../globalComponents/Profileheader";
import Profilefields from "../../globalComponents/Profilefields";

const Register = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [userid, setUserid] = useState("");
  const [fullname, setFullname] = useState("");
  const [mbnumber, setMbnumber] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false); // State for showing the date picker
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false); // Close date picker
    if (selectedDate) {
      const currentDate = selectedDate || dateofbirth;
      setDateofbirth(currentDate.toLocaleDateString("en-GB")); // Format the date as needed
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <Profileheader
            title={"Create New Account"}
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

          {/* Date of Birth Field with Date Picker */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Profilefields
              image={require("../../assets/4.png")}
              placeholder="Date of Birth"
              value={dateofbirth}
              onChangeText={() => {}}
              editable={false} // Prevent manual editing of date field
            />
          </TouchableOpacity>

          {/* Date Picker Modal */}
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChangeDate}
              maximumDate={new Date()} // Prevent future dates
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
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Entercode")}
            style={styles.nextbtn}
          >
            <Text style={styles.btntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Register);
