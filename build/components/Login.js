import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import {Redirect} from "../_snowpack/pkg/react-router.js";
const Login = () => {
  const [redirect, setRedirect] = useState("");
  const userlogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=6293d146755b88e66857`;
  };
  useEffect(() => {
    fetch("/id", {
      method: "GET"
    }).then(function(response) {
      return response.text();
    }).then(function(res) {
      if (res !== "") {
        setRedirect(true);
      }
    });
  });
  if (redirect) {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: "/myresults"
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "\r\n    flex\r\n    h-screen\r\n    font-body\r\n    text-2xl\r\n    bg-gray-800\r\n    text-gray-300\r\n    w-full\r\n    h-full\r\n  "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl m-auto border border-gray-600 w-1/5"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "rounded-t-xl bg-gray-900 mx-auto text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    id: "title"
  }, " Connect Using: ")), /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-col justify-center m-auto text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-3xl",
    onClick: userlogin
  }, /* @__PURE__ */ React.createElement("span", {
    className: "fa fa-github"
  }), " GitHub"))));
};
export default Login;
