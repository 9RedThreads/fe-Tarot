import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { Input, Icon } from "@rneui/themed";
import React from "react";
import axios from "axios";
import { AxiosError, AxiosResponse } from "axios";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Changes :
// 1) Screens/AuthScreen.tsx
//
// 2) Add folder "store", and all the files inside
//
// 3) In "navigator/BottomTabNavigator.tsx" :
//    --(line 13) add " import { useFocusEffect } from "@react-navigation/native";"
//    --(line 1 ) add " import {  useContext } from "react";
//    --(line 2 ) add " import AuthContext from "../store/auth-context";"
//    --(line 30 ) add :
//        const authCtx = useContext(AuthContext);
//        useFocusEffect(() => { .... });
//
// 4) In main directory "App.tsx" :
//    --(line 6 ) add " import AuthContextProvider from "./store/AuthProvider";
//
//    --(line 10 & 14 ) add "<AuthContextProvider> ... </AuthContextProvider>""
//    function App() {
//      return (
//          <AuthContextProvider>     <<< this
//            <NavigationContainer>
//            <RootNavigator />
//            </NavigationContainer>
//          </AuthContextProvider>    <<< and this
//        );
//     }
//
// 5) In "Screens/MainScreen.tsx" :
//    --(line 1 - 2) add :
//        import { Component, useContext, useLayoutEffect } from "react";
//        import { ScrollView, Text, TouchableOpacity, Button,View, Image,SafeAreaView } from "react-native";
//    --(line 8) add: import authContext from "../store/auth-context";
//    --(line 27 - 32) add :
//        const authCtx = useContext(authContext);
//        useLayoutEffect(() => {
//          navigation.setOptions({
//            headerShown: false,
//           });
//          }, []);
//
//    --(line 34 - 71) add "LoginButton, LogoutButton , "
//    --(line 75 - 91) Change <ScrollView> to   <SafeAreaView>
//
// 6) In "Screens/RootNavigator.tsx" --(line 11 to 58) :
// Authentocation - For checking if user logged in
// import { autoLogin } from "../Screens/AuthScreen";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// import { useContext, useEffect } from "react";
// import AuthContext from "../store/auth-context";

// export type RootStackParamList = {
//   BottomTabNavigator: undefined;
//   ThreeCardsReading: undefined;
//   OneCardReading: undefined;
//   Auth: { isLogout: boolean };
// };
//   const RootStack = createNativeStackNavigator<RootStackParamList>();
//
// const RootNavigator = () => {

//   type rootParmaType = NativeStackNavigationProp<RootStackParamList>;
//   const navigation = useNavigation<rootParmaType>();
//   const authCtx = useContext(AuthContext);
//   const server = authCtx.production ? authCtx.urls.pro : authCtx.urls.dev;
//   const api = `${server}/api/users/profile`;

//   useEffect(() => {
//     // console.log("is user logged in? ", authCtx.isLogged);
//     if (!authCtx.isLogged) {
//       autoLogin(api)
//         .then((user: any) => {
//           const { email, jwt, user_id, user_name } = user;
//           authCtx.setJwt(jwt);
//           authCtx.setIsloggedIn(true);
//           authCtx.setEmail(email);
//           authCtx.setUsername(user_name);
//           authCtx.setUserId(user_id.toString());
//           navigation.navigate("BottomTabNavigator");
//         })
//         .catch((err) => {
//           navigation.navigate("Auth", { isLogout: false });
//         });
//     } else {
//       navigation.navigate("BottomTabNavigator");
//     }
//   }, [authCtx.isLogged]);
//
//
//

// 6) In "Screens/RootNavigator.tsx" --(line 70 to 76) :
//      <RootStack.Group>
//        <RootStack.Screen
//          name="Auth"
//          component={AuthScreen}
//          options={{ headerBackVisible: false }} <--- this
//        />
//      </RootStack.Group>;

type AuthParamType = NativeStackNavigationProp<RootStackParamList>;

