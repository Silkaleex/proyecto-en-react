import React, { useContext, useState } from "react";
import Context from "./contexto/context";
import Profesora from "./profesora";
import Ubicacion from "./ubicacion";
import "./app.css";

function Pagina() {
  const { alumno } = useContext(Context);
  console.log(alumno);
  const idioma = alumno[3].idioma;
  const [ocultar1, setOcultar1] = useState(false);
  const [ocultar2, setOcultar2] = useState(false);
  const mostrar1 = () => {
    setOcultar1(!ocultar1);
    setOcultar2(false);
  };
  const mostrar2 = () => {
    setOcultar2(!ocultar2);
    setOcultar1(false);
  };
  return (
    <>
      <h1>{alumno[idioma].titulo}</h1>
      <h2>{alumno[idioma].texto}</h2>
      <div className="boton">
        <button onClick={mostrar1}>{alumno[0].boton1}</button>
        <button onClick={mostrar2}>{alumno[0].boton2}</button>
      </div>
      {ocultar1 ? <Profesora /> : null}
      {ocultar2 ? <Ubicacion /> : null}
      <Ubicacion />
    </>
  );
}
export default Pagina;
