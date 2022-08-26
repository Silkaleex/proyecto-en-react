import React from "react";
function Actividad1({ reyes }) {
  const resultado = reyes.map((e) => (
    <div key={e.nombre} className="caja-elm">
      <span className="letra">{e.nombre.toUpperCase()} </span>su poder es de:
      {e.fuerza * e.poder}
    </div>
  ));
  return <>{resultado}</>;
}

export default Actividad1;
