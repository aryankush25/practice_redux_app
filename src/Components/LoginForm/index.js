import React from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "../Field";
import {
  requiredInput, matchInput
} from "../../Validation";


const LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        component={myInput}
        type="text"
        placeholder="Username"
        validate={[requiredInput]}
      />
      <Field
        name="password"
        component={myInput}
        type="password"
        placeholder="Password"
        validate={[requiredInput]}
      />
      <Field
        name="confirm-password"
        component={myInput}
        type="password"
        placeholder="Confirm Password"
        validate={[requiredInput, matchInput]}
      />
      <button type="submit" label="submit">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
