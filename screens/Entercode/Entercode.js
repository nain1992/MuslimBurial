import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Entercode/main";
import { useState } from "react";
import Codefield from "../../globalComponents/Codefield";
import StandardButton from "../../globalComponents/StandardButton";

const Entercode = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../assets/10.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.verifytext}>Verify Phone{"\n"}Number</Text>
      <View style={styles.whitebgbody}>
        <Text style={styles.checktext}>
          Check your SMS Messages. We’ve sent you the PIN on +447432427667
        </Text>
        <Codefield />
        <Text style={styles.recievetext}>Didn’t Receive SMS? Resend Code</Text>
        <View style={styles.btnwrapper}>
          <StandardButton
            customStyles={{ backgroundColor: "#9194F2" }}
            title={"Verify"}
            onPress={() => props?.navigation?.navigate("Accountcreated")}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Entercode);
