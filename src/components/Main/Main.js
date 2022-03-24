import React from 'react';
import './Main.css';

import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";

import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      
    </main>
  )
}
export default Main;