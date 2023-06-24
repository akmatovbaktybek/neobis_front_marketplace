
const Profile = () => {
   return (
      <div className="profile">
         <div className="profile__content">
            <div className="profile__left-half">
               <div className="profile__avatar-top">
                  <div className="profile__avatar-img">
                     <img src="../images/avatar.png" alt="" />
                  </div>
                  <div className="profile__avatar-info">
                     <div className="profile__avatar-name">
                        Алесястар
                     </div>
                     <div className="profile__avatar-nickname">
                        sergeykrash01
                     </div>
                  </div>
               </div>

               <div className="profile__menu">
                  <ul className="profile__menu-list">
                     <li className="profile__menu-list-item"></li>
                     <li className="profile__menu-list-item"></li>
                     <li className="profile__menu-list-item"></li>
                  </ul>
               </div>

            </div>

            <div className="profile__right-half"></div>
         </div>
      </div>
   );
};

export default Profile;