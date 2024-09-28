import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Nexttokin/main";
import { useState } from "react";
import Profileheader from "../../globalComponents/Profileheader";
import Profilefields from "../../globalComponents/Profilefields";

const Localmosque = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <Profileheader
            title={"Local Mosque"}
            navigation={props?.navigation}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Local Mosque Name"
            value={name}
            onChangeText={(val) => setName(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Local Mosque Address"
            value={address}
            onChangeText={(val) => setAddress(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Local Mosque Post Code."
            value={postcode}
            onChangeText={(val) => setPostcode(val)}
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

export default connect(mapStateToProps, {})(Localmosque);
