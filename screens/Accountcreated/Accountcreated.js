import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Accountcreated/main";
import { useState } from "react";
import StandardButton from "../../globalComponents/StandardButton";

const Accountcreated = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../assets/13.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.framebody}>
        <Image
          source={require("../../assets/12.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.whitebgbody}>
        <Text style={styles.accounttext}>Account Successfully Created!</Text>

        <Text style={styles.recievetext}>
          Your account has been successfully created.
        </Text>
        <View style={styles.btnwrapper}>
          <StandardButton
            onPress={() => props?.navigation?.navigate("Home")}
            customStyles={{ backgroundColor: "#9194F2" }}
            title={"Take me Home"}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Accountcreated);
