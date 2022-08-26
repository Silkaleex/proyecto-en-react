import React, { useContext } from "react";
import { contexto } from "./contexto";
function Pagina1() {
  const { color } = useContext(contexto);
  return (
    <>
      <div className="hijo" style={{ background: color }}>
        pagina1
        <h1>{color}</h1>
      </div>
    </>
  );
}

export default Pagina1;
