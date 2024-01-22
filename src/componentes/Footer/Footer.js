import React from 'react';
import TextoRoda from '../TextoRoda/TextoRoda';
import Styles from './Footer.module.css';
const Footer = () => {
  return (
    <div className={Styles.Container}>
      <TextoRoda
        texto=" © 2024 AWA - Tecnologia.
        "
      />
    </div>
  );
};

export default Footer;
