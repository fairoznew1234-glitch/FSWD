const username = document.getElementById('username');

const form = document.getElementById('for');

const check = document.getElementById('check');


form.addEventListener("submit",function(Event){
    Event.preventDefault();

    const value = username.value;

    if(value == ""){
        check.textContent = "enter the username"
        check.style.color = "red";
    }
    else if(value != ""){
        check.textContent = ""
    }

});


const email = document.getElementById('email').value;

const checkemail = document.getElementById('checkemail');




form.addEventListener('submit',function(Event){
        Event.preventDefault();
      

        for(let val in email){

            if(val === "@"){
                  checkemail.textContent = "";
            }
            else {
               checkemail.textContent = "invalid email";
            }   
        }
       
        

});


const pass = document.getElementById('pass');
const passc = document.getElementById('passc');

form.addEventListener('submit',function(Event){
    Event.preventDefault();

    const passlength = pass.value.length;
    const passclenght = passc.value.length;

    if(passlength >=6){
        checkpass.textContent = "";
    }
    else if(passlength <6){
        checkpass.textContent = "pass length must be >=6"
    }

    if(pass.value == passc.value){
        checkpassc.textContent = "";
    }
    else if(pass.value !=passc.value){
        checkpassc.textContent ="invalid password";
    }

});
    
 
  
