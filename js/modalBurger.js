let popupBg = document.querySelector('.popup__bg')
let popupModal = document.querySelector('.popup__modal')
let openPopup = document.querySelector('.header__site-burger')
let closePopup = document.querySelector('.popup__navigation-close')

openPopup.addEventListener('click',function(event){
    event.preventDefault()
    popupBg.classList.add('active')
    popupModal.classList.add('active')

})
closePopup.addEventListener('click',function(){
    popupBg.classList.remove('active')
    popupModal.classList.remove('active')
})

document.addEventListener('click',function(event){
    if(event.target === popupBg){
        popupBg.classList.remove('active')
        popupModal.classList.remove('active') 
    }
})