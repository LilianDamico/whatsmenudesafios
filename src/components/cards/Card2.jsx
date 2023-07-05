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

  const desafio2Content = Desafio2();

  return (
    <div className="container">
      <h1>Meu Componente</h1>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 2</Card.Title>
              <Button onClick={() => handleClickDesafio(desafio2Content)}>Ver Desafio</Button>
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
              {desafioContent.map((palavra, index) => (
                <li key={index}>{palavra}</li>
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
