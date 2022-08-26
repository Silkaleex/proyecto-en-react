import React, { useContext } from "react";
import Context from "./contexto/context";
import "./app.css";

function Idiomas() {
  const { alumno } = useContext(Context);
  const { setAlumno } = useContext(Context);
  const sustitucion = (posicion) => {
    setAlumno(
      alumno.map((dato, indice) =>
        indice == 3 ? { ...dato, idioma: posicion } : { ...dato }
      )
    );
  };
  const cambio1 = () => {
    sustitucion(0);
  };
  const cambio2 = () => {
    sustitucion(1);
  };
  const cambio3 = () => {
    sustitucion(2);
  };
  return (
    <div className="idiomas">
      <div className="banderas" onClick={cambio1}>
        <img src="./img/spain.jpg" />
      </div>
      <div className="banderas" onClick={cambio2}>
        <img src="./img/uk.png" />
      </div>
      <div className="banderas" onClick={cambio3}>
        <img src="./img/francia.png" />
      </div>
    </div>
  );
}

export default Idiomas;
