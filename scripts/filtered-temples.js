const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;



const burgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

burgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    burgerButton.classList.toggle("open");
})



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Frankfurt Germany",
        location: "Friedrichsdorf, Hesse, Germany",
        dedicated: "1987, August, 28",
        area: 32895,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"

    },

    {
        templeName: "London England",
        location: "Newchapel, Surrey, England",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
    },

    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    }

]

createTempleCard(temples);

const oldLink = document.querySelector("#old")

old.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = ""

    const oldTemples = temples.filter(temple => {
        const dedicationYear = Number(temple.dedicated.split(",")[0]);
        return dedicationYear < 1900;

    });
    createTempleCard(oldTemples)
});

const newLink = document.querySelector("#new")

newLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = ""

    const newTemples = temples.filter(temple => {
        const dedicationYear = Number(temple.dedicated.split(",")[0]);
        return dedicationYear > 2000;

    });
    createTempleCard(newTemples)
});


const smallLink = document.querySelector("#small")

smallLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = ""

    const smallTemples = temples.filter(temple => {
        const templeArea = Number(temple.area);
        return templeArea < 10000;

    });
    createTempleCard(smallTemples);
});

const largeLink = document.querySelector("#large")

largeLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = ""

    const largeTemples = temples.filter(temple => {
        const templeArea = Number(temple.area);
        return templeArea > 90000;

    });
    createTempleCard(largeTemples);
});

const homeLink = document.querySelector("#home")

homeLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = ""

    
    createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = ""
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicaton = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");


        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicaton.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 500)
        img.setAttribute("height", 300)

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicaton);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    })
}

