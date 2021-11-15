import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {

    return (
        <>

            <h2 className="profile__name">Привет, Маргарита!</h2>
            <div className="profile__info">
                <form className="profile__info_form">
                    <p className="profile__input-label">Маргарита</p>
                    <input type="text"  className="profile__input" minLength="2" maxLength="40" required placeholder="Имя"  />
                    <span id="inputNameError" className="input-error"></span>
                    
                </form>
                <form className="profile__info_form">
                    <p className="profile__input-label">pupa@mail.ru</p>
                    
                    <input  type="email" className="profile__input" placeholder='E-mail'  required />
                    <span id="inputEmailError" className="input-error"></span>
                </form>
            </div>
            <div className="profile__button-box">
                <button type="button" name="Edit" className="profile__info-edit">Редактировать</button>
                 <Link to="/" className="profile__log-out">Выйти из аккаунта</Link>
            </div>
        </>
    )
}

export default Profile;