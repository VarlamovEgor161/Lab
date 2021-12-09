import React from "react";
import UserListClass from "./jsx/UserListClass";
import BestFriendsList from "./jsx/BestFriendsList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1>Все пользователи</h1>
        <UserListClass />
        <BestFriendsList />
      </div>
    </div>
  );
}
