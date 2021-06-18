import './App.css';
import React,{useState} from 'react';

function App() {
  const [name,setName]=useState(
    {
      nombre:'',
    }
  );

  const handleInputChange = (event) => {
    setName({
        ...name,
        [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    alert("Hola "+name.nombre)
  }

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <form onSubmit={enviarDatos}>
        <input type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre"></input>
        <button type="submit">Say Hi!</button>
      </form>
    </div>
  );
}

export default App;
