import React from 'react';

import TextoCabe from '../TextoCabe/TextoCabe';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Styles from './Sobre.module.css';
// import imagem from '../Banner/png.png';

const Sobre = () => {
  return (
    <div className={Styles.Container} id="Sobre">
      <TextoCabe texto="Sobre nós" />
      <div className={Styles.ContainerProfissional}>

        <TextoCorpo
          texto="Bem-vindo à Awa, onde a excelência em design e programação se une à
          personalização para atender suas necessidades. Nossa equipe especializada
          está pronta para criar landing pages e softwares personalizados que irão
          impulsionar o seu negócio 
          
        "
        />
      </div>
    </div>
  );
};

export default Sobre;
