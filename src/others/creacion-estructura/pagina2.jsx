import React, { useContext } from "react";
import { contexto } from "./contexto";
function Pagina2() {
  const { color } = useContext(contexto);
  return (
    <>
      <div className="hijo" style={{ background: color }}>
        pagina2
        <h1>{color}</h1>
      </div>
    </>
  );
}

export default Pagina2;
