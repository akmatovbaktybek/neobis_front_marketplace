import { Link } from "react-router-dom";


const Login = () => {
   return (
      <div className="login">
         <div className="login__content">
            <div className="login__left-half">
               <img className="login__img" src="../images/login-main.png" alt="" />
            </div>
            <div className="login__right-half">

               <form className="login__form">
                  <div className="form__content">
                     <div className="login__inputs">
                        <input type="text" className="form__input-name" placeholder="Имя пользователя" />
                        <input type="password" className="form__input-password" placeholder="Пароль" />
                     </div>

                     <button className="form__button default-button">Войти</button>
                     <Link className="form__link" to={'/signup'}>Зарегистрироваться</Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;