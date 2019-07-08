import React from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "../../../Components/Field";
import { requiredInput, matchInput } from "../../../utils/Validation";

const RegisterForm = props => {
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
                Register
            </button>
        </form>
    );
};

export default reduxForm({
    form: "register"
})(RegisterForm);
