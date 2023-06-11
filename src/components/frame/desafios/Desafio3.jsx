import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio3() {
  function Desafio3() {
    let fibonacci = [];
    let a = 0, b = 1;

    while (a <= 100) {
      fibonacci.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }

    return fibonacci;
  }

  const fibonacci = Desafio3();

  return (
    <div className="container">
      <h1>Desafio 3</h1>
      <ul className="list-group">
        {fibonacci.map((numero, index) => (
          <li key={index} className="list-group-item">{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default Desafio3;
