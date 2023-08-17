import { useState } from 'react'
import Card from './Card'
import Form from './Form'
import './App.css'

function App() {

  const [color, setColor] = useState("");
  const [numero, setNumero] = useState(0);
  const [mostrarCard, setMostrarCard] = useState(false);
  const crearColor = () => {
    return "#"+ Math.ceil(Math.random()*900000);
  };

  const crearNumero = (nombre, animal) => {
    let largoNombre = nombre.length;
    let largoAnimal = animal.length;

    return Math.abs((largoNombre * Math.ceil((Math.random() * 10))) - largoAnimal);
  }

  const darSuerte = (nombre, animal) => {
    setColor(crearColor());
    setNumero(crearNumero(nombre, animal));
    setMostrarCard(true);
  }

  return (
    <div className="App">
      <h1>Encuentra tu suerte!</h1>
      <h2>Con estos simples datos, averigua tu color y número de la suerte:</h2>
      <Form onSubmitForLuck={darSuerte} />
      <Card color={color} numero={numero} mostrarCard={mostrarCard} />

    </div>
  )

}

export default App
