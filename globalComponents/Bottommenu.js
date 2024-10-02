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
  let { title, active } = props;
  let { width, height } = useWindowDimensions();
  let styles = Bottommenustyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Home")}
        style={styles.iconbody}
      >
        <Image
          source={
            active === "Home"
              ? require("../assets/21.png")
              : require("../assets/h.png")
          }
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            {
              color: active === "Home" ? "#5CB9F2" : "#969FA2",
            },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Groupchoice")}
        style={styles.iconbody}
      >
        <Image
          source={
            active === "Group"
              ? require("../assets/g.png")
              : require("../assets/h.png")
          }
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            {
              color: active === "Group" ? "#5CB9F2" : "#969FA2",
            },
          ]}
        >
          Group
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Donatepage")}
        style={styles.iconbody}
      >
        <Image
          source={
            active === "Donate"
              ? require("../assets/d.png")
              : require("../assets/23.png")
          }
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            {
              color: active === "Donate" ? "#5CB9F2" : "#969FA2",
            },
          ]}
        >
          Donate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Profile")}
        style={styles.iconbody}
      >
        <Image
          source={
            active === "Profile"
              ? require("../assets/p.png")
              : require("../assets/24.png")
          }
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            {
              color: active === "Profile" ? "#5CB9F2" : "#969FA2",
            },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Bottommenu);
