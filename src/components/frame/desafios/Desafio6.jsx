import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desafio6() {
  function Desafio6() {
    var dados = [
      { id: 1, nome: 'Liz', idade: 2 },
      { id: 2, nome: 'Thaís', idade: 32 },
      { id: 3, nome: 'Jonathan', idade: 30 },
      { id: 4, nome: 'Thainá', idade: 29 },
      { id: 5, nome: 'Fabiano', idade: 45 }
    ];
    
    var resultado = [];  
    for (var i = 0; i < dados.length; i++) {
      var objeto = dados[i];
      var id = objeto.id;
      var nome = objeto.nome;
      var idade = objeto.idade;
    
      var stringFormatada = `<h3>${id} - ${nome} - ${idade}</h3>`;
      resultado.push(stringFormatada);
    }
  
    return resultado;
  }
  
  const objetos = Desafio6();
  
  return (
    <div className="container">
      <h1>Desafio 6</h1>
      {objetos.map((objeto, index) => (
        <div
          key={index}
          className="card mb-3"
          dangerouslySetInnerHTML={{ __html: objeto }}
        ></div>
      ))}
    </div>
  );
}

export default Desafio6;
