import { Link } from "react-router-dom";


const SignUp = () => {
   return (
      <div className="login">
         <div className="login__content">
            <div className="login__left-half">
               <img className="login__img" src="../images/login-main.png" alt="" />
            </div>

            <div className="login__right-half">
               <div className="login__top">
                  <div className="login__top-prev">
                     <Link className="login__top-prev-button" to={'/'}>←</Link>
                     <Link className="login__top-link" to={'/'}>Назад</Link>
                  </div>
                  <div className="login__top-title">
                     Регистрация
                  </div>
               </div>
               <form className="login__form">
                  <div className="form__content">
                     <div className="login__inputs">
                        <input type="text" className="form__input-name" placeholder="Имя пользователя" />
                        <input type="email" className="form__input-email" placeholder="Почта" />
                     </div>

                     <button className="form__button default-button">Далее</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SignUp;