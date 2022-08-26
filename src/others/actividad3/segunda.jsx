import React from "react";
function tercera({ reyes }) {
  const resultado = reyes.find(
    (e) => e.nombre.substring(0, 1) == "B" || e.nombre.substring(0, 1) == "E"
  );
  return <>{resultado == undefined ? "No encontrado" : resultado.nombre}</>;
}

export default tercera;
