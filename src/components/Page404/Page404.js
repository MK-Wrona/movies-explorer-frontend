import React from 'react';
import './Page404.css';
import { Link } from 'react-router-dom';

function Page404() {
  

  return (
    <section className="page-404">
      <h2 className="page-404__title">404</h2>
      <p className="page-404__subtitle">Страница не найдена</p>
      <Link className="page-404__go-back" to="/">Назад</Link>
    </section>
  );
}

export default Page404;