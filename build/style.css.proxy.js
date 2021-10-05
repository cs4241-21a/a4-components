// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n.database-view {\r\n    border-left: 1px solid black;\r\n    border-right: 1px solid black;\r\n    border-top: 1px solid black;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#entry {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n#entry > div {\r\n    width: 33%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}