const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


const temperature = 9
const windSpeed = 20

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed**0.16 + (0.3965*temperature)*(windSpeed**0.16)
}


let windChillText = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    const result = calculateWindChill(temperature, windSpeed);
    windChillText = " " + Math.round(result) + " °C"
}


document.querySelector("#windchill").textContent = windChillText