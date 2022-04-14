
let signinBg = document.querySelector('.signin__bg')
let signinModal = document.querySelector('.signin__modal')
let openSignin = document.querySelector('.btn__signin')
let closeSignin = document.querySelector('.signin__navigation-close')
let users = JSON.parse(localStorage.getItem('users'));

openSignin.addEventListener('click',function(event){
    event.preventDefault()
    signinBg.classList.add('active')
    signinModal.classList.add('active')

})
closeSignin.addEventListener('click',function(){
    signinBg.classList.remove('active')
    signinModal.classList.remove('active')
})

users.forEach(el => {
    console.log(el)
});