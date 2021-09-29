// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{\r\n    font-family: 'Montserrat'\r\n}\r\n\r\n.App{\r\n    background-color: lightgray;\r\n    display: grid; \r\n    grid-gap: 9px; \r\n    padding: 15px; \r\n    margin: 50px; \r\n    width: 50%; \r\n}\r\n\r\n.App > input {\r\n    font-family: 'Montserrat';\r\n    border: none; \r\n    padding: 5px; \r\n}\r\n\r\nbutton{\r\n    border: none; \r\n    font-family: 'Montserrat';\r\n    padding: 5px; \r\n}\r\n\r\nbutton{\r\n    cursor: grab;\r\n}\r\n\r\nul{\r\n    font-family: 'Montserrat'\r\n}\r\n\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}