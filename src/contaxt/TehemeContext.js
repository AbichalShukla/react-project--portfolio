import React, { useContext } from "react";
import { useState, createContext } from "react";

const TehemeContext = createContext();
const TehemeProvider = ({ children }) => {
  const [teheme, setTeheme] = useState("light");

  return (
    <TehemeContext.Provider value={[teheme, setTeheme]}>
      {children}
    </TehemeContext.Provider>
  );
};
// custum hook
const useTeheme = () => useContext(TehemeContext);
export { useTeheme, TehemeProvider };
