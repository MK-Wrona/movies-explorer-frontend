import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
        <h1 className="about-project__title">О проекте</h1>
        <div className="about-project__line"></div>
        <div className="about-project__text-box">
        <div className="about-project__info-box">
            <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
            <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info-box">
        <h2 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h2>
            <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>     
        </div>
        <div className="about-project__timer-box">
            <div className="about-project__timer-box-wrap">
            <div className="about-project__timer-green" >
            <p className="about-project__timer-green_text">1 неделя</p>
            </div>
            <p className="about-project__timer-title">Back-end</p>
            </div>
            <div className="about-project__timer-box-wrap">
            <div className="about-project__timer-grey">
            <p className="about-project__timer-grey_text">4 недели</p>
            </div>
            <p className="about-project__timer-title">Front-end</p>
            </div>
        </div>
      
    </section>
  )
}
export default AboutProject