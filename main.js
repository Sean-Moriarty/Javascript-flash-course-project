
// Menu Section

// Open Menu
document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

// Close Menu
document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


// Greeting Section

function celsiusToFahr(temperature){
    return (temperature * 9 / 5) + 32
}

let currentHour = new Date().getHours();
let greetingText;

if (currentHour < 12) {
    gretingText = "Good morning!";
} else if (currentHour < 19) {
    greetingText = "Good afternoon!";
} else if (currentHour < 24) {
    greetingText = "Good evening!";
} else {
    greetingText = "Welcome!";
}


const weatherCondition = "clear";
const userLocation = "Surprise";
let temperature = 25.45420;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it’s ${temperature.toFixed(1).toString()}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it’s ${celsiusToFahr(temperature).toFixed(1).toString()}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

// Temperature section

document.querySelector(".weather-group").addEventListener("click", function(e){
    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
    }
    
});

// Clock section

setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000)


// Gallery Section

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];



let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;

    thumb.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });

        e.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);
});