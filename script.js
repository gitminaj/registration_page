function clearError(){
    errors = document.getElementsByClassName('ferror');
    for(let items of errors){
        items.innerHTML = ""
    }
}


function seterror(id,error){
    // set error by using id
    element = document.getElementById(id);
    console.log(element)
    element.getElementsByClassName('ferror')[0].innerHTML = error;

}

function validateForm(){
    var retrunval = true;
    clearError();

    var name = document.forms['registrationForm']['input-name'].value;
    if(name.length < 3){
        seterror('input-name', '**Your parents has given you a longer name');
        retrunval = false;
    }
    
    var email = document.forms['registrationForm']['input-email'].value;
    if(email.length > 25){
        seterror('input-email', '**Does such long email makes sense');
        retrunval = false;
    }
    
    var phone = document.forms['registrationForm']['input-phone'].value;
    if(phone.length != 10){
        seterror('input-phone', '**Can you please give it a count');
        retrunval = false;
    }
    
    var password = document.forms['registrationForm']['input-password'].value;
    if(password.length < 6){
        seterror('input-password', '**Make the length greater than 6');
        retrunval = false;
    }
    
    var confirmpass = document.forms['registrationForm']['input-confirmpass'].value;
    if(confirmpass != password){
        seterror('input-confirmpass', '**password and confirm password not same');
        retrunval = false;
    }



    return retrunval;
}





