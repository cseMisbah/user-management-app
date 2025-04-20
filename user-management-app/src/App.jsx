import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UsersProvider, {
  UsersContext,
} from "./components/CONTEXT-API/UserContext";

function App() {
  return (
    <UsersProvider>
      <div>
        <NewUser></NewUser>
        <Users />
      </div>
    </UsersProvider>
  );
}

export default App;

/*
USER-MANAGEMENT-APP CODE without context
function App() {
  const [users, setUsers] = useState([
    { id: 101, username: "Anisul Islam" },
    { id: 102, username: "Rashed khan" },
  ]);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  const handleAddNewUser = (NewUser) => {
    setUsers((preveState) => [...preveState, NewUser]);
  };

  return (
    <div>
      <NewUser handleAddNewUser={handleAddNewUser}></NewUser>
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
*/
