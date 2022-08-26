import React, { useState } from "react";
import Cena from "./cena";
/* Aqui debajo van los PROPS */
function Interaccion() {
  const reyes = [
    {
      nombre: "Bastos",
      color: "green",
      precio: 120,
    },
    {
      nombre: "Copas",
      color: "red",
      precio: 180,
    },
    {
      nombre: "Espadas",
      color: "blue",
      precio: 150,
    },
    {
      nombre: "Oros",
      color: "gold",
      precio: 90,
    },
  ];
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>Total a pagar:{total} €</h1>
      <div className="cajaCentral">
        <Cena
          nombre={reyes[0].nombre}
          color={reyes[0].color}
          precio={reyes[0].precio}
          setTotal={setTotal}
        />
        <Cena
          nombre={reyes[1].nombre}
          color={reyes[1].color}
          precio={reyes[1].precio}
          setTotal={setTotal}
        />
        <Cena
          nombre={reyes[2].nombre}
          color={reyes[2].color}
          precio={reyes[2].precio}
          setTotal={setTotal}
        />
        <Cena
          nombre={reyes[3].nombre}
          color={reyes[3].color}
          precio={reyes[3].precio}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}

export default Interaccion;
