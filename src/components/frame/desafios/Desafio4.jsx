import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio4() {
  function Desafio4() {
    let array = Array.from({ length: 10 }, (_, index) => index + 1);

    array.unshift(0);
    array.push(11);
    array.splice(array.indexOf(5), 1);
    array.splice(array.indexOf(8), 1, 20, 21, 22);

    return array;
  }

  const array = Desafio4();

  return (
    <div className="container">
      <h1>Desafio 4</h1>
      <ul className="list-group">
        {array.map((numero, index) => (
          <li key={index} className="list-group-item">{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default Desafio4;
