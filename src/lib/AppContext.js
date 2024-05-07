"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [anchor, setAnchor] = useState("HOME");
  const [accordion, setAccordion] = useState(1);
  const [page, setPage] = useState(1);
  const [valueTesti, setValueTesti] = useState(0);

  return (
    <AppContext.Provider
      value={{
        anchor,
        setAnchor,
        accordion,
        setAccordion,
        page,
        setPage,
        valueTesti,
        setValueTesti,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, MyContext, AppContextProvider };
