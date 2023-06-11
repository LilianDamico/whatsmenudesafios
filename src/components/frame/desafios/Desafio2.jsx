import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio2() {
  function Desafio2() {
    const palavras = [
      "arara", "amor", "asa", "longo", "ele", "dinossáuro", "esse", "peppa",
      "mamam", "tartaruga", "bandolin", "matam", "desodorante", "mundo", "metem",
      "terra", "água", "mirim", "fogo", "sopapos"
    ];

    const palindromos = palavras.filter(palavra => {
      const reverso = palavra.split('').reverse().join('');
      return palavra === reverso;
    });

    return palindromos;
  }

  const palindromos = Desafio2();

  return (
    <div className="container">
      <h1>Desafio 2</h1>
      <ul className="list-group">
        {palindromos.map((palavra, index) => (
          <li key={index} className="list-group-item">{palavra}</li>
        ))}
      </ul>
    </div>
  );
}

export default Desafio2;
