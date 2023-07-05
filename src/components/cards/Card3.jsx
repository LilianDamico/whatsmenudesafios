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

  const desafio3Content = Desafio3();

  return (
    <div className="container">
      <h1>Meu Componente</h1>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 3</Card.Title>
              <Button onClick={() => handleClickDesafio(desafio3Content)}>Ver Desafio</Button>
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
            <ul>
              {desafioContent.map((numero, index) => (
                <li key={index}>{numero}</li>
              ))}
            </ul>
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

