const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 0;
}

reviewCount = Number(reviewCount) + 1;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = "This is review #${reviewCount}.";