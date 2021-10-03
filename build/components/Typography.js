import React from "../_snowpack/pkg/react.js";
const Typography = (props) => {
  const TypographyTag = props.tag;
  return /* @__PURE__ */ React.createElement(TypographyTag, {
    class: props.className
  }, props.children);
};
export default Typography;
