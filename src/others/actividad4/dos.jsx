import React from "react";
import "./estilos.css";
function actividad4({ reyes }) {
  const sumar = (e) => {
    ++e.target.innerHTML;
  };
  const resultado = reyes
    .filter((e) => e.muertes > 100 && e.poder > 0)
    .map((e) => (
      <div key={e.nombre}>
        {e.nombre}
        <div className="cero" onClick={sumar}>
          0
        </div>
      </div>
    ));
  return <>{resultado}</>;
}
export default actividad4;
