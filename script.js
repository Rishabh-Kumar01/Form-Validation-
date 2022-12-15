function validation(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let age = document.getElementById('number').value
    let role = document.getElementById('dropdownrole').value
    let recommend = document.getElementsByClassName('radioselecting').value
    let feature = document.getElementById('dropdownfeature').value
    let improvement = document.getElementsByClassName('checkboxselecting').value

    if(name == ""){
        document.getElementById("Name").innerHTML = 
        " ** Please fill the Name field"
        return false
    }

    if(email == ""){
        document.getElementById("Email").innerHTML = 
        " ** Please fill the email id field"
        return false
    }

    if(email.indexOf("@") <= 0){
        document.getElementById("Email").innerHTML = 
        " ** Invalid Email --- Missing @"
        return false
    }

    if (
        email.charAt(email.length - 4) != "." &&
        email.charAt(email.length - 3) != "."
      ) {
        document.getElementById("Email").innerHTML = " ** Invalid Email --- Missing Dot"
        return false
    }

    if(age == ""){
        document.getElementById("Age").innerHTML = 
        " ** Cannot be left Empty"
        return false
    }

    if(age == 0){
        document.getElementById("Age").innerHTML = 
        " ** You even born yet ??? You can type ... Something is fishy "
        return false
    }

    if(age < 0 || age > 99){
        document.getElementById("Age").innerHTML = 
        " ** Are u kidding me .... BEtween 1 and 99"
        return false
    }

    if(role == ""){
        document.getElementById("Role").innerHTML = 
        " ** Select A Role Man"
        return false
    }
}