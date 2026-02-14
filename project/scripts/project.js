document.querySelector("#year").textContent = new Date().getFullYear();

const btn = document.querySelector("#hamburger-btn");
const menu = document.querySelector("nav");


if (localStorage.getItem("menuOpen") === "true") {
    menu.classList.add("open");
}

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    localStorage.setItem("menuOpen", menu.classList.contains("open"));
});

const families = [
    {
        id: "strings",
        name: "Strings",
        image: "images/strings2.jpg",
        alt: "String Instruments",
        description: `
            The string family forms the foundation of the orchestra and is typically the largest section.
            These instruments produce sound when their strings vibrate, either by being bowed or plucked.
            Strings often carry the main melody, provide harmony, and create emotional depth within a piece of music.
            This family includes instruments such as the violin, viola, cello, and double bass.
        `,
        emotional: "Together, they create the emotional heart of the orchestra."
    },
    {
        id: "woodwinds",
        name: "Woodwinds",
        image: "images/woodwind2.jpg",
        alt: "Woodwind Instruments",
        description: `
            The woodwind family adds color and contrast to the orchestra.
            It includes instruments such as the flute, clarinet, bassoon, oboe, and saxophones.
            These instruments produce sound when air is blown through them, either across a mouthpiece or through a reed.
            Woodwinds can produce smooth, expressive lines as well as bright and energetic passages.
        `,
        emotional: "Their expressive tones give the orchestra its warmth, character, and lyrical sound."
    },
    {
        id: "brass",
        name: "Brass",
        image: "images/brass2.jpg",
        alt: "Brass Instruments",
        description: `
            The brass family is known for its powerful and bold sound, and includes the tuba, trumpet, trombone and horns.
            They are capable of producing strong, resonant tones that can fill an entire concert hall.
            Brass instruments often emphasize climactic moments and provide depth to the orchestra's harmonic structure.
        `,
        emotional: "Their sound brings strength and grandeur to orchestral music."
    },
    {
        id: "percussion",
        name: "Percussion",
        image: "images/percussion.jpg",
        alt: "Percussion Instruments",
        description: `
            The percussion family includes instruments such as the timpani, the drumset, cymbals, and xylophone.
            Unlike other families, percussion instruments create sound through impact.
            They are essential for maintaining rhythm and enhancing both subtle and powerful musical moments.
        `,
        emotional: "From subtle pulses to powerful crashes, percussion defines the energy of every performance."
    },
]

const container = document.querySelector("#families-container");

if (container) {

    families.forEach(family => {

        container.innerHTML += `
            <section id="${family.id}" class="family-section">
                <img src="${family.image}" alt="${family.alt}" loading="lazy">
                <div>
                    <h3>${family.name}</h3>
                    <p>${family.description}</p>
                    <p class="emotional">${family.emotional}</p>
                </div>
            </section>
        `;
    });
}