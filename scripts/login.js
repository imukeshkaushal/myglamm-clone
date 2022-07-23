let form = document.querySelector("form");

let usersList = JSON.parse(localStorage.getItem("usersArr")) || [];
form.addEventListener("submit",myFunction);
function myFunction(event){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

    usersList.map(function (el) {
        if (el.email == email && el.password == password) {
          alert(
            "You are Successfully Logged In. Now, We are redirected to you HomePage"
          );
          window.location.href = "index.html";
        } else {
          alert(
            "Entered details are not matched with our database. Please enter correct input"
          );
        }
    })
}