// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "form {\n  display: flex;\n  flex-basis: 0;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  padding-bottom: 2%;\n  padding-top: 2%;\n  background-color: #919191;\n}\n\ntable.tasktable {\n  display: flex;\n  flex-basis: 0;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  border-collapse: collapse;\n  border: 0px solid black;\n  background-color: #a9aeba;\n  padding-bottom: 2%;\n  padding-top: 2%;\n}\n\ntable, th, td {\n  border: 2px solid black;\n  border-collapse: collapse;\n}\n\nbody {\n  font-family: 'Crimson Text', serif;\n  background-color: #a9aeba;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}