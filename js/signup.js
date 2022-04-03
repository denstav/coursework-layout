
// Модальное окно //

let signupBg = document.querySelector('.signup__bg')
let signupModal = document.querySelector('.signup__moda')
let openSignup = document.querySelector('.btn__signup')
let closeSignup = document.querySelector('.signup__navigation-close')

openSignup.addEventListener('click',function(event){
    event.preventDefault()
    signupBg.classList.add('active')
    signupModal.classList.add('active')

})
closeSignup.addEventListener('click',function(){
    signupBg.classList.remove('active')
    signupModal.classList.remove('active')
})

//Регистрация





const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

let btnSignup = document.querySelector('.btn__form-signup')

btnSignup.addEventListener('click', e => {
    e.preventDefault();

    validateInputs();

    
    
});







const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Это обязательное поле');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Это поле обязательное');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Пожалуйста, введи корректный e-mail');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Пожалуйста, введи корректный пароль');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Пароль должен быть не менее 8 символов.')
    } else {
        setSuccess(password);
    }

   
};

let user = {
    name: username,
    email: email,
    password: password,
}
let json = JSON.stringify(user)
localStorage.setItem('user',json)


