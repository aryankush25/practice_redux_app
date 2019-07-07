/* eslint-disable no-alert */
import React, { Fragment } from "react";
import { SubmissionError } from "redux-form";
import LoginForm from "../../Components/LoginForm";

const LoginPage = () => {
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
            <LoginForm onSubmit={submit} initialValues={myInitialValues} />
        </Fragment>
    );
};

export default LoginPage;
