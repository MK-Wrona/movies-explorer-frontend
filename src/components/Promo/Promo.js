import React from 'react';
import './Promo.css';
import Cover from '../.././images/landing_cover.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <img className="promo__image" src={Cover} alt="" />
    </section>
  );
}

export default Promo;