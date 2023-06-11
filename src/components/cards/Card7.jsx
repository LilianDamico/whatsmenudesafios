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

  function Desafio7() {
    function removerPropriedadesNaoJ(objeto) {
      for (let propriedade in objeto) {
        if (!propriedade.startsWith('j')) {
          delete objeto[propriedade];
        }
      }
    }

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
      <h1>Meu Componente</h1>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Desafio 7</Card.Title>
              <Button onClick={() => handleClickDesafio(objetoFiltrado)}>Ver Desafio</Button>
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
            <ul className="list-group">
              {Object.entries(desafioContent).map(([chave, valor]) => (
                <li key={chave} className="list-group-item">
                  {chave}: {valor}
                </li>
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

