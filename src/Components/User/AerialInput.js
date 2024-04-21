import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Overlay from "../UI/Overlay";
import styles from "./AerialInput.module.css";

const AerialInput = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [overlay, setOverlay] = useState();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setOverlay(null);
  };

  const addUserFormSubmitted = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || userAge.trim().length === 0) {
      {
        setOverlay({
          title: "Invalid Input",
          message: "Please enter a valid name and age!",
        });
      }
      return;
    }

    if (Number(userAge) < 1) {
      setOverlay({
        title: "Invalid age",
        message: "Please enter valid age (age > 0)",
      });
      return;
    }
    const userData = {
      name: username,
      age: userAge,
      id: `u${Math.random()}`,
    };
    setUserAge("");
    setUsername("");
    props.onAddUserData(userData);
    console.log(userData);
  };

  return (
    <>
      {overlay && (
        <Overlay
          title={overlay.title}
          message={overlay.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserFormSubmitted}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            type="text"
            onChange={usernameHandler}
          />

          <label htmlFor="age">Enter your Age</label>
          <input id="age" type="number" value={userAge} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AerialInput;
