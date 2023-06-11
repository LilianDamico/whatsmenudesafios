import React, { useState } from 'react';
import Desafio1 from './desafios/Desafio1';
import Desafio2 from './desafios/Desafio2';
import Desafio3 from './desafios/Desafio3';
import Desafio4 from './desafios/Desafio4';
import Desafio5 from './desafios/Desafio5';
import Desafio6 from './desafios/Desafio6';
import Desafio7 from './desafios/Desafio7';

function Frame() {
  const [desafioAtivo, setDesafioAtivo] = useState(null);

  function exibirDesafio(desafio) {
    setDesafioAtivo(desafio);
  }

  return (
    <div>
      <h1 className='p-5 ml-5 text-center' >Desafio WhatsMenu</h1>
      <div className="container-xl text-center">
        <button className="btn btn-primary me-2 " onClick={() => exibirDesafio(1)}>Desafio 1</button>
        <button className="btn btn-primary me-2" onClick={() => exibirDesafio(2)}>Desafio 2</button>
        <button className="btn btn-primary me-2" onClick={() => exibirDesafio(3)}>Desafio 3</button>
        <button className="btn btn-primary me-2" onClick={() => exibirDesafio(4)}>Desafio 4</button>
        <button className="btn btn-primary me-2" onClick={() => exibirDesafio(5)}>Desafio 5</button>
        <button className="btn btn-primary me-2" onClick={() => exibirDesafio(6)}>Desafio 6</button>
        <button className="btn btn-primary me-2" onClick={() => exibirDesafio(7)}>Desafio 7</button>
      </div>
      <div>
        {desafioAtivo === 1 && <Desafio1 />}
        {desafioAtivo === 2 && <Desafio2 />}
        {desafioAtivo === 3 && <Desafio3 />}
        {desafioAtivo === 4 && <Desafio4 />}
        {desafioAtivo === 5 && <Desafio5 />}
        {desafioAtivo === 6 && <Desafio6 />}
        {desafioAtivo === 7 && <Desafio7 />}
      </div>
    </div>
  );
}

export default Frame;
