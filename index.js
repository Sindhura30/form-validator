const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

const showError = (input, msg) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const errorContainer = formControl.querySelector('small');
    errorContainer.innerText = msg;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const checkEmail = (input) => {
    const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, `Email should be valid`)
    }

}

const checkPassword = input => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/;
    if (regex.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, `Password should contain one digit, one uppercase letter and a special character`)
    }
}

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('_', ' ');
}

const isRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value === '') {
        showError(input, `${capitalizeFirstLetter(input.id)} is required`)
        } else {
        showSuccess(input)
        }
        
    })
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${capitalizeFirstLetter(input.id)} must have at least ${min} characters`)
    } else if (input.value.length < min) {
        showError(input, `${capitalizeFirstLetter(input.id)} should be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

const checkPasswordMatch = (password1, password2) => {
    if (password1.value !== password2.value) {
        showError(password2, 'Passwords do not match')
    }
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
    isRequired([username, email, password, confirm_password]);
    checkLength(username, 3, 8);
    checkEmail(email);
    checkPassword(password);
    checkPasswordMatch(password, confirm_password);
})