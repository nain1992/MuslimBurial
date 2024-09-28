import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../styles/Global/Typemsg";
import AntDesign from "@expo/vector-icons/AntDesign";

const Typemsg = (props) => {
  let { onIconPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.typemsgwrapper}>
      <View style={styles.typemsgbody}>
        <TextInput style={styles.input} {...props} />
        <TouchableOpacity style={styles.sendbtn}>
          <Image
            // source={require("../assets/1.png")}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onIconPress} style={styles.addiconsbody}>
        <AntDesign name="plus" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Typemsg);
