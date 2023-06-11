import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card } from 'react-bootstrap';

function MeuComponente() {
  const [showModal, setShowModal] = useState(false);
  const [desafioContent, setDesafioContent] = useState([]);

  function handleClickDesafio(desafio) {
    setDesafioContent(desafio);
    setShowModal(true);
  }

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

  const desafio5Content = Desafio5();

  return (
    <div className="container">
      <h1>Meu Componente</h1>
      <div className="row">
        {/* ...outros cards de desafio... */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 5</Card.Title>
              <Button onClick={() => handleClickDesafio(desafio5Content)}>Ver Desafio</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Conteúdo do Desafio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {desafioContent && (
            <div>
              {desafioContent.map((objeto, index) => (
                <div key={index}>
                  <h3>Nome: {objeto.nome}</h3>
                  <p>Idade: {objeto.idade}</p>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MeuComponente;

