import React from "react";

function ToppingOption({ name, imagePath }) {
  return (
    <div>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={name}
      />
    </div>
  );
}

export default ToppingOption;
