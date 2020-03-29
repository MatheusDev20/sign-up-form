const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault()

    const firstname = form['firstname'].value
    const lastname = form['lastname'].value
    const email = form['email'].value
    const password = form['password'].value

    function validaInputs(field,message){
            let small = form[field].parentNode.querySelector('small')
            small.innerText = message
            small.style.opacity = "1"
    }   
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    if(firstname == "" ){
        validaInputs('firstname','Firstname is required')
    }
    if(lastname == "" ){
        validaInputs('lastname', 'Lastname is required')
    }
    if(email == "" ){
        validaInputs('email', 'Email is required')
    } else if(!validateEmail(email)){
        validaInputs("email", "Email is not valid")
    }
    if(password == "" ){
        validaInputs('password', 'Password is required')
    } else if(password.length < 8){
        validaInputs('password', 'Password must be bigger thant 8 characters')
    }
})