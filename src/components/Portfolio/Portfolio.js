import React from 'react';
import './Portfolio.css';
import LinkIcon from '../../images/link_icon.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-list">
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://mk-wrona.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
          <img className="portfolio__link-icon" src={LinkIcon} alt="Иконка для ссылки" />
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://mk-wrona.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <img className="portfolio__link-icon" src={LinkIcon} alt="Иконка для ссылки" />
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://github.com/MK-Wrona/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <img className="portfolio__link-icon" src={LinkIcon} alt="Иконка для ссылки" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;