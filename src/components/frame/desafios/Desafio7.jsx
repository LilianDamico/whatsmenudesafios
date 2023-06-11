import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio7() {
  function Desafio7() {
    function removerPropriedadesNaoJ(objeto) {
      for (let propriedade in objeto) {
        if (!propriedade.startsWith('j')) {
          delete objeto[propriedade];
        }
      }
    }

    // Exemplo de uso
    let meuObjeto = {
      jason: "Jason",
      thais: "Thaís",
      liz: "Liz",
      jennei: "Jennei",
      jenyffer: "Jennyfer",
      joao: "João",
      bola: "Bola",
      gato: "Gato",
      jaguar: "Jaguar"
    };
  
    removerPropriedadesNaoJ(meuObjeto);
  
    return meuObjeto;
  }

  const objetoFiltrado = Desafio7();
  
  return (
    <div className="container">
      <h1>Desafio 7</h1>
      <ul className="list-group">
        {Object.entries(objetoFiltrado).map(([chave, valor]) => (
          <li key={chave} className="list-group-item">
            {chave}: {valor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Desafio7;


