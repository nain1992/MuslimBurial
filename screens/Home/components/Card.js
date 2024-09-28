import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Home/Card";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

const Card = (props) => {
  let { onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textbody}>
        <Text style={styles.date}>27 DEC 2018</Text>
        <Text style={styles.title}>
          If Michael Cohen Is Smart, There's More Than One Tape
        </Text>
      </View>
      <View style={styles.picturebody}></View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Card);
