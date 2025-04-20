import React, { useContext } from "react";
import User from "./User";
//import { UsersContext } from "./CONTEXT-API/UserContext";
import useUsersContext from "./HOOKS/useUsersContext";

const Users = () => {
  //const { users } = useContext(UsersContext);
  const { users, setUsers } = useUsersContext();
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </section>
  );
};

export default Users;
/* USER-MANAGEMENT-APP without context api
import React from "react";
import User from "./User";

const Users = ({ users, handleDeleteUser }) => {
  return (
    <section className="users">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          handleDeleteUser={handleDeleteUser}
        ></User>
      ))}
    </section>
  );
};
*/
