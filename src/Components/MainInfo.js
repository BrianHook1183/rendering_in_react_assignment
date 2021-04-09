import React from "react";

function MainInfo ({ name, birthday }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{birthday}</h2>
    </div>
  );
}
export default MainInfo;