// checking if the .js is connected with .html
console.log('page is connected');

// taking refernces from HTML form
var firstName = document.getElementById('FName');
var lastName = document.getElementById('LName');
var eMail = document.getElementById('Email');
var phone = document.getElementById('Phone');
var address = document.getElementById('Address');

const gender = document.getElementsByClassName('gender');
var repass = document.getElementById('repass');
const pass = document.getElementById('password');


//display reference for displaying data

const fn = document.getElementById('fn');
const ln = document.getElementById('ln');
const Em = document.getElementById('Em');
const Ph = document.getElementById('Ph');
const Gn = document.getElementById('Gn');
const Pas = document.getElementById('Pas');
const addr = document.getElementById('address');


// adding eventlistener for verification
firstName.addEventListener('textInput', VerifyFirstName);
lastName.addEventListener('textInput', VerifyLastName);
eMail.addEventListener('textInput', VerifyEmail);
address.addEventListener('textInput', VerifyAddress);
phone.addEventListener('textInput', VerifyPhone);
pass.addEventListener('textInput', VerifyPass);
repass.addEventListener('textInput', VerifyRepass);
//gender.addEventListener('textInput',verifyGender);


const first_error = document.getElementById('first_error');
const last_error = document.getElementById('last_error');
const email_error = document.getElementById('email_error');
const phone_error = document.getElementById('phone_error');
const pass_error = document.getElementById('pass_error');
const address_error = document.getElementById('address_error');
const repass_error = document.getElementById('repass_error');
const gender_error = document.getElementById('gender_error');


function validate() {

    
    // firstname error
    if (firstName.value.length < 1) {
        first_error.textContent = 'Firstname can not be empty';
        first_error.style.display = "block";
        first_error.style.color = "red";
        return false;
    }


    if (firstName.value <= 1000000000) {
        first_error.textContent = 'Firstname cannot contain a number';
        return false;
    }

    //lastname error
    if (lastName.value.length < 1) {
        last_error.textContent = 'Lastname can not be empty';
        last_error.style.display = "block";
        last_error.style.color = "red";
        return false;
    }
    if (lastName.value <= 1000000000) {
        last_error.textContent = 'Lastname cannot contain a number';
        return false;
    }

    //Email error
    if (eMail.value.length < 1) {
        email_error.textContent = 'Email can not be empty';
        email_error.style.display = "block";
        email_error.style.color = "red";
        return false;
    }
    if (eMail.value <= 1000000000) {
        email_error.textContent = 'provide a valid email';
        return false;
    }

    //Address error

    //Phone error
    if (phone.value.length < 1) {
        phone_error.textContent = 'Please provide phone number';
        phone_error.style.display = "block";
        phone_error.style.color = "red";
        return false;
    }
    if (phone.value.length < 10) {
        phone_error.textContent = 'Invalid phone number';
        phone_error.style.display = "block";
        phone_error.style.color = "red";
        return false;
    }
    //pass error
    if (pass.value.length == 0) {
        pass_error.textContent = 'Password can not be empty';
        pass_error.style.display = "block";
        pass_error.style.color = "red";
        return false;
    }
    if (pass.value.length < 4) {
        pass_error.textContent = 'Minimum 4 character needed';
        pass_error.style.display = "block";
        pass_error.style.color = "red";
        return false;
    }


    //repass error
    if (repass.value != pass.value) {
        repass_error.textContent = 'password does not match';
        repass_error.style.display = "block";
        repass_error.style.color = "red";
        return false;
    }
    
    localStorage.setItem('FName', firstName.value);
    localStorage.setItem('LName', lastName.value);
    localStorage.setItem('Email', eMail.value);
    localStorage.setItem('Phone', phone.value);
    localStorage.setItem('gender', gender.value);
    localStorage.setItem('Adress', address.value);
}

for (const i in localStorage) {
    console.log(i + ' = ' + localStorage[i]);
}
function FetchData() {
    fn.textContent = localStorage.getItem('FName');
    ln.textContent = localStorage.getItem('LName');
    Em.textContent = localStorage.getItem('Email')
    Ph.textContent = localStorage.getItem('Phone');
    Gn.textContent = localStorage.getItem('gender');
    addr.textContent = localStorage.getItem('Adress');

}


//verifying firstname
function VerifyFirstName() {
    if (firstName.value.length >= 1) {
        first_error.style.display = "none";
        return true;
    }

}

//verifying lastname
function VerifyLastName() {
    if (lastName.value.length >= 1) {
        last_error.style.display = "none";
        return true;
    }
}

//verifying email
function VerifyEmail() {
    if (eMail.value.length >= 8) {
        email_error.style.display = "none";
        return true;
    }
}

//verifying Address

function VerifyAddress() {
    if (address.value == '' || address.value.length > 0) {
        return true;
    }
}

//verifying password

function VerifyPass() {
    if (pass.value.length >= 3) {
        pass_error.style.display = 'none';
        return true;
    }


}

//verifying PhoneNumber

function VerifyPhone() {
    if (phone.value.length == 10) {
        phone_error.style.display = 'none';
        return true;
    }

}

//verify repas

function VerifyRepass() {
    if (repass == pass) {
        repass_error.style.display = 'none';
        return true;
    }
    if (repass.value < 1) {
        repass_error.style.display = 'none';
        return false;
    }

}


// function first(){
//     first_error.style.display='none';
// }

// more validation exceptions //used arrow function

firstName.onclick = () => first_error.style.display = 'none';

lastName.onclick = () => last_error.style.display = 'none';

eMail.onclick = () => email_error.style.display = 'none';

phone.onclick = () => phone_error.style.display = 'none';

address.onclick = () => address_error.style.display = 'none';

repass.onclick = () => repass_error.style.display = 'none';