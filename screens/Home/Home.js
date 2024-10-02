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
import { styles as _styles } from "../../styles/Home/main";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Card from "./components/Card";
import Bottommenu from "../../globalComponents/Bottommenu";

const Home = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeupdatestextwrapper}>
          <Text style={styles.updatestext}>News Updates</Text>
        </View>
        <Pressable onPress={() => props?.navigation?.navigate("Article")}>
          <ImageBackground style={styles.imagebg}>
            <TouchableOpacity style={styles.optionsbtn}>
              <Entypo name="dots-three-horizontal" size={15} color="black" />
            </TouchableOpacity>
          </ImageBackground>
        </Pressable>
        <View style={styles.articletextwrapper}>
          <Text style={styles.datetext}>28 Oct 2018</Text>
          <Text style={styles.title}>
            We've Seen This Before, and It Doesn't End Well for Anyone
          </Text>
          <Text style={styles.datetext}>
            The war in Yemen is a humanitarian crisis with long-term
            consequences for the U.S.
          </Text>
        </View>
        <View style={styles.cardwrapper}>
          {[1, 1, 1, 1]?.map((item, index) => {
            return (
              <Card
                onPress={() => props?.navigation?.navigate("Article")}
                key={index}
              />
            );
          })}
        </View>
      </ScrollView>
      <Bottommenu active={"Home"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Home);
