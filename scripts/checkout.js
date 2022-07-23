let price = JSON.parse(localStorage.getItem("price"));
let price_place = document.querySelector("#amounted");
price_place.innerText = "Rs. " +price;


let gettingPrice = price;
let shipping = document.querySelector("#shipping");
if(price >= 500){
    shipping.innerText = "Free";
}
else{
    shipping.innerText = 41;
    gettingPrice = gettingPrice + 41;
}
console.log(gettingPrice)
document.querySelector("#total-amount").innerText ="Rs. " +gettingPrice;

document.querySelector("#apply").addEventListener("click",function(){

    let promo = document.querySelector("#promo-code").value;

    let discount = document.querySelector("#discount");
    if(promo === "masai"){
        discount.innerText = price*(10/100)
        gettingPrice = gettingPrice - (price*(10/100));
        alert("Your Coupon Code Applied Succesfully. You Got 10% Off")
        document.querySelector("#total-amount").innerText = gettingPrice;
    }
    else{
        return
        
    }
    console.log(gettingPrice)

})

document.querySelector("#btn-pay").addEventListener("click",function(){
    window.location.href = "payment.html";
})