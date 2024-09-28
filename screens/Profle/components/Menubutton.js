import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Profile/Menubutton";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Menubutton = (props) => {
  let { title, image, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconbody}>
        <Image
          source={image}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={styles.titletext}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9FA8B1" />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Menubutton);
