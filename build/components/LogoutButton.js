import React from "../_snowpack/pkg/react.js";
const LogoutButton = () => {
  const userlogout = function() {
    fetch("/logout", {
      method: "GET"
    });
    window.location.href = "/";
  };
  return /* @__PURE__ */ React.createElement("button", {
    class: "\r\n    ml-auto\r\n    rounded-xl\r\n    px-5\r\n    mr-3\r\n    hover:bg-gray-700\r\n    bg-gray-600\r\n    float-right\r\n    text-right",
    id: "logout",
    onClick: userlogout
  }, "Logout");
};
export default LogoutButton;
