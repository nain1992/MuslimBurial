import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Nexttokin/main";
import { useState } from "react";
import Profileheader from "../../globalComponents/Profileheader";
import Profilefields from "../../globalComponents/Profilefields";

const Nexttokin = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [kinname, setKinname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [kinname2, setKinname2] = useState("");
  const [email2, setEmail2] = useState("");
  const [number2, setNumber2] = useState("");
  const [address2, setAddress2] = useState("");
  const [postcode2, setPostcode2] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <Profileheader title={"Next to Kin"} navigation={props?.navigation} />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Next of Kin Name"
            value={kinname}
            onChangeText={(val) => setKinname(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin Email Address"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin Moblie No."
            value={number}
            onChangeText={(val) => setNumber(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin  Address"
            value={address}
            onChangeText={(val) => setAddress(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin  Post Code"
            value={postcode}
            onChangeText={(val) => setPostcode(val)}
          />

          <Text style={styles.nextotkin}>Next to Kin 2</Text>
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Next of Kin Name"
            value={kinname2}
            onChangeText={(val) => setKinname2(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin Email Address"
            value={address2}
            onChangeText={(val) => setAddress2(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin Moblie No."
            value={number2}
            onChangeText={(val) => setNumber2(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin  Address"
            value={address2}
            onChangeText={(val) => setAddress2(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Enter Next of Kin  Post Code"
            value={postcode2}
            onChangeText={(val) => setPostcode2(val)}
          />

          <TouchableOpacity style={styles.nextbtn}>
            <Text style={styles.btntext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Nexttokin);
