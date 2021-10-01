import React from "react";

const LogoutButton = () => {
  const userlogout = function () {
    fetch("/logout", {
      method: "GET",
    });
    window.location.href = "/";
  };

  return (
    <button
      class="
    ml-auto
    rounded-xl
    px-5
    mr-3
    hover:bg-gray-700
    bg-gray-600
    float-right
    text-right"
      id="logout"
      onClick={userlogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
