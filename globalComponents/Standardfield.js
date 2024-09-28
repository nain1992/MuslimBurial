import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Standardfieldstyles } from "../styles/Global/main";
const StandardField = (props) => {
  let { title, icon, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = Standardfieldstyles({ width, height });

  return (
    <View style={styles.fieldbody}>
      <TextInput {...props} style={styles.input} />
      <TouchableOpacity onPress={onPress}>
        {icon ? icon : null}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(StandardField);
