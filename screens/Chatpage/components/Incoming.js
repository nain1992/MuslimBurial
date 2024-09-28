import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Chatpage/Incoming";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Incoming = (props) => {
  let { msgincoming, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.senderpic}></View>
      <View style={styles.msgbody}>
        <Text style={styles.textmsg}>{msgincoming}</Text>
      </View>
    </Pressable>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Incoming);
