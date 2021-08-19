const apiKey = '728a087b75e1d6f96e05cbb75ffc826e';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        updateUI(data)
        console.log(data);
    } 

    )}

    const searchBtn = document.getElementById("search_button").addEventListener("click",function(){
        const inputCity = document.getElementById("city").value;
        getWeatherData(inputCity);
    })



const updateUI = data => {
    const name =document.getElementById("show_city").innerText = data.name || "Unknown Location!";
    if(name == data.name){
     document.getElementById("show_temperature").innerText = data.main.temp;
     document.getElementById("weather_status").innerText = data.weather[0].main;
     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    }

    if(name == "Unknown Location!"){
        document.getElementById("show_temperature").innerText = "Not Available";
        document.getElementById("weather_status").innerText = "No Weather Status";
        document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/$@2x.png`);
    }
    
   
    document.getElementById("city").value = "";

    
}
getWeatherData("Chittagong");





// const getWeatherData = city =>{
//     const url = `${apiBase}?q=${city}&appid=${apiKey}`;
//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// // const apiKey = '728a087b75e1d6f96e05cbb75ffc826e';
// // const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

// // const getWeatherData = city => {
// //     const url = `${apiBase}?q=${city}&appid=${apiKey}`;
// //     fetch(url)
// //         .then(response => response.json())
// //         .then(data => console.log(data))
// // }  

// const searchBtn = document.getElementById('search_button');
// searchBtn.addEventListener('click', () => {
//     const inputCity = document.getElementById('city').value;
//     getWeatherData(inputCity)
// })

// const updateUI = data => {
//     document.getElementById('show_city').innerText = data.name || "Unknown Location!";
//     document.getElementById('show_temperature').innerText = data.main.temp ;
//     document.getElementById('weather_status').innerText = data.weather[0].main;
//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     document.getElementById('city').value = "";
// }

//  getWeatherData('Dhaka');