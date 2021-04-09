import React from "react";

function Hobbies ({ hobbies }) {
  const list = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>{list}</ul>
    </div>
  );
}
export default Hobbies;