import { createContext, useState } from "react";

export const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sum, setSum] = useState(0);

  const contextValue = {
    sum,
    setSum,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
