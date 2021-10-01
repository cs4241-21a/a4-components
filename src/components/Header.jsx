import React from "react";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header class="flex py-3 bg-gray-900 w-full">
      <h1 class="pl-5 text-5xl float-left" id="title">
        Race Results
      </h1>
      <LogoutButton />
    </header>
  );
};

export default Header;
