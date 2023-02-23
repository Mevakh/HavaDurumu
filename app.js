const apiKey = "BURAYA APİ GİRİNİZ"
const url = "https://api.openweathermap.org/data/2.5/"


const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
              
}



const displayResult = (result) => {
    let icon = document.querySelector("#icon")
    icon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`
    
    let city = document.querySelector(".city")
    .innerText = `${result.name}, ${result.sys.country}`
     
    let temp = document.querySelector(".temp")
    .innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector(".desc")
    .innerText = `${(result.weather[0].description)}`
   
    let minMax = document.querySelector(".minMax")
    .innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
    console.log(result)

    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${result.name})`
}


const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress",function(e){
   if(e.key === "Enter")
   getResult(searchBar.value)
   
})

const searchBtn = document.getElementById("searchBtn")
.addEventListener("click",function(e){
    
    getResult(searchBar.value)
})
