import { createContext, useState } from "react";
import React from "react";

//export const UsersContext = createContext({});
export const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 101, username: "Anisul Islam" },
    { id: 102, username: "Rashed khan" },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
