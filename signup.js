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
}