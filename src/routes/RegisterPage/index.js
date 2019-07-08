/* eslint-disable no-alert */
import React, { Fragment } from "react";
import { SubmissionError } from "redux-form";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    const myInitialValues = {
        username: "Aryan",
        password: ""
    };

    const submit = inputs => {
        if (["Aryan", "batman", "thor"].includes(inputs.username)) {
            throw new SubmissionError({
                username: "Username already taken"
            });
        } else {
            window.alert(JSON.stringify(inputs));
        }
    };

    return (
        <Fragment>
            <h1>Register Page</h1>
            <RegisterForm onSubmit={submit} initialValues={myInitialValues} />
        </Fragment>
    );
};

export default RegisterPage;
