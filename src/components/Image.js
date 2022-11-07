import React from "react";

function Image(props) {
  return (
    <div className="col-4">
      <img className="w-100 my-3" src={props.something} alt="" />
    </div>
  );
}

export default Image;
