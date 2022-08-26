import React from "react";
function EjemploProps({ rey }) {
  return (
    <>
      <div>
        <div>
          {/* <h1>Este rey tiene un valor de: {props.valor} puntos</h1> */}
          <h1>
            El rey de {rey.nombre} tiene un valor de: {rey.valor} puntos
          </h1>
        </div>
      </div>
    </>
  );
}
EjemploProps.defaultProps = {
  valor: 6,
  rey: "Otro Rey",
};

export default EjemploProps;
