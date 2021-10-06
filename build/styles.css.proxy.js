// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/*Style your own assignment! This is fun! */\r\n\r\n/*ADD A FONT */\r\n\r\nbody {\r\n  font-family: \"Noto Sans\";\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-container > p {\r\n  text-align: center;\r\n  width: 75%;\r\n  align-self: center;\r\n}\r\n\r\n.fvalue {\r\n  height: 50px;\r\n  width: 300px;\r\n  font-size: 25px;\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.foperator {\r\n  height: 50px;\r\n  width: 20px;\r\n  font-size: 25px;\r\n  text-align: center;\r\n}\r\n\r\n#titles {\r\n  width: 50%;\r\n  align-self: center;\r\n  text-align: center;\r\n  border-style: solid;\r\n  border-color: black;\r\n  margin: 10px;\r\n}\r\n\r\n#computeform {\r\n  flex-direction: row;\r\n  width: 75%;\r\n  align-self: center;\r\n}\r\n\r\n#notesandconvert {\r\n  flex-direction: row;\r\n  align-self: center;\r\n  width: 70%;\r\n  margin-top: 40px;\r\n}\r\n\r\n#notesandconvert > div {\r\n  width: 35%;\r\n  margin: 20px;\r\n}\r\n\r\n#warning {\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n\r\ntable {\r\n  width: 80%;\r\n  align-self: center;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 1px solid black;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}