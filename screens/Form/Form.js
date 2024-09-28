import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Nexttokin/main";
import Profileheader from "../../globalComponents/Profileheader";
import Profilefields from "../../globalComponents/Profilefields";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getPercent } from "../../middleware";
const Form = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");
  const [enquiry, setEnquiry] = useState("Select Enquiry");
  const [modalVisible, setModalVisible] = useState(false);

  const enquiryOptions = [
    "General Enquiry",
    "Technical Support",
    "Billing",
    "Other",
  ];

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => {
        setEnquiry(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <Profileheader
            title={"Feedback Form"}
            navigation={props?.navigation}
          />

          <TouchableOpacity
            style={styles.customPicker}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.pickerText}>{enquiry}</Text>
            <AntDesign name="down" size={18} color="#ADB4C0" />
          </TouchableOpacity>

          <Profilefields
            image={require("../../assets/p1.png")}
            placeholder="Subject"
            value={subject}
            onChangeText={(val) => setSubject(val)}
          />
          <Profilefields
            typeheight={{
              alignItems: "flex-start",
              height: getPercent(30, height),
              padding: 10,
            }}
            feedbackinput={{
              height: "90%",
              textAlignVertical: "top",
            }}
            multiline
            image={require("../../assets/p1.png")}
            placeholder="Type here"
            value={feedback}
            onChangeText={(val) => setFeedback(val)}
          />
          <TouchableOpacity style={styles.nextbtn}>
            <Text style={styles.btntext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={enquiryOptions}
              renderItem={renderOption}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Form);
