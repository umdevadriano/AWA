import React from 'react';
import Styles from './Header.module.css';
import Texto from '../Texto/Texto'


const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <Texto
        texto="AWA "
        texto2=" TRANSFORMAND
        O IDEIAS EM
        REALIDADE
        DIGITAL."
        tamanho="1.6rem"
        cor="#fff"
        background= "trasparente"
      />
    </div>
  );
};

export default Header;
