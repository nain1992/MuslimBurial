import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Dashboard/Header";
import { useState } from "react";

const Header = (props) => {
  let { peace, title } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.headerbody}>
      <View>
        <Text style={styles.titletext}>{peace}</Text>
        <Text style={styles.supporttext}>{title}</Text>
      </View>
      <View style={styles.picbody}></View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);
