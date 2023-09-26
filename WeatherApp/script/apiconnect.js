const cityName = $("#lbl-city");
const countryName = $("#lbl-country");
const curentTemp = $("#current-temp");
const curentImg = $("#condition-img");
const realfeel = $("#real-feel");
const windspeed = $("#wind-speed");
const humidity = $("#humidity");
const precipitation = $("#precipitation");
// const conditionImg = $("#condition-img");
const uv = $("#uv");
const currentcondition = $("#current-weather-condition");
const searchName = document.getElementById("search-field");
// const countryName = document.getElementById("lbl-country");
searchBtnOnClick();
function searchBtnOnClick(){
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/current.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}`,
        success : (resp) => {
            console.log(resp);
            const city= resp.location.name;
            //console.log(city);
            cityName.text(resp.location.name);
            countryName.text(resp.location.country);
            currentcondition.text(resp.current.condition.text)
            curentTemp.text(resp.current.temp_c+"℃")
            // curentImg.text(resp.current.condition.icon)
            //console.log(resp.current.condition.icon);
            searchName.value="";
            realfeel.text(resp.current.feelslike_c+"℃")
            windspeed.text(resp.current.wind_kph+" kph")
            humidity.text(resp.current.humidity+"%")
            uv.text(resp.current.uv)
            precipitation.text(resp.current.precip_mm+" mm")
            curentImg.attr("src",resp.current.condition.icon) 
        }
    });
}