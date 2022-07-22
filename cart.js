let cartData = JSON.parse(localStorage.getItem("cartArr"))||[];
console.log(cartData)
let totalCount = document.querySelector("#totalCount");
let totalPrice = document.querySelector("#totalPrice");

display(cartData);
function display(cartData){
    document.querySelector("#haircare-div").innerHTML = null;
    let total = 0;
    let price_total = 0 
    cartData.map(function(el,index){
        total++;
        price_total = price_total+el.price;
        
        
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.img;
    
        let heading = document.createElement("h3");
        heading.innerText = el.heading;
        let desc = document.createElement("p");
        desc.innerText = el.desc;
        
        let div1 = document.createElement("div");
        div1.setAttribute("class","price-flex")
        let price = document.createElement("p");
        price.innerText = "₹ " +el.price;
        let sortPrice = document.createElement("p");
        sortPrice.setAttribute("class","cutPrice")
        sortPrice.innerText = el.shortPrice;
        let btn = document.createElement("p");
        btn.setAttribute("class","cartBtn");
        btn.innerText = "+"
        btn.addEventListener("click",function(){
            cartFunction(el,index);
        })
    
        div1.append(price,sortPrice,btn);
        
        div.append(image,heading,desc,div1);
        document.querySelector("#haircare-div").append(div);

    })
    localStorage.setItem("price",price_total);
    localStorage.setItem("items",total);

    totalCount.innerText = "Total Number of Items : "+total;
 
    totalCount.setAttribute("style","font-size:18px; font-weight:bold")
    totalPrice.innerText = "Your Total Cart Value : "+price_total;
    totalPrice.setAttribute("style","font-size:18px; font-weight:bold")
    document.querySelector("#flex-total>button").addEventListener("click",function(){
        if(price_total >= 100){
            alert("Thanks for Choosing the Items. Now we are redirected you to Checkout Page. Please Do Payment for Successfully Place Order.")
            window.location.href = "checkout.html";
        }
        else{
            alert("Your Cart Value is Less then 100");
            return;
            
        }
    })
}

function cartFunction(el,index){
    cartData.splice(index,1);
    display(cartData);
    localStorage.setItem("cartArr",JSON.stringify(cartData));
}

