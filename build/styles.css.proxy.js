// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css?family=Lato');\n\n.header-footer-background {\n  background-color: #dc3545;\n}\n\n.responses-background {\n  background-color: #f7cac9;\n}\n\n.wpi-logo {\n  max-width: 40%;\n  display: block;\n  margin: auto;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}