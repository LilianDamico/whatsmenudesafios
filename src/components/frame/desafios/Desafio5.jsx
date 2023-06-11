import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio5() {
  function Desafio5() {
    function extrairNomeIdade(array) {
      var resultado = [];

      for (var i = 0; i < array.length; i++) {
        var objeto = array[i];
        var nome = objeto.nome;
        var idade = objeto.idade;

        resultado.push({ nome: nome, idade: idade });
      }

      return resultado;
    }

    // Exemplo de uso:
    var dados = [
      { id: 1, nome: 'Liz', idade: 2 },
      { id: 2, nome: 'Thaís', idade: 32 },
      { id: 3, nome: 'Jonathan', idade: 30 },
      { id: 4, nome: 'Thainá', idade: 29 },
      { id: 5, nome: 'Fabiano', idade: 45 }
    ];

    var resultado = extrairNomeIdade(dados);
    return resultado;
  }

  const objetos = Desafio5();

  return (
    <div className="container">
      <h1>Desafio 5</h1>
      {objetos.map((objeto, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">Nome: {objeto.nome}</h3>
            <p className="card-text">Idade: {objeto.idade}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Desafio5;


