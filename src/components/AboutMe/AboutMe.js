import React from 'react';
import './AboutMe.css';
import avatar from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title" id="student">Студент</h2>
      <div className="about-me__wrap">
        <div className="about-me__info">
          <h3 className="about-me__name">Маргарита</h3>
          <p className="about-me__profile">Фронтенд-разработчик, 22 года</p>
          <p className="about-me__description">Степень бакалавра по направлению прикладной лингвистики в МГОУ. Владение английским языком на уровне С1 и французcким  на уровне В1. На текущий момент работаю в качестве технического менеджера в КСЭ и прохожу обучение в Яндекс.Практикуме по профессии "Фронтенд-разработчик".</p>
          <ul className="about-me__links-list">
            <li>
              <a className="about-me__links-item" href="https://www.facebook.com/hexenhass" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li>
            <a className="about-me__links-item" href="https://github.com/MK-Wrona" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={avatar} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;