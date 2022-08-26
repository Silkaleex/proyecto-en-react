import "./App.css";
import { useRef } from "react";
import imagen from "./imagenes/imagen.jpg";
import imagen1 from "./imagenes/islandia.jpg";
import imagen2 from "./imagenes/noruega.jpg";
import imagen3 from "./imagenes/siberia.jpg";
import interrogacion from "./imagenes/interrogacion.jpg";
import Use from "./components/useState";
import TextoAñadido from "./components/boton";
// import ValorDeMonedas from "./components/Monedas";
import EjemploProps from "./others/ejemploProps";
import Interaccion from "../src/others/Interaccion.jsx";
import Crear from "./others/actividad1/reyes";
import Actividad from "./others/actividad2/primero";
import Actividads from "./others/actividad3/primera";
import Acti from "./others/actividad4/uno";
import RandomUsers from "./api-fetch/randomUsers";
import ApiIcndb from "./api-fetch/chistes/apiIcndb";
import Pagina1 from "./others/creacion-estructura/pagina1";
import Pagina2 from "./others/creacion-estructura/pagina2";
import Pagina3 from "./others/creacion-estructura/pagina3";
import Colores from "./others/creacion-estructura/colores.jsx";
import { Datos } from "./others/creacion-estructura/contexto";
import CreandoApp from "./others/app/creandoApp";
function App() {
  let nombres = ["Islandia", "Noruega", "Siberia"];
  const cambio = 23.16;
  const refCaja = useRef();

  const cambiarimagen = (i) => {
    if (i.target.src.includes("interrogacion")) {
      i.target.style.visibility = "hidden";
    } else {
      i.target.src = interrogacion;
    }
    i.target.parentNode.style.backgroundColor = "white";
  };
  const cambiarTexto = (c) => {
    c.target.innerHTML = "Visto";
  };
  // let nombre = "Escribe algo aqui";
  let saludo = [{ nombre: "Aleex", edad: 27 }, { profesion: "Front-End" }];
  // let caja = <div>Comenta aqui abajo</div>;
  function incremento(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    e.target.style.border = "5px groove #fcf6cf";
    e.target.style.width = "400px";
    e.target.style.margin = "0px auto";
    e.target.style.marginTop = "20px";
    e.target.style.textAlign = "center";
    e.target.style.fontWight = "bold";
    e.target.style.fontSize = "22px";
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "#F53844";
      e.target.style.color = "#eec0c6";
    } else {
      e.target.style.backgroundColor = "#42378f";

      e.target.style.color = "#ea52f8";
    }
  }
  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };
  const siguiente = (a) => {
    if (a.target.src.includes("islandia")) {
      a.target.src = imagen2;
    } else {
      a.target.src = imagen1;
    }
  };
  function lectura(b) {
    refCaja.current.innerHTML = b.target.value;
  }

  return (
    <>
      <div className="fondo">
        <h1>Aprendiendo React</h1>
        <h2>{saludo[0].nombre}</h2>
        <h3>{saludo[1].profesion}</h3>
        <h4>{saludo[0].edad}</h4>
        {/* {alert("Hola Mundo")} */}
        <img src={imagen} className="imagen" />
        {/* <div>{caja}</div> */}
        {/* <input value={nombre} /> */}
      </div>
      <hr />
      <div>
        <img onClick={siguiente} src={imagen1} className="img" />
      </div>
      <br />
      <br />
      <div className="contenedor">
        <div className="caja">
          <img onClick={cambiarimagen} src={imagen1} className="img" />
          <div onClick={cambiarTexto} className="nombre">
            {nombres[0]}
          </div>
        </div>
        <div className="caja">
          <img onClick={cambiarimagen} src={imagen2} className="img" />
          <div onClick={cambiarTexto} className="nombre">
            {nombres[1]}
          </div>
        </div>
        <div className="caja">
          <img onClick={cambiarimagen} src={imagen3} className="img" />
          <div onClick={cambiarTexto} className="nombre">
            {nombres[2]}
          </div>
        </div>
      </div>
      <hr />
      <TextoAñadido />
      <hr />
      <button onClick={convertir}>Aceptar</button>
      <input className="campo" />
      <div ref={refCaja} onClick={incremento}>
        1
      </div>
      <Use />
      <EjemploProps rey={{ nombre: "bastos,", valor: 12 }} />
      <EjemploProps rey={{ nombre: "espadas,", valor: 12 }} />
      <EjemploProps rey={{ nombre: "copas,", valor: 12 }} />
      <EjemploProps rey={{ nombre: "oros,", valor: 12 }} />
      <hr />
      {/* <ValorDeMonedas /> */}
      <Interaccion />
      <Crear />
      <Actividad />
      <Actividads />
      <Acti />
      <RandomUsers />
      <ApiIcndb />
      <hr />
      <Datos>
        <div className="paginas">
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>
      <hr />
      <CreandoApp />
    </>
  );
}
export default App;
