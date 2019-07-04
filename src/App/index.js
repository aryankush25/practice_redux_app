/* eslint-disable no-alert */
import React, { Fragment } from "react";
import { SubmissionError } from "redux-form";
import LoginForm from "../Components/LoginForm";

const App = () => {
  const myInitialValues = {
    username: "Aryan",
    password: ""
  };

  const submit = inputs => {
    if (["Aryan", "batman"].includes(inputs.username)) {
      throw new SubmissionError({
        username: "Username already taken"
      });
    } else {
      window.alert(JSON.stringify(inputs));
    }
  };

  return (
    <Fragment>
      <h1>Geeky Form</h1>
      <LoginForm onSubmit={submit} initialValues={myInitialValues} />
    </Fragment>
  );
};

export default App;
