import React, { useState } from "react";
import "./useState.css";
const Use = () => {
  const [nombre, setNombre] = useState();
  const [contador, setContador] = useState(0);
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();
  const cambiando = () => {
    setResultado(Number(numero1) + Number(numero2));
  };
  const cambio1 = (e) => {
    setNumero1(e.target.value);
  };
  const cambio2 = (e) => {
    setNumero2(e.target.value);
  };
  const disminuir = () => {
    // setcontador(contador - 1);
  };
  const aumentar = () => {
    // setcontador(contador + 1);
  };
  const restablecer = () => {
    // setcontador(0);
  };

  console.log(`Inicio: ${nombre}`);
  return (
    <>
      <div className="presentacion">
        <h1>Me llamo {nombre}</h1>
        <button onClick={() => setNombre("Rayquaza")} className="btn-pre">
          Cambiar Nombre
        </button>
      </div>
      <div className="contador">
        <button onClick={() => setContador(contador - 1)} className="boton">
          Disminuir
        </button>
        <button onClick={() => setContador((e) => e + 1)} className="boton">
          Aumentar
        </button>
        <button onClick={() => setContador(0)} className="boton">
          Restablecer
        </button>
        <h1 className="ctn">{contador}</h1>
      </div>

      <div className="contenido">
        <input
          type="number"
          className="cuadrado"
          value={numero1}
          onChange={cambio1}
        ></input>
        +
        <input
          type="number"
          className="cuadrado"
          value={numero2}
          onChange={cambio2}
        ></input>
        =
        <input
          type="number"
          className="cuadrado"
          vale={resultado}
          readOnly
        ></input>
        <button className="boton" onClick={cambiando}>
          Sumar
        </button>
      </div>
    </>
  );
};

export default Use;
