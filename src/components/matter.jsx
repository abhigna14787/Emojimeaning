import React from "react";
import emojipedia from "../emojipedia";

function Matter(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji">{props.emoji}</span>

        <span className="name">{props.name} </span>
      </dt>

      <dd className="meaning">{props.meaning}</dd>
    </div>
  );
}
export default Matter;
