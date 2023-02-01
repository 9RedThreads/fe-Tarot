import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

import  AuthScreen from "../Screens/AuthScreen"; 
import ThreeCardsReadingScreen from "../Screens/ThreeCardsReadingScreen";
import OneCardReadingScreen from "../Screens/OneCardReadingScreen";
import JournalEntriesScreen from '../Screens/JournalEntriesScreen';



// Authentocation - For checking if user logged in
import { useFocusEffect } from "@react-navigation/native";
import { autoLogin } from "../Screens/AuthScreen"; 
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  ThreeCardsReading: undefined;
  OneCardReading: undefined;
  Auth: { isLogout: boolean };
};
  const RootStack = createNativeStackNavigator<RootStackParamList>();




const RootNavigator = () => {

  type rootParmaType = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<rootParmaType>();
  const authCtx = useContext(AuthContext);
  const server = authCtx.production ? authCtx.urls.pro : authCtx.urls.dev;
  const api = `${server}/api/users/profile`;
  
  useEffect(() => {
    // console.log("is user logged in? ", authCtx.isLogged);
    if (!authCtx.isLogged) {
      autoLogin(api)
        .then((user: any) => {
          const { email, jwt, user_id, user_name } = user;
          authCtx.setJwt(jwt);
          authCtx.setIsloggedIn(true);
          authCtx.setEmail(email);
          authCtx.setUsername(user_name);
          authCtx.setUserId(user_id.toString());
          navigation.navigate("BottomTabNavigator");
        })
        .catch((err) => {
          navigation.navigate("Auth", { isLogout: false });
        });
    } else {
      navigation.navigate("BottomTabNavigator");
    }
  }, [authCtx.isLogged]);



  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerBackVisible: false }}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen
          name="ThreeCardsReading"
          component={ThreeCardsReadingScreen}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen
          name="OneCardReading"
          component={OneCardReadingScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;