import React from 'react';
import Styles from './Header.module.css';
import Texto from '../Texto/Texto';
import RedeSociais from '../RedeSociais/RedeSociais';

const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <Texto texto="AWA Tecnologia" tamanho="1.8rem" cor="#eee" />
      <RedeSociais posicao="right" />
    </div>
  );
};

export default Header;
