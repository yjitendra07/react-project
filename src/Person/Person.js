//using ES-6 Arrao function syntex
import React from "react";
const person = props => {
  return (
    <div>
      <p>
        I'm a {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
