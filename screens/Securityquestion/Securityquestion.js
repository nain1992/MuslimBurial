import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Nexttokin/main";
import { useState } from "react";
import Profileheader from "../../globalComponents/Profileheader";
import Profilefields from "../../globalComponents/Profilefields";

const Securityquestion = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <Profileheader
            title={"Security Question"}
            navigation={props?.navigation}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Select Security Question 1"
            value={question1}
            onChangeText={(val) => setQuestion1(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Select Security Question 2"
            value={question2}
            onChangeText={(val) => setQuestion2(val)}
          />
          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Select Security Question 3"
            value={question3}
            onChangeText={(val) => setQuestion3(val)}
          />
          <TouchableOpacity style={styles.nextbtn}>
            <Text style={styles.btntext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Securityquestion);
