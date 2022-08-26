import React from "react";
import Reyes1 from "./reyes1";
import "./reyes.css";
function creando() {
  const reyes = [
    {
      nombre: "Bastion",
      color: "green",
      biografia:
        "Fuerte y temido entre muchos con su gran baston de los dioses",
      fuerza: 50,
      poder: 3,
    },
    {
      nombre: "Espadum",
      color: "blue",
      biografia:
        "Temido por muchos,Dice la leyenda que pudo con un ejercito de 10.000 Hombres",
      fuerza: 50,
      poder: 4,
    },
    {
      nombre: "Corpus Astrolus",
      color: "red",
      biografia:
        "Un Rey cruel y temido en toda su poblacion, dicen que si no cumples sus normas te obliga a tomarte su llamado `Elixir`,nadie mas se supo de esas personas",
      fuerza: 50,
      poder: 2,
    },
    {
      nombre: "Orus",
      color: "gold",
      biografia:
        "Miserable y racano, saca todos los cuartos de todo aquel que se cruza en su camino,arruinandolo y descuartizandolo si se oponen en sus asuntos",
      fuerza: 50,
      poder: 1,
    },
  ];

  return (
    <>
      <div className="reyes">
        <h1 className="titulo">El poder de los Reyes de Corpus Cristalus</h1>
        <Reyes1 reyes={reyes} />
      </div>
    </>
  );
}

export default creando;
