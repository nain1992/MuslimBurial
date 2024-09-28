import {
  View,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Searchpublic/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import Header from "../Dashboard/components/Header";
import Searchbar from "../Createcommunity/componnents/Searchbar";
import AntDesign from "@expo/vector-icons/AntDesign";

const Searchpublic = (props) => {
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Agree, setAgree] = useState(true);

  let optionsData = [
    "My Muslim burial",
    "Islamic Relief",
    "Human Appeal",
    "British Muslim Heritage Centre",
    "Green Lane Mosque",
    "Muslim Aid",
  ];

  // Toggle selection state for options
  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header
            peace={"Peace Be Upon You"}
            title={"Supporting the Ummah for a Dignified End."}
          />
          <Searchbar placeholder={"Search Here"} />

          {optionsData?.map((item, index) => {
            const isSelected = selectedOptions.includes(item);
            return (
              <TouchableOpacity
                key={index}
                style={styles.optionsbody}
                onPress={() => handleOptionSelect(item)}
              >
                <View style={styles.innerbody}>
                  <View style={styles.iconbody}>
                    <Image
                      source={require("../../assets/18.png")}
                      style={{ height: "50%", width: "50%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.optiontext}>{item}</Text>
                </View>
                {isSelected && (
                  <AntDesign name="checkcircle" size={18} color="#2FA849" />
                )}
              </TouchableOpacity>
            );
          })}

          <Text style={styles.confirmtext}>
            I confirm my interest in partnering with the selected Partner(s)
            above and to express my full agreement with the proposed terms.
          </Text>

          <TouchableOpacity
            onPress={() => setAgree(!Agree)}
            style={styles.termsbody}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.termpicbody}></View>
              <Text style={styles.mmbtext}>Agree to T&C's</Text>
            </View>
            {Agree ? (
              <AntDesign name="checkcircle" size={18} color="#2FA849" />
            ) : null}
          </TouchableOpacity>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <StandardButton
              title={"Click to proceed"}
              onPress={() => props?.navigation?.navigate("Createterms")}
            />
          </View>
        </View>
      </ScrollView>
      <Bottommenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Searchpublic);
