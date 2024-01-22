import React from 'react';

import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import TextoCorpo from '../TextoCorpo/TextoCorpo';

const Especialidades = () => {
  return (
    <div className={Styles.Container} id="Serviços">
      <TextoCabe texto="Serviços" />
      <TextoCorpo texto="« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum. » " />
    </div>
  );
};

export default Especialidades;
