import React from "react";

function Banner ({ name, birthday, imageSrc }) {
  return (
    <div style={{display: "flex"}}>
      <img src={imageSrc} height="300px"/>
      <div style={{"flexDirection": "column"}}>
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </div>
  );
}
export default Banner;