// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.App-table{\r\n    border-collapse: collapse;\r\n    border: 1px solid black;\r\n}\r\n\r\n.addb{\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #f44336;\r\n    font-size: 16px;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n\r\n    -webkit-transition-duration: 0.4s; /* Safari */\r\n    transition-duration: 0.4s\r\n}\r\n\r\n.addb:hover{\r\n    background-color: #f44336;\r\n    color: white;\r\n    font-size: 16;\r\n}\r\n\r\nth, td {\r\n    padding: 15px;\r\n    text-align: left;\r\n\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n  \r\ntr:hover {\r\n    background-color: #f44336;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\ntr:nth-child(even):hover {\r\n    background-color: #f44336;\r\n}\r\n\r\nth {\r\n    background-color: #f44336;\r\n    color: black;\r\n    text-align: center;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}