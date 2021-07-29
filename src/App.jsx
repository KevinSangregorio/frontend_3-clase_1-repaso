import React, {useState} from 'react'; // No prestar atencion a esto
import './App.css';
import Button from "./components/Button";
function App() {


  let fraseBoton1 = "Click si eres valiente";
  let fraseBoton2 = "Prueba otra frase";
  let fraseBoton3 = "Yo controlo el boton";
  let fraseBoton = "";
  
  // Frases de chuck Norris, esto es manejo de estaods, tema para mas adelante
  const [frasesChuck, setFrasesChuck] = useState([])

  function getRandom(value, fraseChuck) {
    const prevFrase = value;
    fraseBoton = parseInt(Math.random() * 3);
    if(fraseBoton === 0) fraseBoton = fraseBoton1; 
    if(fraseBoton === 1) fraseBoton = fraseBoton2; 
    if(fraseBoton === 2) fraseBoton = fraseBoton3; 
    if (prevFrase === fraseBoton){ 
      getRandom(prevFrase, fraseChuck); 
    } else if (prevFrase !== fraseBoton) {
      if(frasesChuck.length <= 5 ){
        setFrasesChuck([...frasesChuck,fraseChuck]); // Esto ayuda actualizar valores, tema para mas adelante
      }
      return fraseBoton;
    }
    return fraseBoton;
  } 

  return (
    <div className="app">
      <Button onClick={getRandom} />
      <div className="app__viejasFrases">
        <h3>ULTIMAS 5 FRASES</h3>
    {frasesChuck[0] ? <p>{frasesChuck[0]}</p> : null}
    {frasesChuck[1] ? <p>{frasesChuck[1]}</p> : null}
    {frasesChuck[2] ? <p>{frasesChuck[2]}</p> : null}
    {frasesChuck[3] ? <p>{frasesChuck[3]}</p> : null}
    {frasesChuck[4] ? <p>{frasesChuck[4]}</p> : null}
    {frasesChuck[5] ? <p>{frasesChuck[5]}</p> : null}
     
    
      </div>
    </div>
  );
}

export default App;
