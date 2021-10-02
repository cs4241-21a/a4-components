import React from "react";

const ErrorPage = ({ errorCode, errorMessage }) => {
    return (
        <>
            <h1>{errorCode}</h1>
            <p>{errorMessage}</p>
        </>
    );
}

export default ErrorPage;