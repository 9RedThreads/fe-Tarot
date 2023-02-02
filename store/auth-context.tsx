import React from "react";



const AuthContext = React.createContext({
  isLogged: false,
  production: false,
  userId: "",
  jwt: "",
  email: "",
  username: "",
  urls: { pro: "", dev: "" },
  setJwt: (token: string) => {},
  setEmail: (email: string) => {},
  setUsername: (username: string) => {},
  setUserId: (userId: string) => {},
  setIsloggedIn: (arg: boolean) => {},
  reset:()=>{},
  loadTokenFromLocalStorage: () => {},
  saveTokenFromLocalStorage: () => {},
});

export default AuthContext;