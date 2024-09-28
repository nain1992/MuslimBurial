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
import { styles as _styles } from "../../styles/Singlepayment/main";
import Donateheader from "../../globalComponents/Donateheader";
import StandardButton from "../../globalComponents/StandardButton";
import Bottommenu from "../../globalComponents/Bottommenu";

const Singlepayment = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let fieldsdata = [
    {
      title: "Card Holder Name",
      placeholder: "Name",
    },
    {
      title: "Card Number",
      placeholder: "1234 567 895 567",
    },
    {
      title: "Expiry Date",
      placeholder: "07/23",
    },
    {
      title: "CVV",
      placeholder: "111",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Donateheader title={"CARD DETAILS"} navigation={props?.navigation} />
        <View style={styles.profilename}>
          <Text style={styles.name}>Donation Summary</Text>
        </View>
        <Text style={styles.singlepayment}>£5 Single Payment</Text>
        <View style={styles.cardbody}>
          <Image
            source={require("../../assets/card.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.fieldbody}>
          {fieldsdata?.map((item, index) => {
            return (
              <>
                <Text key={index} style={styles.titletext}>
                  {item?.title}
                </Text>

                <View style={styles.fieldinnerbody}>
                  <TextInput
                    style={styles.name}
                    placeholder={item?.placeholder}
                  />
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={"Confirm Payment"}
            onPress={() => props?.navigation?.navigate("Directdebit")}
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
export default connect(mapStateToProps, {})(Singlepayment);
