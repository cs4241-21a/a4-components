// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/*Style your own assignment! This is fun! */\r\n@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap\");\r\n\r\n.App {\r\n  font-family: \"Ubuntu\";\r\n  text-align: center;\r\n}\r\n\r\n.Todo {\r\n  font-family: \"Ubuntu\";\r\n  text-align: center;\r\n}\r\n\r\nth {\r\n  font-family: \"Ubuntu\";\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-family: \"Ubuntu\";\r\n  text-align: center ;\r\n  line-height: 20pt;\r\n}\r\n\r\na {\r\n  font-family: \"Ubuntu\";\r\n}\r\n\r\ntd {\r\n  color: #3305B0;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  background-color: #F2EA07;\r\n}\r\n\r\ntr {\r\n  color: #12DB37;\r\n  text-align: center;\r\n}\r\n\r\ninput {\r\n  color: #078CB8;\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  color: #EB8900;\r\n  text-align: center;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  text-align: center;}\r\n  \r\n#birth {\r\n  color: red;\r\n}\r\n\r\n.spacious {\r\n  margin: 2em;\r\n}   \r\n\r\n.spaciousLight {\r\n  margin: 1em;\r\n}      \r\n\r\n.flex-container {\r\n  flex-wrap: wrap;\r\n  white-space: initial;\r\n  flex-grow: 1;\r\n}\r\n\r\n.flex-container.spacious {\r\n    color: black;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}