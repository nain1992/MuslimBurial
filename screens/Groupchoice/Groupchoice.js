import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Groupchoice/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Ionicons from "@expo/vector-icons/Ionicons";
import StandardButton from "../../globalComponents/StandardButton";

const Groupchoice = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.optionswrapper}>
          <TouchableOpacity
            onPress={() => props?.navigation?.goBack()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
            <Text style={styles.backtext}>Back</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textmsg}>
          Both the Public Burial Fund and the Community Group embody the spirit
          of empathy, enabling us to stand together and support one another in
          times of grief and financial strain.
        </Text>
        <View style={styles.mmbgroupbody}>
          <Text style={styles.mmbtext}>MMB GROUP</Text>
          <Text style={styles.mmbtext}>
            The Public Burial Fund, individuals can become members by paying a
            modest monthly fee. Should a member pass away, the fund will extend
            its support by covering the funeral expenses, in accordance with the
            predefined terms and conditions. This option unites a diverse range
            of individuals under a shared commitment to ensuring respectful
            farewells for all.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <StandardButton
            title={"CLICK TO PROCEED"}
            onPress={() => props?.navigation?.navigate("Creategroup")}
          />
        </View>
        <View style={styles.mmbgroupbody}>
          <Text style={styles.mmbtext}>Community</Text>
          <Text style={styles.mmbtext}>
            The Public Burial Fund, individuals can become members by paying a
            modest monthly fee. Should a member pass away, the fund will extend
            its support by covering the funeral expenses, in accordance with the
            predefined terms and conditions. This option unites a diverse range
            of individuals under a shared commitment to ensuring respectful
            farewells for all.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <StandardButton
            title={"CLICK TO PROCEED"}
            onPress={() => props?.navigation?.navigate("Createcommunity")}
          />
        </View>
      </ScrollView>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Groupchoice);
