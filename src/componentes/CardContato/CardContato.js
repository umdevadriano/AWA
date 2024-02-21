import React from 'react';
import Styles from './CardContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
import imagemTelefone from '../Contato/telefone.png';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  const tel = ['(11)1111-1111'];
  const whats = ['(11)11111-1111'];

  return (
    <div className={Styles.Container}>
      <div>
        <h1>
      
          <br />
          <small>
            Com atuação em todo o Brasil, a Awa está pronta para
            atender às necessidades de criação de landing pages e
            softwares personalizados. Nossa equipe especializada em
            design e programação está preparada para oferecer
            soluções personalizadas que atendam às demandas
            específicas de cada cliente, garantindo excelência em cada
            projeto.
          </small>
        </h1>
      </div>

      <ul>
        {tel.map((telefone) => (
          <li>
            <img src={imagemTelefone} alt="Telefone" />
            {telefone}
          </li>
        ))}
        {whats.map((whatsapp) => (
          <li>
            <a
              href="https://wa.me/?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+agendar+um+horário"
              target="blank"
            >
              <img src={imagem} alt="Logo whatsapp" />
              {whatsapp}
            </a>
          </li>
        ))}
      </ul>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
