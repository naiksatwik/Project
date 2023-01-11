import React from "react";

export default function Alert(props) {
  const firstLetterUpper = (str) => {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show `}
        role="alert"
      >
        <strong className={`px-3 `}>
          {firstLetterUpper(props.alert.type)}
        </strong>
        {props.alert.message}
      </div>
    )
  );
}
