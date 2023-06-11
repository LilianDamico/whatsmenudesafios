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

  function Desafio4() {
    let array = Array.from({ length: 10 }, (_, index) => index + 1);

    array.unshift(0);

    array.push(11);

    array.splice(array.indexOf(5), 1);

    array.splice(array.indexOf(8), 1, 20, 21, 22);

    return array;
  }

  const desafio4Content = Desafio4();

  return (
    <div className="container">
      <h1>Meu Componente</h1>
      <div className="row">
        {/* ...outros cards de desafio... */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 4</Card.Title>
              <Button onClick={() => handleClickDesafio(desafio4Content)}>Ver Desafio</Button>
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

