import React from "react";
import "./estilos.css";

function Actividad2({ reyes }) {
  const eliminar = (e) => {
    e.target.parentNode.remove();
  };
  return (
    <>
      {reyes.map((e) => (
        <div key={e.nombre} className="seleccion">
          {e.nombre}
          <br />
          <button onClick={eliminar} className="eliminacion">
            Eliminar compañero
          </button>
        </div>
      ))}
    </>
  );
}
export default Actividad2;
