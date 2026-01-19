const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;



const burgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

burgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    burgerButton.classList.toggle("open");
})