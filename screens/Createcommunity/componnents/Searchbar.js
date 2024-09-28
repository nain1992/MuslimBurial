import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Createcommunity/Searchbar";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Searchbar = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="search1" size={18} color="#969FA2" />
      </TouchableOpacity>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Searchbar);
