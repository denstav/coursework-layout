
let signinBg = document.querySelector('.signin__bg')
let signinModal = document.querySelector('.signin__modal')
let openSignin = document.querySelectorAll('.btn__signin')
let popup__bg = document.querySelector('.popup__bg');
//console.log(openSignin);
let closeSignin = document.querySelector('.signin__navigation-close')
let users = JSON.parse(localStorage.getItem('users'));

openSignin.forEach((elem) => {
    elem.addEventListener('click',function(event){
        popup__bg.classList.remove('active')
        event.preventDefault()
        signinBg.classList.add('active')
        signinModal.classList.add('active')
    
    })
})

closeSignin.addEventListener('click',function(){
    signinBg.classList.remove('active')
    signinModal.classList.remove('active')
})


// function signIn(e) {
//     let email = document.querySelector('.username_signin').value, pwd = document.querySelector('.password__signin').value;
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     let exist = formData.length && 
//     JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//         location.href = "/";
//     }
//     e.preventDefault();
// }