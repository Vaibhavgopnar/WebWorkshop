
const password = document.getElementById("password");
const progressbar = document.getElementById("progressbar");

// check a number
const hasNumber = /\d/;

// check uppercase letters
const hasUpperCase = /[A-Z]/;

// check lowercase letters
const hasLowerCase = /[a-z]/;

// check special character
const hasSpecial = /[!@#$%^&*()_+-=\|[]{}(:;'"<>,.?)]/;

password.addEventListener('input', function () {
    const value = password.value;

    let strength = Math.min(6, Math.floor(value.length / 3));

    strength += value.length > 3 
            ? hasNumber.test(value) + hasUpperCase.test(value) 
                + hasLowerCase.test(value) + hasSpecial.test(value) 
            
            : 0;

    updateBar(strength);

});

function updateBar(strength) {
    progressbar.style.width = strength * 10 + '%';

    if (strength > 8) {
        progressbar.style.backgroundColor = 'green';
    } else if (strength > 5) {
        progressbar.style.backgroundColor = 'orange';
    } else {
        progressbar.style.backgroundColor = 'red';
    }
}
