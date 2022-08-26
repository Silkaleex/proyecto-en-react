import React from "react";
import { useEffect, useState } from "react";
import "./randomUsers.css";
function RandomUsers() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        setNombre(
          `${lectura.results[0].name.first} ${lectura.results[0].name.last}`
        );
        setImagen(`${lectura.results[0].picture.large}`);

        lectura.results.map((persona) => {
          setDatos((e) => [
            ...e,
            <div key={persona.email}>
              <div>
                {persona.name.first} {persona.name.last}
              </div>
              <div>
                <img src={persona.picture.large} />
              </div>
            </div>,
          ]);
          console.log(persona.name.first);
          console.log(lectura);
        });
      })
      .catch(() => console.log("Tenemos un Error"));
  }, []);

  return (
    <>
      <div className="empleado">
        <h1>Emplead@ Del Mes!</h1>
        {nombre}
        <div>
          <img src={imagen} className="img-random"></img>
        </div>
      </div>
      <div className="premiados">
        <h2>¿Los Premiados Son?</h2>
        <div className="img-prem">{datos}</div>
      </div>
    </>
  );
}
export default RandomUsers;
