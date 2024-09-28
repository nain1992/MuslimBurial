import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Directdebit/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { getPercent } from "../../middleware";
import StandardButton from "../../globalComponents/StandardButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Bottommenu from "../../globalComponents/Bottommenu";

const Directdebit = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let fieldsdata = [
    {
      title: "Account Name",
      placeholder: "Benjamin Evalent",
    },
    {
      title: "Account Number ",
      placeholder: "1234 567 895 567",
    },
    {
      title: "Sort Code",
      placeholder: "0123",
    },
    {
      title: "Address Post Code",
      placeholder: "Start typing your post code and choose from the list",
    },
    {
      title: "When would you like to  donate each month? ",
      placeholder: "1st Day of the Month",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginBottom: getPercent(9, height) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerbody}>
          <TouchableOpacity
            onPress={() => props?.navigation?.goBack()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={18} color="#5CB9F2" />
            <Text style={styles.headertitle}>Back</Text>
          </TouchableOpacity>
          <View style={styles.titlewrapper}>
            <Text style={styles.headertitle1}>DIRECT DEBIT</Text>
          </View>
        </View>
        <View style={styles.profilename}>
          <Text style={styles.summarytext}>Group Direct Set Up</Text>
        </View>
        <Text style={styles.singlepayment}>£5 a month</Text>

        <View style={styles.fieldbody}>
          {fieldsdata?.map((item, index) => {
            return (
              <>
                <Text key={index} style={styles.titletext}>
                  {item?.title}
                </Text>

                <View style={styles.fieldinnerbody}>
                  <TextInput
                    style={styles.input}
                    placeholder={item?.placeholder}
                  />
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={"CONFIRM PAYMENT"}
            onPress={() => props?.navigation?.navigate("Thankupage")}
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
export default connect(mapStateToProps, {})(Directdebit);
