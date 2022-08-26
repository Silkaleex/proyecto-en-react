import React from "react";
import { useEffect, useState } from "react";
import "./apiIcndb.css";

function ApiIcndb() {
  const [chiste, setChiste] = useState("");
  const otro = () => {
    const url = "http://api.icndb.com/jokes/random";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => setChiste(lectura.value.joke))
      .catch(() => console.log("Tenemos un errorcito =("));
  };
  useEffect(() => {
    otro();
  }, []);

  return (
    <>
      <div className="enc">
        <h1>Chistes:</h1>
        <div className="chs">{chiste}</div>
        <button onClick={otro} className="ntx">
          Siguiente Chiste
        </button>
      </div>
    </>
  );
}
export default ApiIcndb;
