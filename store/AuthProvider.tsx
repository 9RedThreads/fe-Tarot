import AuthContext from "./auth-context";
import { useState } from 'react';

const AuthContextProvider = (props:any) => {
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false);
    const [jwt, setJwt] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const loadTokenFromLocalStorageHandler = () => {};
    const saveTokenFromLocalStorageHandler = () => {};
    const urls = {
      dev: "http://localhost:8000",
      pro: "https://tarot-api-k1ed.onrender.com",
    };

    const reset = () => {
        setIsloggedIn(false)
        setJwt("")
        setUsername("")
        setUserId("");
        setEmail("");
    };

    const authContext = {
      isLogged: isLoggedIn,
      production: true,
      userId:userId,
      jwt: jwt,
      email: email,
      username: username,
      urls: urls,
      reset:reset,
      setJwt: setJwt,
      setEmail: setEmail,
      setUsername: setUsername,
      setUserId: setUserId,
      setIsloggedIn: setIsloggedIn,
      loadTokenFromLocalStorage: () => {},
      saveTokenFromLocalStorage: () => {}
    };

    return (
        <AuthContext.Provider value={authContext}>
          {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
