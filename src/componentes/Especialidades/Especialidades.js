import React from 'react';

import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import TextoCorpo from '../TextoCorpo/TextoCorpo';

const Especialidades = () => {
  return (
    <div className={Styles.Container} id="Serviços">
      <TextoCabe texto="Serviços" />
      <TextoCorpo texto="Desenvolvemos
                Landing Pages
                personalizadas para
                potencializar sua
                comunicação com
                clientes.
                Com o nosso serviço de Desenvolvimento de Landing Pages, a Awa oferece
                a solução ideal para facilitar a comunicação com seus clientes e prospects.
                Nossa equipe especializada em design e programação trabalha para criar
                páginas personalizadas de alta qualidade, que atendem às necessidades
                específicas do seu negócio. Com layouts atrativos e funcionais, garantimos
                uma experiência única para os visitantes, impulsionando a conversão e o
                engajamento. Confie na Awa para elevar a sua presença online." />
    </div>
  );
};

export default Especialidades;
