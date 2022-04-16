let text = document.querySelector('.main__content-right__text')
let textProfile = document.querySelectorAll('.content__tabs')[1]
let textOffice = document.querySelector('.main__content-right__text-one')
let userName = document.querySelector('.main__content-right__user');
let textConsol = document.querySelectorAll('.main__content-right')
userName.textContent = `${JSON.parse(localStorage.getItem('currUser'))['name']}`




textProfile[1].addEventListener('click',function(){
    text.innerHTML = `Ваша почта: ${JSON.parse(localStorage.getItem('currUser'))['email']}`;
   

})


