import React from "react";

const myInput = ({
    input, type, placeholder, meta
}) => {
    return (
        <div>
            <input {...input} type={type} placeholder={placeholder} />
            {meta.error && meta.touched && <div>{meta.error}</div>}
        </div>
    );
};

export default myInput;
