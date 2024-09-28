import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Profile/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getPercent } from "../../middleware";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

const Verification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Photos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <View style={styles.profileheader}>
            <LinearGradient
              colors={["#0BA7FF", "#9DE4D3"]}
              style={styles.background}
            />
            <View style={styles.btnwrapper}>
              <TouchableOpacity
                onPress={() => props?.navigation?.goBack()}
                style={styles.backbtnbody}
              >
                <Ionicons name="chevron-back" size={18} color="#fff" />
                <Text style={styles.backtext}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listwrapper}>
            <View style={{ height: getPercent(5, height) }}></View>

            <View
              style={{
                height: getPercent(10, height),
                justifyContent: "center",
              }}
            >
              <Text style={styles.nametext}>Adnan Rana</Text>
              <Text style={styles.statustext}>Status: Not Verified</Text>
            </View>

            <TouchableOpacity style={styles.directdebitbody}>
              <LinearGradient
                colors={["#FFA4B8", "rgba(255, 164, 184, 0)"]}
                style={styles.backgrounddebit}
              />
              <Text style={styles.cardtext}>Upload Photo ID</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.directdebitbody,
                {
                  backgroundColor: "#27AE60",
                },
              ]}
            >
              {/* <LinearGradient
                colors={["#FFA4B8", "rgba(255, 164, 184, 0)"]}
                style={styles.backgrounddebit}
              /> */}
              <Text style={styles.cardtext}>Upload Proof of Address</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profilepicbody}>
          {/* <Image
            source={image ? image : require("../../assets/1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          /> */}
          {image && (
            <Image
              source={{ uri: image }}
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadbtnbody}>
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Verification);
