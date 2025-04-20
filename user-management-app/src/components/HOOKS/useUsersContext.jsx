import React, { useContext } from "react";
import { UsersContext } from "../CONTEXT-API/UserContext";

export const useUsersContext = () => {
  return useContext(UsersContext);
};

export default useUsersContext;
