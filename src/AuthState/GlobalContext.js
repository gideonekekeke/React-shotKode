import React, { useEffect, useState, createContext } from "react";
import { app } from "../Base";

const db = app.firestore().collection("Teachers");
const sch = app.firestore().collection("Schools");

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [current, setCurrent] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);

      db.doc(user.uid)
        .get()
        .then((doc) => {
          setCurrentData(doc.data());
        });
    });
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);

      sch
        .doc(user.uid)
        .get()
        .then((doc) => {
          setCurrentUser(doc.data());
        });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        current,
        currentData,
        currentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
