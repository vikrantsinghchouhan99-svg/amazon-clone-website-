// Search Functionality
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function searchProduct() {
    let value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a product name");
    } else {
        alert("Searching for: " + value);
    }
}

// Search icon click
searchIcon.addEventListener("click", searchProduct);

// Enter key search
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});


// Back To Top Functionality
const backToTop = document.querySelector(".foot-pan1");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Product Box Click Event
const boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        const productName =
            box.querySelector("h2").innerText;

        alert(productName + " selected");
    });
});


// Cart Counter
const cart = document.querySelector(".nav-card");

let cartCount = 0;

boxes.forEach(function(box) {
    box.addEventListener("dblclick", function() {

        cartCount++;

        cart.innerHTML =
            `<i class="fa-solid fa-cart-shopping"></i>
             Cart (${cartCount})`;

    });
});


// Welcome Message
window.addEventListener("load", function() {
    console.log("Amazon Clone Loaded Successfully");
});