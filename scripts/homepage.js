let sliderImages = [
    "https://files.myglamm.com/site-images/original/SK-Survey-1920x527_1.jpg",
    "https://files.myglamm.com/site-images/original/Carousel-(Desktop)---1920-527-_1.gif",
    "https://files.myglamm.com/site-images/original/Homepage-desktop-lipstikcks.jpg",
    "https://files.myglamm.com/site-images/original/1920x527-(5).jpg"
]
let leftbtn = document.querySelector(".slide1");
let rightbtn = document.querySelector(".slide2");
let slider = document.querySelector("#slider");


let imageState = 0;
rightbtn.addEventListener("click",function(){
    imageState++;
    if(imageState === sliderImages.length){
        imageState = 0;
    }
    slider.src = sliderImages[imageState];
});

leftbtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState = sliderImages.length-1;
    }
    slider.src = sliderImages[imageState];
})

// Products Cards Data
let productsCards = [
    {
        img : "https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg",
        title : "MYGLAMM LIT LIQUID MATTE LIPSTICK - OTP",
        desc : "Moringa Oil Enriched Matte Lipstick",
        rating : 4.9,
        imgStar : "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        totalRating : "12054 Ratings",
        price: "Rs. 395"
    },
    {
        img : "https://files.myglamm.com/site-images/400x400/Soft-Matte-post-1-Poppy-Pink.jpg",
        title : "MYGLAMM LIT LIQUID MATTE LIPSTICK - OTP",
        desc : "Moringa Oil Enriched Matte Lipstick",
        rating : 4.9,
        imgStar : "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        totalRating : "12054 Ratings",
        price: "Rs. 395"
    },
    {
        img : "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
        title : "MYGLAMM LIT LIQUID MATTE LIPSTICK - OTP",
        desc : "Moringa Oil Enriched Matte Lipstick",
        rating : 4.9,
        imgStar : "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        totalRating : "12054 Ratings",
        price: "Rs. 395"
    },
    {
        img : "https://files.myglamm.com/site-images/400x400/Artboard-1-(1)-(1).jpg",
        title : "MYGLAMM LIT LIQUID MATTE LIPSTICK - OTP",
        desc : "Moringa Oil Enriched Matte Lipstick",
        rating : 4.9,
        imgStar : "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        totalRating : "12054 Ratings",
        price: "Rs. 395"
    }
]


productsCards.map(function(el){
    let div = document.createElement("div");
    div.setAttribute("class","product-div")
    let image = document.createElement("img");
    image.src = el.img
    let title = document.createElement("h3");
    title.innerText = el.title;
    let desc = document.createElement("p");
    desc.setAttribute("class","descDiv")
    desc.innerText = el.desc;

    let div1 = document.createElement("div");
    div1.setAttribute("class","flexing")
    let rating = document.createElement("h3");
    rating.setAttribute("class","rating")
    rating.innerText = el.rating;
    let imgStar = document.createElement("img");
    imgStar.src = el.imgStar;
    imgStar.setAttribute("class","icon-star")
    let text = document.createElement("p");
    text.innerText = "|";
    let totalRating = document.createElement("p");
    totalRating.innerText = el.totalRating;
    div1.append(rating,imgStar,text,totalRating);

    let price = document.createElement("h2");
    price.setAttribute("class","divPrice")
    price.innerText = el.price;
    div.append(image,title,desc,div1,price);
    document.querySelector("#productsCard").append(div);
})

let catImages = [
    {
        img:"https://files.myglamm.com/site-images/original/SKin-1-2.png",
        name : "Skin"
    },
    {
        img:"https://files.myglamm.com/site-images/original/Lips-3.png",
        name : "Lips"
    },
    {
        img:"https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg",
        name : "Hair"
    },
    {
        img:"https://files.myglamm.com/site-images/original/Eyes-4.png",
        name : "Eyes"
    },
    {
        img:"https://files.myglamm.com/site-images/original/Face-5.png",
        name : "Face"
    },
    {
        img:"https://files.myglamm.com/site-images/original/Nails-1.png",
        name : "Nails"
    },
    {
        img:"https://files.myglamm.com/site-images/original/App-PersonalCare_2.png",
        name : "Sanitizing Care"
    },
    {
        img:"https://files.myglamm.com/site-images/original/Bath.png",
        name : "Bath &  Body"
    }
];

catImages.map(function(el){
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("p");
    name.innerText = el.name;
    div.append(img,name);
    document.querySelector("#categories-data").append(div);
})