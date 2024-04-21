import React, { useState, useEffect } from "react";
import "./App.css";
import AerialInput from "./Components/User/AerialInput";
import UserList from "./Components/User/UserList";

function App() {
  const Dummy_Data = [];
  const [enteredUserDummyData, setUserDummyData] = useState(Dummy_Data);

  const onNewUserHandler = (userData) => {
    setUserDummyData((prevData) => {
      console.log([userData, ...prevData]);
      return [userData, ...prevData];
    });
  };

  // useEffect(() => {
  //   const savedData = localStorage.getItem("enteredUserDummyData");
  //   if (savedData) {
  //     setUserDummyData(JSON.parse(savedData));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("formData", JSON.stringify(enteredUserDummyData));
  // }, [enteredUserDummyData]);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Welcome to Practice Project
      </h1>
      <AerialInput onAddUserData={onNewUserHandler} />
      <UserList users={enteredUserDummyData} />
    </div>
  );
}

export default App;
