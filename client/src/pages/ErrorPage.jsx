import React from "react";

const ErrorPage = ({ errorCode, errorMessage }) => {
    return (
        <>
            <h1>{errorCode}</h1>
            <p>{errormessage}</p>
        </>
    );
}

export default ErrorPage;