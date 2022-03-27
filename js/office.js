let text = document.querySelector('.main__content-right__text')
let textProfile = document.querySelectorAll('.main__content-left__text')
let textOffice = document.querySelector('.main__content-right__text-one')

textProfile[0].addEventListener('click',function(){
    text.innerHTML = '<p class="main__content-right__text">Добро пожаловать, <span class="main__content-right__user">denstavnew</span> <span class="main__content-right__span">(Выйти)</span><br>Из главной страницы аккаунта вы можете посмотреть ваши <span class="main__content-right__span">недавние заказы</span> , а также <span class="main__content-right__span">изменить пароль и основную информацию.</span></p>'

})

textProfile[1].addEventListener('click',function(){
    text.innerHTML= 'Привет'

})


