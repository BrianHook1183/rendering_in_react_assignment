import React from "react";

function Hobbies ({ hobbies }) {
  const list = hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>{list}</ul>
    </div>
  );
}
export default Hobbies;