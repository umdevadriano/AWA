import React from 'react';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
import SvgLinkedin from '../SvgLinkedin/SvgLinkedin';
import Styles from './RedeSociais.module.css';

const RedeSociais = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{
        justifyContent: `${props.posicao}`,
        alignItems: `${props.posicao}`,
      }}
    >
      <a href="https://www.instagram.com/" target="blank">
        <SvgInstagram />
      </a>
      <a href="https://www.linkedin.com/" target="blank">
        <SvgLinkedin link="https://www.linkedin.com/" />{' '}
      </a>
    </div>
  );
};

export default RedeSociais;
