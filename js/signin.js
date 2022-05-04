
let signinBg = document.querySelector('.signin__bg')
let signinModal = document.querySelector('.signin__modal')
let openSignin = document.querySelectorAll('.btn__signin')
let popup__bg = document.querySelector('.popup__bg');
let closeSignin = document.querySelector('.signin__navigation-close')
let users = JSON.parse(localStorage.getItem('users'));
let isLoginTrue = false;

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


let signinBtn = document.querySelector('.btn__form-signin')
let isError = false
const setError = (element, message) => {
    let inputControl = document.querySelector('.button');
    console.log(inputControl)
    const errorDisplay = inputControl.querySelector('.error');
    console.log(errorDisplay)

    errorDisplay.textContent = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.textContent = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


signinBtn.addEventListener('click', function(e){
    e.preventDefault()
    let username = document.getElementById('username_signin').value;
    let password = document.getElementById('password__signin').value;
    users.forEach((user) => {
        if (user.name == username){
            isLoginTrue = true;
            if (user.password == password){
                localStorage.setItem(`currUser`, JSON.stringify(user));
                window.location = '/privateOffice.html'
            } else{
                setError(password, 'Пароль введён не верно');
            }
        } else{
            setError(username, 'Такого логина нет');
        }
    })
})


