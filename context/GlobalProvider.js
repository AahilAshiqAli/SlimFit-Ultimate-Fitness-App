import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../lib/appwrite";
// we will overlap this over whole tabs screens.
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  //  functional component that acts as a context provider. It wraps around any components that need access to the context values.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // to hold info we get from getCurrentUser function in appwrite
  const [IsLoading, setIsLoading] = useState(true); // when function called it will go to true

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // finally exists because we want to execute this statement in async non parallel way plus we want to execute
    // this no matter if it goes in try or catch block.
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        IsLoading,
      }} // this will be wrapped around any component which calls it -- with inof that is embedded in values parameter.
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
