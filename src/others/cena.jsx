import React from "react";
import "./cena.css";
function Cena({ nombre, precio, color, setTotal }) {
  const comprar = (elemento) => {
    setTotal((e) => e + precio);
    elemento.target.parentNode.parentNode.parentNode.style.display = "none";
  };
  return (
    <>
      <div className="rey" style={{ backgroundColor: color }}>
        <h1>{nombre}</h1>

        <div className="titulo">Precio:</div>
        <div className="precio">{precio}€</div>
        <div>
          <button onClick={comprar}>Comprar</button>
        </div>
      </div>
    </>
  );
}

export default Cena;
