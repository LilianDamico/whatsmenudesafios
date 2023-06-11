import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="mb-0 py-4 px-4">&copy; {new Date().getFullYear()} Lilian Damico. Todos os direitos reservados.</p>
          </div>
          <div className="col">
            <ul className="list-inline mb-0">
              <li className="list-inline-item py-4 px-4 fa-3x">
                <a href="https://www.linkedin.com/in/lilian-maria-damico-da-fonseca-458b7b53/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item py-4 px-4 fa-3x">
                <a href="https://github.com/LilianDamico" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item py-4 px-4 fa-3x">
                <a href="https://api.whatsapp.com/send?phone=5513981675740" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsappSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


