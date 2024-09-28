import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Bottommenustyles } from "../styles/Global/main";

const Bottommenu = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Bottommenustyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Home")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/21.png")}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Groupchoice")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/22.png")}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Group</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Donatepage")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/23.png")}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Profile")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/24.png")}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Bottommenu);
