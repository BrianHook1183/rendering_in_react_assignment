import React from "react";

function Banner ({ name, birthday, imageSrc }) {
  return (
    <div>
    <img src={imageSrc} margin="auto"/>
      <h1>{name}</h1>
      <h2>{birthday}</h2>
    </div>
  );
}
export default Banner;