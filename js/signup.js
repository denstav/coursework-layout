// Модальное окно //

let signupBg = document.querySelector('.signup__bg')
let signupModal = document.querySelector('.signup__modal')
let openSignup = document.querySelectorAll('.btn__signup')
let closeSignup = document.querySelector('.signup__navigation-close')
let popup__bg_1 = document.querySelector('.popup__bg');
let idCount;
let allUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

if(localStorage.getItem('users')) {
    idCount = JSON.parse(localStorage.getItem('users')).length
} else {
    idCount = 0
}


openSignup.forEach((elem) => {
    elem.addEventListener('click', function (event) {
        popup__bg_1.classList.remove('active')
        event.preventDefault()
        signupBg.classList.add('active')
        signupModal.classList.add('active')
    
    })
})
closeSignup.addEventListener('click', function () {
    signupBg.classList.remove('active')
    signupModal.classList.remove('active')
})

const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault()
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let isError = false


    function validation() {
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
            console.log(errorDisplay)

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

        const usernameValue = username.value;
        const emailValue = email.value;
        const passwordValue = password.value;

        if (usernameValue === ' ') {
            setError(username, 'Это обязательное поле');
            isError = true
        } else {
            setSuccess(username);

        }

        if (emailValue === '') {
            setError(email, 'Это поле обязательное');
            isError = true
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Пожалуйста, введи корректный e-mail');
            isError = true
        } else {
            setSuccess(email);

        }

        if (passwordValue === '') {
            setError(password, 'Пожалуйста, введи корректный пароль');
            isError = true
        } else if (passwordValue.length < 8) {
            setError(password, 'Пароль должен быть не менее 8 символов.')
            isError = true
        } else {
            setSuccess(password);

        }

    }

    validation()
    let uid = new Date().getTime()
    
    console.log(idCount);
    if (!isError){
        let user = {
            id: idCount++,
            name: username.value,
            email: email.value,
            password: password.value,
        }
        allUsers.push(user);
        localStorage.setItem(`users`, JSON.stringify(allUsers))
        localStorage.setItem(`currUser`, JSON.stringify(user))

        window.location = '/privateOffice.html'

    }
});