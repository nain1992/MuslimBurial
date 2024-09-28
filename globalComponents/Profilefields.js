import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Profilefieldstyles } from "../styles/Global/main";
import { getPercent } from "../middleware";
const Profilefields = (props) => {
  let { typeheight, image, onPress, feedbackinput } = props;
  let { width, height } = useWindowDimensions();
  let styles = Profilefieldstyles({ width, height });

  return (
    <View style={[styles.fieldbody, typeheight]}>
      <TouchableOpacity style={styles.iconbody} onPress={onPress}>
        <Image source={image} style={{ height: "50%", width: "50%" }} />
      </TouchableOpacity>
      <TextInput {...props} style={[styles.input, feedbackinput]} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Profilefields);
