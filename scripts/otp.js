let button= document.querySelector("button");
    button.addEventListener("click",myFunction);
    
    function myFunction(el){
        let otp = document.querySelector("#otp").value;
        if(otp === "123456"){
            alert("Payment Successfully");
            window.location.href = "index.html"
        }
        else{
            alert("You Entered Wrong OTP. Please Enter Correct OTP which is sent on your registered mobile number.")
        }
    }