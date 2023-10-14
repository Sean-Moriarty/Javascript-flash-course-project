
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

const greetingText = "Good Evening!";
const weatherCondition = "clear";
const userLocation = "Surprise";
let temperature = 25.45420;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it’s ${temperature.toFixed(1).toString()}°C outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;
