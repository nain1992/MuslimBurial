import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Donateheaderstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Donateheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Donateheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.titlewrapper}
      >
        <Ionicons name="arrow-back" size={18} color="#5CB9F2" />
      </TouchableOpacity>
      <View style={styles.titlebody}>
        <Text style={styles.titletext}>{title}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Donateheader);
