//Выход из аккаунта через профиль
let btnSignOut = document.querySelector('.btn_signOut')

if (btnSignOut) {
  btnSignOut.addEventListener('click', (e)=> {
    e.preventDefault();

    window.location.href = 'main.html';
    localStorage.removeItem('currUser');
  })
}


  
//Табы ЛК
const tabsBtn = document.querySelectorAll('.content-tabs__btn')
const tabsItem = document.querySelectorAll('.content__tabs')

tabsBtn.forEach(onTabClick)


function onTabClick(item){
  item.addEventListener('click', function(){
    let currentBtn = item
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)

    if( ! currentBtn.classList.contains('active')){
      tabsBtn.forEach( (item) => {
        item.classList.remove('active')
      })
      tabsItem.forEach( (item) => {
        item.classList.remove('active')
      })
  
      currentBtn.classList.add('active')
      currentTab.classList.add('active')
    }else{

    }
    

    
  })
}
document.querySelector('.content-tabs__btn')


let userNameConsol = document.querySelector('.content__tabs__user')
let name_user = JSON.parse(localStorage.currUser).name
userNameConsol.innerHTML = name_user

let userProfilEmail = document.querySelector('.content__tabs-email')
let name_email = JSON.parse(localStorage.currUser).email
userProfilEmail.innerHTML = name_email

let userProfilPassword = document.querySelector('.content__tabs-password')
let name_password = JSON.parse(localStorage.currUser).password
userProfilPassword.innerHTML = name_password
