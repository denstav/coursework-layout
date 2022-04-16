let btns = document.querySelector('.header__content-btns');
let headerNav = document.querySelector('.header__content-info');



//ПРОВЕРКА НА АВТОРИЗОВАННОГО ПОЛЬЗОВАТЕЛЯ
if(localStorage.getItem('currUser')) {
  console.log('ВЫ АВТОРИЗОВАНЫ')
  btns.style.display = 'none';

  btnsCont = document.createElement('div')
  btnsCont.classList.add('main__btnsCont');
  //КНОПКА ВЫХОДА
  const btnLogOut = document.createElement('button');
  btnLogOut.classList.add('btn__logOut');
  btnLogOut.textContent = 'Выйти';
  btnsCont.appendChild(btnLogOut);

  btnLogOut.addEventListener('click', (e)=> {
    e.preventDefault();

    window.location.href = 'main.html';
    localStorage.removeItem('currUser');
  })

  //КНОПКА ЛК
  const btnUserProfile = document.createElement('button');
  btnUserProfile.classList.add('btn__userProfile');
  btnUserProfile.textContent = 'Личный кабинет';
  btnsCont.appendChild(btnUserProfile);

  btnUserProfile.addEventListener('click', (e)=> {
    e.preventDefault();

    window.location.href = 'privateOffice.html';
  })
  headerNav.appendChild(btnsCont)
} else {
  console.log('ВЫ НЕ АВТОРИЗОВАНЫ')
}
