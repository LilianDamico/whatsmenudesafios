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

  function Desafio1() {
    const numeros = Array.from(Array(31).keys());
    const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
    return numerosImpares;
  }

  const desafio1Content = Desafio1();

  return (
    <div className="container">
      <h1>Meu Componente</h1>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 1</Card.Title>
              <Button onClick={() => handleClickDesafio(desafio1Content)}>Ver Desafio</Button>
            </Card.Body>
          </Card>
        </div>
        {/* ...outros cards de desafio... */}
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
