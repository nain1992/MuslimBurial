import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Donatepage/main";
import { useState } from "react";
import Bottommenu from "../../globalComponents/Bottommenu";
import Donateheader from "../../globalComponents/Donateheader";
import StandardButton from "../../globalComponents/StandardButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const Donatepage = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [amount, setAmount] = useState("");
  const [Agree, setAgree] = useState(1);
  const [selectedpayment, setSelectedpayment] = useState(null);
  const [selectedamount, setSelectedamount] = useState(null);

  const handlepaymentselection = (index) => {
    setSelectedpayment(index);
  };

  const handleamount = (index) => {
    setSelectedamount(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollwrapper}>
          <Donateheader title={"DONATE"} navigation={props?.navigation} />

          <View style={styles.profilename}>
            <Text style={styles.name}>Public Burial Fund</Text>
          </View>

          <Text style={styles.text}>
            The public burial fund serves as a compassionate lifeline for
            individuals facing the challenging circumstances of being unable to
            afford a proper funeral, lacking family support, or encountering
            financial shortfalls.
          </Text>

          <View style={styles.paymentwrapper}>
            {["Single", "Monthly"]?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handlepaymentselection(index)}
                  key={index}
                  style={[
                    styles.paymentbox,
                    {
                      backgroundColor:
                        selectedpayment === index ? "#5CB9F2" : "#EFEFEF",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.paymenttext,
                      {
                        color: selectedpayment === index ? "#fff" : "#272B2B",
                      },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}

            {["£5", "£15", "£20"]?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleamount(index)}
                  key={index}
                  style={[
                    styles.amountbox,
                    {
                      backgroundColor:
                        selectedamount === index ? "#5CB9F2" : "#EFEFEF",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.paymenttext,
                      {
                        color: selectedamount === index ? "#fff" : "#272B2B",
                      },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.ortext}>OR</Text>

          <View style={styles.profilename}>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={(val) => setAmount(val)}
              keyboardType="decimal-pad"
              placeholder="Enter amount Manually"
            />
          </View>

          <TouchableOpacity
            onPress={() => setAgree(1)}
            style={styles.termsbody}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.termpicbody}></View>
              <Text style={styles.mmbtext}>Administration</Text>
            </View>
            {Agree === 1 ? (
              <AntDesign name="checkcircle" size={18} color="#2FA849" />
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setAgree(2)}
            style={styles.termsbody}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.termpicbody}></View>
              <View style={{ width: "70%" }}>
                <Text style={styles.mmbtext}>
                  Yes, I would like Gift Aid claimed on my donation.
                </Text>
              </View>
            </View>
            {Agree === 2 ? (
              <AntDesign name="checkcircle" size={18} color="#2FA849" />
            ) : null}
          </TouchableOpacity>

          <Text style={styles.aidtext}>What is Gift Aid?</Text>
          <Text style={styles.content}>
            By allowing, my muslim burial to claim Gift Aid, you can increase
            the value of your donation by 25% at no cost to you. Your donation
            of £5 will be worth £6.25 without you spending an extra penny.
          </Text>

          <View style={styles.btnwrapper}>
            <StandardButton
              title={"Continue to payment"}
              onPress={() => props?.navigation?.navigate("Singlepayment")}
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

export default connect(mapStateToProps, {})(Donatepage);
