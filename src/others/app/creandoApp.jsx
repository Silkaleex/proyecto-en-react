import React from "react";
import Provider from "./contexto/Provider";
import Idiomas from "./idiomas";
import Pagina from "./pagina";
import "./app.css";

function CreandoApp() {
  return (
    <Provider>
      <div className="contenido">
        <div className="banderas">
          <Idiomas />
        </div>
        <Pagina />
      </div>
    </Provider>
  );
}
export default CreandoApp;
