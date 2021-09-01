const input = document.getElementById("cityname");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const dataStatus = document.querySelector(".middle_layer");
const temperature = document.getElementById("temp");
const weatherLogo = document.querySelector(".temp_status");

const getInfo = async (event) => {
    event.preventDefault();
    const cityname = input.value;
    if (cityname === "") {
        output.innerHTML = `Please Add Cityname`;
    }
    else {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=073f4c8de756e97d085da6b74a4f98b4`;
            const response = await fetch(url);
            const objData = await response.json();
            const arrData = [objData];
            const weather = arrData[0].weather[0].main;
            if (arrData[0].name == undefined) {
                output.innerHTML = `Cityname not found ${cityname}`;
                dataStatus.style.display = "none";
            } else {
                output.innerHTML = `${arrData[0].name}`;
                dataStatus.style.display = "flex";
                temperature.innerHTML = `${arrData[0].main.temp}C°`;
                if (weather === "Clouds") {
                    weatherLogo.innerHTML = `<i class="fa fa-cloud" aria-hidden="true">`;
                }
                else if (weather === "Rain") {
                    weatherLogo.innerHTML = `<i class="fa fa-cloud-rain" style="color: #fff;" aria-hidden="true">`;
                }
                else if (weather === "Sunny") {
                    weatherLogo.innerHTML = `<i class="fa fa-cloud-rain" style="color: #f9d71c;" aria-hidden="true">`;
                }
                else if (weather === "Clear") {
                    weatherLogo.innerHTML = `<i class="fa fa-cloud-sun" style="color: #f9d71c;" aria-hidden="true">`;
                }
                else {
                    weatherLogo.innerHTML = `<i class="fa fa-cloud" aria-hidden="true">`;
                }
            }
        } catch (error) {
            output.innerHTML = `some internal ${error}`;
        }
    }

    input.value = "";
}

submitBtn.addEventListener("click", getInfo)


// Add Date Weekend day and date 
const currDay = document.getElementById("day");
const todayDate = document.getElementById("today_date");

setInterval(() => {
    const date = new Date();
    const day = date.getDay();
    const currDate = date.getDate();
    const currMonth = date.getMonth();
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    currDay.innerHTML = week[day];
    todayDate.innerHTML = `${currDate} ${month[currMonth]}`;
}, 1000);