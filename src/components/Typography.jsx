import React from "react";

const Typography = (props) => {
  
  const TypographyTag = props.tag;

  return (
    <TypographyTag class={props.className}>
      {props.children}
    </TypographyTag>
  )
}

export default Typography;