import React, { useContext } from "react";
import Context from "./contexto/context";
import "./app.css";
function Profesora() {
  const { alumno } = useContext(Context);
  const idioma = alumno[3].idioma;
  const imagen = `../images/${alumno[idioma].foto}`;
  return (
    <>
      <div className="profesora">
        <h1>{alumno[idioma].boton}:</h1>
        <div className="foto">
          <img className="img" src={imagen} />
        </div>
        <div className="name">{alumno[idioma].nombre}</div>
      </div>
    </>
  );
}
export default Profesora;
