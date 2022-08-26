import React, { createContext, useState } from "react";

export const contexto = createContext();
export const Datos = ({ children }) => {
  const [color, setColor] = useState("silver");
  return (
    <>
      <contexto.Provider value={{ color, setColor }}>
        {children}
      </contexto.Provider>
    </>
  );
};
