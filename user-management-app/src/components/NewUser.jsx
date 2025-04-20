import React, { useContext, useState } from "react";
//import { UsersContext } from "./CONTEXT-API/UserContext";
import useUsersContext from "./HOOKS/useUsersContext";

const NewUser = () => {
  //const { setUsers } = useContext(UsersContext);
  const { setUsers } = useUsersContext();
  const [username, setUsername] = useState("");

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    //console.log(newUser);
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUsername("");
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
        />
        <button type="submit">add user</button>
      </form>
    </div>
  );
};

export default NewUser;
