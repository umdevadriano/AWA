import React from 'react';
import Styles from '../Logo/Logo.module.css';

const Logo = (props) => {
  const tipoLogo = props.tipo;
  return (
    <div className={Styles.Container}>
      {tipoLogo === 'img' ? (
        <img
          src={props.logo}
          style={{ width: `${props.tamanho}` }}
          alt="logo"
        />
      ) : (
        <p style={{ width: `${props.tamanho}` }}>{props.logo}</p>
      )}
    </div>
  );
};

export default Logo;
