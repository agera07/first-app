import React from "react";

export default function Saludar(props) {
  const { userinfo, saludarFn } = props;
  const { name = "Anonimo", age } = userinfo;

  console.log(userinfo);
  return (
    <div>
      <button onClick={() => saludarFn(name, age)}>Saludar</button>
    </div>
  );
}
