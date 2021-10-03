import React from "react";

const Footer = (props) => {
  return (
    <footer class="footer">
      <div class="bg-dark fixed-bottom">
          {props.children}
      </div>
    </footer>
  )
}

export default Footer;