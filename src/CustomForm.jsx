import React, { useState } from "react";

function CustomForm() {
  const [name, setName] = useState({
    nombre: "",
    terms: false,
  });

  const handleInputChange = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputClick = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.checked,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    if (name.terms === true) alert("Hola " + name.nombre);
    else alert("Accept Terms");
  };

  return (
    <form onSubmit={sendData}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={handleInputChange}
        name="nombre"
      ></input>
      <div>
        <label>
          <input type="checkbox" onClick={handleInputClick} name="terms" />{" "}
          Acepto los términos
        </label>
      </div>
      <button type="submit">Say Hi!</button>
    </form>
  );
}

export default CustomForm;