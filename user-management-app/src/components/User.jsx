import React, { useContext } from "react";
import useUsersContext from "./HOOKS/useUsersContext";
//import { UsersContext } from "./CONTEXT-API/UserContext";

const User = ({ user }) => {
  const { id, username } = user;
  //const { users, setUsers } = useContext(UsersContext);
  const { users, setUsers } = useUsersContext();
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <article className="user">
      <h1>{id}</h1>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
//USER-MANAGEMENT-APP without context api
/*
const User = ({ user }) => {
  const { id, username } = user;

  const handleDelete = (id) => {
    handleDeleteUser(id);
  };

  return (
    <article className="user">
      <h1>{id}</h1>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
*/
