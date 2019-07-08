/* eslint-disable no-alert */
import React, { Fragment } from "react";
import { SubmissionError } from "redux-form";
import LoginForm from "./LoginForm";

const LoginPage = () => {
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
            <h1>Login Page</h1>
            <LoginForm onSubmit={submit} />
        </Fragment>
    );
};

export default LoginPage;