const AuthScreen = ({ route }: any) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [pendingUserId, setPendingUserId] = useState<number | null>(null);
  const [showLoginPage, setshowLoginPage] = useState<boolean>(false);
  const [showConfirmPage, setshowConfirmPage] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation<AuthParamType>();

  useEffect(() => {
    setErrMsg("");
  }, [showLoginPage]);

  useEffect(() => {
    if (route.params?.isLogout) {
      logout();
    }
  }, []);

  // -------- Store JWT to Local Storage ---------//
  const storeJWT = (jwt: string) => {
    return AsyncStorage.setItem("@jwt", jwt).catch((err) => {
      console.log(err, "< err in save to local storage");
      return err;
    });
  };
  // -------- Store JWT to Local Storage ---------//

  // --------  ConfirmPage Component ------------//
  const ConfirmPage = () => {
    const [code, setCode] = useState<string>("");
    const submitCodeHandler = () => {
      if (code.length === 0) {
        setErrMsg("Error. Verification code cannot be empty");
        setTimeout(() => {
          setErrMsg("");
        }, 1800);
        return;
      }

      if (isNaN(+code) || code.length < 4) {
        setErrMsg("Error. Verification code must be a 4-digit number");
        setTimeout(() => {
          setErrMsg("");
        }, 1800);
        return;
      }

      const server = authCtx.production ? authCtx.urls.pro : authCtx.urls.dev;
      const api = `${server}/api/auth/signUpConfirm`;

      axios({
        method: "post",
        url: api,
        data: { code: +code, pendingUserId },
      })
        .then((response: AxiosResponse) => {
          const { email, jwt, user_id, user_name } = response!.data.user;
          authCtx.setJwt(jwt);
          authCtx.setIsloggedIn(true);
          authCtx.setEmail(email);
          authCtx.setUsername(user_name);
          authCtx.saveTokenFromLocalStorage();
          authCtx.setUserId(user_id.toString());
          navigation.navigate("BottomTabNavigator");
        })
        .catch((error: AxiosError) => {
          const errorData: any = error!.response!.data;
          if (errorData.msg) {
            setErrMsg(`${errorData.msg}. \nPlease try to Sign Up again`);
            setTimeout(() => {
              setErrMsg("");
              setshowConfirmPage(false);
            }, 2000);
          } else {
            setErrMsg("Error During Login. Please try again later");
          }
        });
    };

    return (
      <View style={confirmPageStyles.main_container}>
        <Text style={confirmPageStyles.title}>Email Verification</Text>
        <Text style={confirmPageStyles.description}>
          Please enter the verification code that is sent to you email
        </Text>
        {errMsg && <Text style={styles.errorMessage}>{errMsg}</Text>}
        <Input
          placeholder="verification code"
          style={confirmPageStyles.input}
          value={code}
          onChangeText={(value) => setCode(value)}
        />
        {!errMsg && <Button title="submit" onPress={submitCodeHandler} />}
      </View>
    );
  };
  // -------------------  ConfirmPage Component ------------------ //

  // --------------------- signup function ------------------------//
  const signup = async () => {
    if (username.length === 0) {
      setErrMsg("Error: User name cannot be empty");
      setTimeout(() => {
        setErrMsg("");
      }, 1800);
      return;
    }

    if (username.length > 30) {
      setErrMsg("Error: User name cannot be excess 30 characters");
      setTimeout(() => {
        setErrMsg("");
      }, 1800);
      return;
    }

    if (email.length === 0) {
      setErrMsg("Error. Email cannot be empty");
      setTimeout(() => {
        setErrMsg("");
      }, 1800);
      return;
    }

    if (password.length === 0) {
      setErrMsg("Error: Password cannot be empty");
      setTimeout(() => {
        setErrMsg("");
      }, 1800);
      return;
    }

    const server = authCtx.production ? authCtx.urls.pro : authCtx.urls.dev;
    const api = `${server}/api/auth/signup`;
    axios({
      method: "post",
      url: api,
      data: { username, email, password },
    })
      .then((response: AxiosResponse) => {
        setPendingUserId(() => response!.data.pendingUserId);
        setshowConfirmPage(true);
      })
      .catch((error: AxiosError) => {
        const errorData: any = error!.response!.data;
        if (errorData.msg) {
          setErrMsg(`Error: ${errorData.msg}`);
        } else {
          setErrMsg("Error During Sign Up. Please try again later");
        }
      });
  };

  // --------------------- Login function ------------------------//
  const login = () => {
    if (email.length === 0) {
      setErrMsg("Error. Email cannot be empty");
      setTimeout(() => {
        setErrMsg("");
      }, 1800);
      return;
    }

    if (password.length === 0) {
      setErrMsg("Error. password cannot be empty");
      setTimeout(() => {
        setErrMsg("");
      }, 1800);
      return;
    }

    const server = authCtx.production ? authCtx.urls.pro : authCtx.urls.dev;
    const api = `${server}/api/auth/login`;

    axios({
      method: "post",
      url: api,
      data: { email, password },
    })
      .then((response: AxiosResponse) => {
        const { email, jwt, user_id, user_name } = response!.data.user;
        authCtx.setJwt(jwt);
        authCtx.setIsloggedIn(true);
        authCtx.setEmail(email);
        authCtx.setUsername(user_name);
        authCtx.saveTokenFromLocalStorage();
        authCtx.setUserId(user_id.toString());
        storeJWT(jwt);
        navigation.navigate("BottomTabNavigator");
      })
      .catch((error: AxiosError) => {
        const errorData: any = error!.response!.data;
        if (errorData.msg) {
          setErrMsg(`Error: ${errorData.msg}`);
        } else {
          setErrMsg("Error During Login. Please try again later");
        }
      });
  };
  // --------------------- Login function ------------------------//

  // --------------------- Logout function ------------------------//

  const logout = () => {
    authCtx.reset();
    storeJWT("");
    navigation.navigate("BottomTabNavigator");
  };
  // --------------------- Logout function ------------------------//

  // --------------------- Utils Functions ------------------------//
  function showLoginPageHandler() {
    setshowLoginPage((prevState) => !prevState);
  }

  // -------------- View ------------------------//

  if (showConfirmPage) return <ConfirmPage />;

  return (
    <View style={styles.main_container}>
      <View style={styles.welcome_container}>
        <Text style={styles.welcomeText}> Tarot Journal</Text>
      </View>

      <View className="create_acccount" style={styles.inputs_container}>
        {!showLoginPage ? (
          <View style={styles.title_view}>
            <Text style={styles.title_text}>Create Account</Text>
            <Button title="Switch to login" onPress={showLoginPageHandler} />
          </View>
        ) : (
          <View style={styles.title_view}>
            <Text style={styles.title_text}>Log In</Text>
            <Button title="Switch to Sign up" onPress={showLoginPageHandler} />
          </View>
        )}

        {errMsg && <Text style={styles.errorMessage}>{errMsg}</Text>}

        {!showLoginPage && (
          <View style={styles.inputField}>
            <Icon
              style={styles.icon}
              name="box"
              type="entypo"
              color="#EB6A7C"
            />
            <Input
              placeholder="User Name"
              value={username}
              onChangeText={setUsername}
            />
          </View>
        )}

        <View style={styles.inputField}>
          <Icon style={styles.icon} name="box" type="entypo" color="#EB6A7C" />
          <Input placeholder="Email" value={email} onChangeText={setEmail} />
        </View>

        <View style={styles.inputField}>
          <Icon style={styles.icon} name="box" type="entypo" color="#EB6A7C" />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {!showLoginPage ? (
          <Button title="signup" onPress={signup} />
        ) : (
          <Button title="Login" onPress={login} />
        )}
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  main_container: {
    padding: 20,
    flex: 1,
    // backgroundColor: "brown",
  },
  welcome_container: {
    marginBottom: 0,
    // backgroundColor: "#C7E0F4",
    border: 1,
  },
  welcomeText: {
    fontSize: 40,
    marginBottom: 2,
    color: "black",
  },
  inputs_container: {},
  errorMessage: {
    // borderWidth: 1,
    color: "red",
    padding: 10,
    marginBottom: 30,
    marginTop: 30,
  },
  title_view: {
    // borderWidth: 1,
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 30,
  },
  title_text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  title_button: {},
  inputField: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 6,
  },
});

const confirmPageStyles = StyleSheet.create({
  main_container: {
    padding: 20,
    // backgroundColor: "darkGrey",
  },
  title: {
    fontSize: 30,
  },
  description: {
    marginTop: 20,
    fontSize: 15,
  },
  input: {
    marginTop: 100,
    textAlign: "center",
  },
});

export const autoLogin = (api: any) => {
  let _token: string | null;
  return AsyncStorage.getItem("@jwt")
    .then((token: string | null) => {
      _token = token;
      if (!token) return Promise.reject(false);
      return axios({
        method: "get",
        url: api,
        headers: { Authorization: `bearer ${token}` },
      });
    })
    .then((response: AxiosResponse) => {
      const user = response!.data.user;
      user["jwt"] = _token;
      return Promise.resolve(user);
    })
    .catch((err) => {
      return Promise.reject(false);
    });
};
