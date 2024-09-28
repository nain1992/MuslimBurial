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
import { styles as _styles } from "../../styles/Article/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Ionicons from "@expo/vector-icons/Ionicons";

const Article = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <ImageBackground style={styles.imagebg}>
            <View style={styles.optionswrapper}>
              <TouchableOpacity
                onPress={() => props?.navigation?.goBack()}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
                <Text style={styles.backtext}>Back</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity style={styles.optionsbtn}>
                  <Image
                    source={require("../../assets/a1.png")}
                    style={{ height: "50%", width: "50%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsbtn}>
                  <Image
                    source={require("../../assets/a2.png")}
                    style={{ height: "50%", width: "50%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Pressable>
        <View style={styles.articletextwrapper}>
          <Text style={styles.datetext}>30 Nov 2018</Text>
          <Text style={styles.title}>
            We Should Probably Pay Attention to the Fire Tornado
          </Text>
          <Text style={styles.datetext}>
            Those crafty Chinese climate hoaxsters have been at it again. Last
            week, there were wildfires in Greece that got so bad that people
            were jumping into the ocean for safety.{"\n"}
            {"\n"}There are now strong indications that these fires may have
            been set, but it was those clever Chinese hoaxsters and their
            climate scam that made the fires as bad as they were. From The
            Guardian:
          </Text>
        </View>
      </ScrollView>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Article);
