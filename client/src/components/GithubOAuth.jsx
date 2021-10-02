import React from "react";

const GithubOAuth = () => {

    return (
        <p className="bg-dark rounded rounded-5 mt-3 p-2 d-flex align-items-center">
            <i className="fa fa-github text-light fa-3x"></i>
            <a style={{ cursor: 'pointer' }} href='/api/auth/github'
                className="link-info ms-3">Login with Github</a>
        </p>
    );
};

export default GithubOAuth;