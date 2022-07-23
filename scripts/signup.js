let form = document.querySelector("form");
form.addEventListener("submit",myFunction);

let usersData = JSON.parse(localStorage.getItem("usersArr")) || [];
function myFunction(event){
    event.preventDefault();

    let obj = {
        name : form.name.value,
        email : form.email.value,
        password : form.password.value,
    }
    usersData.push(obj);
    localStorage.setItem("usersArr",JSON.stringify(usersData));
    if(obj.name == "" || obj.email == "" || obj.password == ""){
        alert("Some Fields are empty. Make Sure firstly fill all the fields.")
        return;
    }
    else{
        alert("Your Are Successfully Signed Up. Now we are redirected you to Login Page");
        window.location.href = "login.html"
    }
}