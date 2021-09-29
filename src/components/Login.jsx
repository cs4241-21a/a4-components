import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="
    flex
    h-screen
    font-body
    text-2xl
    bg-gray-800
    text-gray-300
    w-full
    h-full
  "
    >
      <div className="rounded-xl m-auto border border-gray-600 w-1/5">
        <header className="rounded-t-xl bg-gray-900 mx-auto text-center">
          <h1 id="title"> Connect Using: </h1>
        </header>
        <main className="flex flex-col justify-center m-auto text-center">
          <a
            className="text-3xl"
            href={`https://github.com/login/oauth/authorize?client_id=6293d146755b88e66857`}
          >
            <span className="fa fa-github"></span> GitHub
          </a>
        </main>
        <li>
          <Link to="/results">Link</Link>
        </li>
      </div>
    </div>
  );
};

export default Login;
