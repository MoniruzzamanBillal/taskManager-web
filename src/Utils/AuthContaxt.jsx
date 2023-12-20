import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./Firebase.config";

export const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sum, setSum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  // function for register a user
  const registerEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email login
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out function
  const logOut = () => {
    return signOut(auth);
  };

  // user change effect
  useEffect(() => {
    setLoading(true);
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unscribe();
  }, []);

  // !  context value
  const contextValue = {
    sum,
    setSum,
    user,
    loading,
    logOut,
    registerEmail,
    emailLogin,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
