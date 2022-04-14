let text = document.querySelector('.main__content-right__text')
let textProfile = document.querySelectorAll('.main__content-left__text')
let textOffice = document.querySelector('.main__content-right__text-one')
let userName = document.querySelector('.main__content-right__user');

userName.textContent = `${JSON.parse(localStorage.getItem('currUser'))['name']}`

textProfile[1].addEventListener('click',function(){
    text.innerHTML = `Ваша почта: ${JSON.parse(localStorage.getItem('currUser'))['email']}`;

})


