export const validate = inputs => {
    const errors = {};
    if (!inputs.username) {
        errors.username = "Enter your Username";
    } else if (inputs.username !== "Aryan") {
        errors.username = "Username is incorrect";
    }
    if (!inputs.password) {
        errors.password = "Enter your Password";
    }
    return errors;
};

export const requiredInput = input => (input ? undefined : "Input is required");

export const correctInput = input => (input !== "Aryan" ? "Incorrect Username" : undefined);

// eslint-disable-next-line max-len
export const matchInput = (input, allInputs) => input === allInputs.password ? undefined : "Passwords do not match";
