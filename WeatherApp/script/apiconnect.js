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

const forecastDay1day = $("#forecast-day1-day");
const forecastDay2day = $("#forecast-day2-day");
const forecastDay3day = $("#forecast-day3-day");
const forecastDay1date = $("#forecast-day1-date");
const forecastDay2date = $("#forecast-day2-date");
const forecastDay3date = $("#forecast-day3-date");

const forecastDay1 = $("#forecast-day1-condition");
const forecastDay2 = $("#forecast-day2-condition");
const forecastDay3 = $("#forecast-day3-condition");
const forecastDay1Img = $("#forecast-day1-image");
const forecastDay2Img = $("#forecast-day2-image");
const forecastDay3Img = $("#forecast-day3-image");

const dayString = new Date().getDay();
const dayArray =["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue"];

var last7history = Last7Days();
console.log(last7history);

const pastdataDay7 = $("#pastdata-day7");
const pastdataDay6 = $("#pastdata-day6");
const pastdataDay5 = $("#pastdata-day5");
const pastdataDay4 = $("#pastdata-day4");
const pastdataDay3 = $("#pastdata-day3");
const pastdataDay2 = $("#pastdata-day2");
const pastdataDay1 = $("#pastdata-day1");

const pastdataDay7Day = $("#pastdata-day7-day");
const pastdataDay6Day = $("#pastdata-day6-day");
const pastdataDay5Day = $("#pastdata-day5-day");
const pastdataDay4Day = $("#pastdata-day4-day");
const pastdataDay3Day = $("#pastdata-day3-day");
const pastdataDay2Day = $("#pastdata-day2-day");
const pastdataDay1Day = $("#pastdata-day1-day");

const pastdataDay7Temp = $("#pastdata-day7-temp");
const pastdataDay6Temp = $("#pastdata-day6-temp");
const pastdataDay5Temp = $("#pastdata-day5-temp");
const pastdataDay4Temp = $("#pastdata-day4-temp");
const pastdataDay3Temp = $("#pastdata-day3-temp");
const pastdataDay2Temp = $("#pastdata-day2-temp");
const pastdataDay1Temp = $("#pastdata-day1-temp");


const pastdataDay7Img = $("#patadata-day7-img");
const pastdataDay6Img = $("#patadata-day6-img");
const pastdataDay5Img = $("#patadata-day5-img");
const pastdataDay4Img = $("#patadata-day4-img");
const pastdataDay3Img = $("#patadata-day3-img");
const pastdataDay2Img = $("#patadata-day2-img");
const pastdataDay1Img = $("#patadata-day1-img");

const pastdataDay7Condition = $("#pastdata-day7-condition");
const pastdataDay6Condition = $("#pastdata-day6-condition");
const pastdataDay5Condition = $("#pastdata-day5-condition");
const pastdataDay4Condition = $("#pastdata-day4-condition");
const pastdataDay3Condition = $("#pastdata-day3-condition");
const pastdataDay2Condition = $("#pastdata-day2-condition");
const pastdataDay1Condition = $("#pastdata-day1-condition");

const abc= $("#abcdefg");



// const countryName = document.getElementById("lbl-country");
searchBtnOnClick();

function searchBtnOnClick(){
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/current.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&days=4`,
        success : (resp) => {
            // console.log(resp);
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
    

    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/forecast.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&days=4`,
        success : (resp) => {
            // console.log(resp);
            forecastDay1date.text(resp.forecast.forecastday[1].date)
            forecastDay2date.text(resp.forecast.forecastday[2].date)
            forecastDay3date.text(resp.forecast.forecastday[3].date)

            forecastDay1day.text(dayArray[dayString+1])
            forecastDay2day.text(dayArray[dayString+2])
            forecastDay3day.text(dayArray[dayString+3])

            forecastDay1.text(resp.forecast.forecastday[1].day.condition.text);
            forecastDay2.text(resp.forecast.forecastday[2].day.condition.text);
            forecastDay3.text(resp.forecast.forecastday[3].day.condition.text);

            forecastDay1Img.attr("src",resp.forecast.forecastday[1].day.condition.icon)
            forecastDay2Img.attr("src",resp.forecast.forecastday[2].day.condition.icon)
            forecastDay3Img.attr("src",resp.forecast.forecastday[3].day.condition.icon)
        }
    })

    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result1}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay1.text(resp.forecast.forecastday[0].date)
            pastdataDay1Day.text(dayArray[dayString])
            pastdataDay1Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay1Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay1Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result2}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay2.text(resp.forecast.forecastday[0].date)
            pastdataDay2Day.text(dayArray[dayString+1])
            pastdataDay2Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay2Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay2Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result3}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay3.text(resp.forecast.forecastday[0].date)
            pastdataDay3Day.text(dayArray[dayString+2])
            pastdataDay3Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay3Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay3Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result4}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay4.text(resp.forecast.forecastday[0].date)
            pastdataDay4Day.text(dayArray[dayString+3])
            pastdataDay4Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay4Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay4Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result5}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay5.text(resp.forecast.forecastday[0].date)
            pastdataDay5Day.text(dayArray[dayString+4])
            pastdataDay5Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay5Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay5Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result6}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay6.text(resp.forecast.forecastday[0].date)
            pastdataDay6Day.text(dayArray[dayString+5])
            pastdataDay6Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay6Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay6Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/history.json?key=58b3a31e66174a62ac525133232609&q=${searchName.value}&dt=${last7history.result7}`,
        success : (resp) => {
            // console.log(resp);
            pastdataDay7.text(resp.forecast.forecastday[0].date)
            pastdataDay7Day.text(dayArray[dayString+6])
            pastdataDay7Img.attr("src",resp.forecast.forecastday[0].day.condition.icon)
            pastdataDay7Condition.text(resp.forecast.forecastday[0].day.condition.text)
            pastdataDay7Temp.text(resp.forecast.forecastday[0].day.avgtemp_c+"℃")
        }
    })
}

function Last7Days () {

    var today = new Date();
    var oneDayAgo = new Date(today);
    var twoDaysAgo = new Date(today);
    var threeDaysAgo = new Date(today);
    var fourDaysAgo = new Date(today);
    var fiveDaysAgo = new Date(today);
    var sixDaysAgo = new Date(today);
    var sevenDaysAgo = new Date(today);

    oneDayAgo.setDate(today.getDate() - 1);
    twoDaysAgo.setDate(today.getDate() - 2);
    threeDaysAgo.setDate(today.getDate() - 3);
    fourDaysAgo.setDate(today.getDate() - 4);
    fiveDaysAgo.setDate(today.getDate() - 5);
    sixDaysAgo.setDate(today.getDate() - 6);
    sevenDaysAgo.setDate(today.getDate() - 7);

    var result0 = formatDate(today);
    var result1 = formatDate(oneDayAgo);
    var result2 = formatDate(twoDaysAgo);
    var result3 = formatDate(threeDaysAgo);
    var result4 = formatDate(fourDaysAgo);
    var result5 = formatDate(fiveDaysAgo);
    var result6 = formatDate(sixDaysAgo);
    var result7 = formatDate(sevenDaysAgo);

    var result = {result0,result1,result2,result3,result4,result5,result6,result7};
    // var result = result0+","+result1+","+result2+","+result3+","+result4+","+result5+","+result6+","+result7;
    // console.log(result);
    return(result);
}

function formatDate(date){

    // var dd = date.getDate();
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    // date = mm+'/'+dd+'/'+yyyy;
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }