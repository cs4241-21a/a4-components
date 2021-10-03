import React from "react";

const Header = (props) => {
  const loginText = props.loggedIn ? "Logout" : "Login";

  return (
    <header>
      <nav class="navbar navbar-dark bg-dark justify-content-between fixed-top">
        <a class="navbar-brand" href="#">Event Itinerary</a>
        <a class="mr-2 text-light" href="/login">{loginText}</a>
      </nav>
    </header>
  )
}

export default Header;