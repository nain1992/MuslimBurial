import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin/Signin";
import Register from "../screens/Register/Register";
import Entercode from "../screens/Entercode/Entercode";
import Accountcreated from "../screens/Accountcreated/Accountcreated";
import Home from "../screens/Home/Home";
import Article from "../screens/Article/Article";
import Groupchoice from "../screens/Groupchoice/Groupchoice";
import Creategroup from "../screens/Creategroup/Creategroup";
import Dashboard from "../screens/Dashboard/Dashboard";
import Directdebit from "../screens/Directdebit/Directdebit";
import Chatpage from "../screens/Chatpage/Chatpage";
import Transactionhistory from "../screens/Transactionhistory/Transactionhistory";
import Createcommunity from "../screens/Createcommunity/Createcommunity";
import Newcommunity from "../screens/Newcommunity/Newcommunity";
import Searchpublic from "../screens/Searchpublic/Searchpublic";
import Createterms from "../screens/Createterms/Createterms";
import Donatepage from "../screens/Donatepage/Donatepage";
import Singlepayment from "../screens/Singlepayment/Singlepayment";
import Thankupage from "../screens/Thankupage/Thankupage";
import Profile from "../screens/Profle/Profile";
import Personalinfo from "../screens/Personalinfo/Personalinfo";
import Nexttokin from "../screens/Nexttokin/Nexttokin";
import Securityquestion from "../screens/Securityquestion/Securityquestion";
import Form from "../screens/Form/Form";
import Verification from "../screens/Verification/Verification";
import Localmosque from "../screens/Localmosque/Localmosque";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Signin" component={Signin} />
      <Screen name="Register" component={Register} />
      <Screen name="Entercode" component={Entercode} />
      <Screen name="Accountcreated" component={Accountcreated} />
      <Screen name="Home" component={Home} />
      <Screen name="Article" component={Article} />
      <Screen name="Groupchoice" component={Groupchoice} />
      <Screen name="Creategroup" component={Creategroup} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Directdebit" component={Directdebit} />
      <Screen name="Chatpage" component={Chatpage} />
      <Screen name="Transactionhistory" component={Transactionhistory} />
      <Screen name="Createcommunity" component={Createcommunity} />
      <Screen name="Newcommunity" component={Newcommunity} />
      <Screen name="Searchpublic" component={Searchpublic} />
      <Screen name="Createterms" component={Createterms} />
      <Screen name="Donatepage" component={Donatepage} />
      <Screen name="Singlepayment" component={Singlepayment} />
      <Screen name="Thankupage" component={Thankupage} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Personalinfo" component={Personalinfo} />
      <Screen name="Nexttokin" component={Nexttokin} />
      <Screen name="Localmosque" component={Localmosque} />

      <Screen name="Securityquestion" component={Securityquestion} />
      <Screen name="Form" component={Form} />
      <Screen name="Verification" component={Verification} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
