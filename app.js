let login = document.getElementById('login');
let passw = document.getElementById('passw');
let submit = document.getElementById('submit');

let currentLogin = '1234';
let currentPassword = '1234';

function checkLoginAndPassword() {
    if( login.value === currentLogin && passw.value === currentPassword ) {
        location.href = 'home/home.html'
    } else {
        alert('Не правелний пароль!')
    }
}

submit.addEventListener('click', checkLoginAndPassword);