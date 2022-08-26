import React, { useState } from "react";
import "./boton.css";

const TextoAñadido = () => {
  const mapa = [
    {
      lugar: "Islandia",
      descripcion:
        " Un País soberano localizado entre América del Norte y Europa",
    },
    {
      lugar: "Noruega",
      descripcion:
        " oficialmente Reino de Noruega, es un Estado soberano de Europa septentrional",
    },
    {
      lugar: "Siberia",
      descripcion:
        " Una vasta región geográfica que se encuentra en la parte asiática oriental de la Federación de Rusia",
    },
  ];
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState();
  const cambio = () => {
    setContador(contador + 1);
    if (contador + 1 >= mapa.length) {
      setContador(0);
    }
    setMensaje(
      <h2>
        <div className="estilo">
          Este lugar es <span className="color1">{mapa[contador].lugar}</span> y
          es conocida como:
          <span className="color2">{mapa[contador].descripcion}</span>
        </div>
      </h2>
    );
  };
  return (
    <>
      <button onClick={cambio}>Ver siguiente</button>
      <div>{mensaje}</div>
    </>
  );
};
export default TextoAñadido;
