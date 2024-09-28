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
import { styles as _styles } from "../../styles/Createcommunity/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Ionicons from "@expo/vector-icons/Ionicons";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import Searchbar from "./componnents/Searchbar";
import Standardfield from "../../globalComponents/Standardfield";
import Entypo from "@expo/vector-icons/Entypo";

const Createcommunity = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [search, setSearch] = useState("");
  const [Name, setName] = useState("");
  const [id, setId] = useState("");
  const [passcode, setPasscode] = useState("");
  const [hidepassword, setHidepassword] = useState(true);
  const [hidecode, setHidecode] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <View style={styles.optionswrapper}>
            <TouchableOpacity
              onPress={() => props?.navigation?.goBack()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
              <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Community Groups</Text>
          <Text style={styles.textmsg}>
            You have the choice to either become a part of an existing public
            group via search, join aa private group by entering the provided
            details or form a new group customised for your own circle of
            individuals.
          </Text>
          <Text style={styles.heading}>Public Community Group</Text>
          <Text style={styles.textmsg}>
            Search and Choose from Trusted Community Partners
          </Text>
          <Searchbar
            placeholder="Search Here"
            value={search}
            onChangeText={(val) => setSearch(val)}
          />
          <View style={styles.orwrapper}>
            <View style={styles.bar}></View>
            <Text style={styles.ortext}>OR</Text>
            <View style={styles.bar}></View>
          </View>
          <Text style={styles.heading}>Join a Private Community Group </Text>
          <Text style={styles.fieldtitle}>Enter Group Name</Text>
          <Standardfield
            placeholder="Name"
            value={Name}
            onChangeText={(val) => setName(val)}
          />
          <Text style={styles.fieldtitle}>Enter Unique ID Provided</Text>
          <Standardfield
            placeholder="5 Digit Code"
            value={id}
            onChangeText={(val) => setId(val)}
            secureTextEntry={hidecode ? true : false}
            icon={<Entypo name="eye-with-line" size={15} color="#4B4B4B" />}
            onPress={() => setHidecode(!hidecode)}
          />
          <Text style={styles.fieldtitle}>Enter Passcode Provided</Text>
          <Standardfield
            placeholder="Minimum 8 letters"
            value={passcode}
            onChangeText={(val) => setPasscode(val)}
            icon={<Entypo name="eye-with-line" size={15} color="#4B4B4B" />}
            maxLength={8}
            secureTextEntry={hidepassword ? true : false}
            onPress={() => setHidepassword(!hidepassword)}
          />
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <StandardButton title={"JOIN NOW"} />
          </View>
          <View style={styles.orwrapper}>
            <View style={styles.bar}></View>
            <Text style={styles.ortext}>OR</Text>
            <View style={styles.bar}></View>
          </View>
          <Text style={styles.heading}>Create a Community Group </Text>
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <StandardButton
              customStyles={{ backgroundColor: "#27AE60" }}
              title={"Create a community group"}
              onPress={() => props?.navigation?.navigate("Newcommunity")}
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
export default connect(mapStateToProps, {})(Createcommunity);
