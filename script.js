let signUpBtn= document.getElementById('sign-up-btn');
let form = document.querySelector('form');
let inputFields = document.querySelectorAll('.input');



function checkData(){
    checkNames();
    checkEmail();
    checkPassword();
    repeatPassword();
}



//Check numbers in name/surname fields

function hasNumber(myString) {
    return /\d/.test(myString);
  }

  //Check name and surname
  function checkNames(){
    inputFields.forEach(field=>{
        let message = field.parentElement.querySelector("small");

        if(field.classList.contains('name') || field.classList.contains('surname')){   
            if(!field.value){   
                message.innerText = `You must enter a ${field.classList.contains('name')? 'name' : 'surname'}`;
                message.style.display = "block";
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
            }else{

                if(field.value.length > 12 || field.value.length < 3){
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
                    message.style.display = "block";
                    message.innerText = `${field.classList.contains('name')? 'name' : 'surname'} must have between 3 and 12 characters...`;
                }
                   else{
                    field.classList.remove("is-invalid");
                    field.classList.add("is-valid");
                        message.style.display = "none";
                    
                }
                if(hasNumber(field.value)){
                    message.style.display = "block";
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
                    message.innerText = `${field.classList.contains('name')? 'name' : 'surname'} cannot have numbers`;
                }
            }
        }


    })
  } 


//Checking email
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
}

// console.log(validateEmail("simasdasdasdasdassdon@gmail.com")); 

function checkEmail(){
        inputFields.forEach((field)=>{
            let message = field.parentElement.querySelector("small");

            if(field.classList.contains('email')){   

                if(!field.value){   
                    message.style.display = "block";
                    message.innerText = `You must enter an email`;
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
                    
                }else if(!validateEmail(field.value)){
                    message.style.display = "block";
                    message.innerText = `You must enter a valid Email`;
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
                }else{
                    field.classList.remove("is-invalid");
                    field.classList.add("is-valid");
                    message.style.display = "none";
                } 
            }
      });
   }


   //Validate password
   function checkPassword(){
    const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let password;
    inputFields.forEach((field)=>{
        
        if(field.classList.contains('password')){
            let message = field.parentElement.querySelector("small");
            if(!field.value){
                message.style.display = "block";
                message.innerText = `You must enter a password`;
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
            }else if(field.value.length < 6 || field.value.length > 16){
                message.style.display = "block";
                message.innerText = `Your password must have between 6 and 16 characters`;
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
            }else if(!regEx.test(field.value)){
                message.style.display = "block";
                message.innerText = `Your password must include letters, numbers and symbols`;
                    field.classList.remove("is-valid");
                    field.classList.add("is-invalid");
            }else{       
                 password = field.value;
                field.classList.remove("is-invalid");
                field.classList.add("is-valid");
                message.style.display = "none";                
            }
        }   
    });

  return password != undefined && password; 
 }


function repeatPassword(){
let password1 = checkPassword();
inputFields.forEach((field)=>{ 

    let message = field.parentElement.querySelector("small");

    if(field.classList.contains('password2')){
        if(!field.value ){
            message.style.display = "block";
            message.innerText = `You must enter a password`;
                field.classList.remove("is-valid");
                field.classList.add("is-invalid");

        }else if(password1 === false){
            message.style.display = "block";
            message.innerText = `You must enter a valid password first`;
                field.classList.remove("is-valid");
                field.classList.add("is-invalid");
        
        }else if(password1 != field.value){
            message.style.display = "block";
            message.innerText = `Passwords do not match...`;
                field.classList.remove("is-valid");
                field.classList.add("is-invalid");
        }else{
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
            message.style.display = "none";    
        }
    }

});

}



form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkData();
}); 