// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\r\n    font-family: 'Roboto', Arial;\r\n    background-color: #4E87F2;\r\n}\r\n\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: 30em 45em;\r\n    grid-gap: 1em;\r\n}\r\n\r\nh1, h2 {\r\n    text-align: center;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.5em;\r\n}\r\n\r\ncaption {\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    padding-bottom: 0.5em;\r\n    padding-top: 1.25em;\r\n}\r\n\r\n#carform {\r\n    margin-left: 9em;\r\n}\r\n\r\ntable, th, td {\r\n    border: 0.2em solid black;\r\n    border-collapse: collapse;\r\n    padding: 0.5em;\r\n    height: 2em;\r\n    margin-right: 2em;\r\n    text-align: center;\r\n}\r\n\r\nth {\r\n    background-color: #934AE8;\r\n}\r\n\r\n#plate {\r\n    width: 7em;\r\n}\r\n\r\ntd {\r\n    background-color: #4AAAE8;\r\n}\r\n\r\n#carform {\r\n    font-weight: bold;\r\n    padding-left: 1em;\r\n    padding-bottom: 1em;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}