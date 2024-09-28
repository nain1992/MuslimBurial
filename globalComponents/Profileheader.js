import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Personalheaderstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Donateheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Personalheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.iconbody}
      >
        <Ionicons name="chevron-back" size={18} color="#fff" />
        <Text style={styles.backtext}>Back</Text>
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
