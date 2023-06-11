import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio1() {
  function Desafio1() {
    const numeros = Array.from(Array(31).keys());
    const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
    return numerosImpares;
  }

  const numerosImpares = Desafio1();

  return (
    <div className="container">
      <h1>Desafio 1</h1>
      <ul className="list-group">
        {numerosImpares.map((numero, index) => (
          <li key={index} className="list-group-item">{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default Desafio1;
