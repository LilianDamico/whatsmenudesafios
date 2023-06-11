import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card } from 'react-bootstrap';

function MeuComponente() {
  const [showModal, setShowModal] = useState(false);
  const [desafioContent, setDesafioContent] = useState('');

  function handleClickDesafio(desafio) {
    setDesafioContent(desafio);
    setShowModal(true);
  }

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
    
      var stringFormatada = "<h3>" + id + " - " + nome + " - " + idade + "</h3>";
      resultado.push(stringFormatada);
    }
  
    return resultado;
  }

  const desafio6Content = Desafio6();

  return (
    <div className="container">
      <h1>Meu Componente</h1>
      <div className="row">
        {/* ...outros cards de desafio... */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 6</Card.Title>
              <Button onClick={() => handleClickDesafio(desafio6Content)}>Ver Desafio</Button>
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
            <div dangerouslySetInnerHTML={{ __html: desafioContent }} />
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
