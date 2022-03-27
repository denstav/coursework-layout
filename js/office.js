let text = document.querySelector('.main__content-right__text')
let textProfile = document.querySelectorAll('.main__content-left__text')
let textOffice = document.querySelector('.main__content-right__text-one')

textProfile[1].addEventListener('click',function(){
    text.textContent = String(textOffice)
        textOffice.style.display = "flex";

})

textProfile[0].addEventListener('click',function(){
    text.textContent = text

})
