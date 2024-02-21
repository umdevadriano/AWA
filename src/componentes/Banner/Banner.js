import React from 'react';
import Styles from './Banner.module.css';


const Banner = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{
        background: `linear-gradient( #1A1A1A, Transparent 100% , rgba(0, 0, 0, 0)100%), url(${props.imagem})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
    </div>
  );
};

export default Banner;
