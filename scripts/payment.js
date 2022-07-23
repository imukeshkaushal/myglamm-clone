let form = document.querySelector("form");
form.addEventListener("submit",myFunction);
function myFunction(event){
    event.preventDefault();
    let obj = {
        name : form.name.value,
        cardNumber : form.cardNumber.value,
        cardType : form.card.value,
        cvv : form.cvv.value,
        expireDate : form.date.value
    }

    if(obj.name == "" || obj.cardNumber == "" || obj.cardType == "" || obj.cvv == "" || obj.expireDate == ""){
        alert("Input Fields Are Empty");
        return;
    }
    else{
        window.location.href = "otp.html";
    }
}