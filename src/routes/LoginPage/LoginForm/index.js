import React from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "../../../Components/Field";
import { requiredInput } from "../../../utils/Validation";

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
            <button type="submit" label="submit">
                Login
            </button>
        </form>
    );
};

export default reduxForm({
    form: "login"
})(LoginForm);
