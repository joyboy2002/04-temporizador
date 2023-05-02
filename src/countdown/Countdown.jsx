import { useState, useEffect } from "react";



function Countdown(){

  let [targetSeconds, setTargetSeconds] = useState(null);
  let [elapsedSeconds, setElapsedSeconds] = useState(0);

  function parseForm(ev){
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setTargetSeconds(parseInt(seconds));
  }

  useEffect(function(){
    if (targetSeconds === null) return;

    //target seconds tiene un valor
    setElapsedSeconds(0);

    let interval = setInterval(function(){
      setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);

    },1000);

    return() => {
      clearInterval(interval);
    }
  },[targetSeconds])

  if(elapsedSeconds >= targetSeconds && targetSeconds !== null){
    return(
      <>
      <p>Terminó el conteo!!!</p>
      <button onClick={()=> setTargetSeconds(null)}>Reiniciar</button>
      </>
    )
  }

  if(targetSeconds !== null){
    return(
      <p>Faltan {targetSeconds - elapsedSeconds} segundos </p>
    )
  }

  
  return(
    <>
    <p>
      ¿Cuantos segundos quieres contar?
    </p>
    <form action="#" onSubmit={ev => parseForm(ev)}>
      <input type="number" name="seconds" />
      <button>Iniciar</button>
    </form>
    </>
  )
}

export default Countdown;