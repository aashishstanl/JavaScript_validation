
// console.log("page is ready again");
// var username = document.getElementById('username');
// const password = document.getElementById('password');
// const login_button = document.getElementById('login_button');
// const signup_button = document.getElementById('signup_button');
// const Age = document.getElementById('age');
// const display = document.getElementById('display');




// login_button.onclick = function(event){
//     event.preventDefault();
//     localStorage.setItem('name', username.value);
//     localStorage.setItem('pass', password.value);
//     localStorage.setItem('Age', Age.value);

   
    
// };

// function getname() {
// 	return localStorage.getItem('name');  
    
// } 
// console.log(getname());

// function getpassword() {
// 	return localStorage.getItem('pass');  
    
// } 

// console.log(getpassword());

// function getAge() {
// 	return localStorage.getItem('Age');  
    
// } 
// console.log(getAge());
    
//validation of the page

const email = document.forms['form']['username'];
const password = document.forms['form']['password'];

const email_error = document.getElementById('user_error');
const pass_error = document.getElementById('pass_error');

email.addEventListerner('textInput', email_verify);
password.addEventListerner('textInput',pass_verify);


function validate(){
    if(email.value.length = 0){
        email_error.style.display = "none";
    }
    if(email.value.length < 10){
        //email_error.textContent = "email too short";
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 10){
        // pass_error.textContent = "password too short";
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
   
}

function email_verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid green";
        email_error.style.display = "none";
        return true;
    }
}
function pass_verify(){
    if (password.value.length >= 6){
        password.style.border = "2px solid green";
        pass_error.style.display = "none";
        return true;
    }
}