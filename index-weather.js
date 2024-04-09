// My Project 94698



const weather_main = document.querySelector(".weather-main");
const weather_form = document.getElementById("weather-form");
const weather_time_zone =document.querySelector(".timeZone");
const weather_reset_button = document.getElementById("weather-reset-button");
// weather_reset_button.addEventListener("onclick" , reset);

weather_reset_button.style.display="none";
const weather_time_of_zone = document.querySelector(".timeOfZone");
const weather_address = document.querySelector(".address");
const weather_date_of_zone =document.querySelector(".dateOfZone");
const weather_city_img_name = document.querySelector(".city-image");
weather_city_img_name.style.display="none";

weather_form.addEventListener("submit" , (event)=> event.preventDefault());
const weather_search_button = document.getElementById("weather-search-button");
const weather_city_ip_button=document.getElementById("weather-city-ip-button");

const weather_card = document.querySelector(".weather-card");
weather_card.style.display="none";

const weather_show_more_button = document.getElementById("showMore");
const weather_show_less_button = document.getElementById("showLess");
const weather_additional_details = document.querySelector(".additional-details")

const weather_data_details = document.querySelector(".all-weather-data");
weather_data_details.style.display="none";

const trying_for_data_frame = document.querySelector(".trying-for-data");
trying_for_data_frame.style.display="none";

const weather_city_image = document.getElementById("weather-city-image")
const weather_city_name = document.getElementById("weather-city-name");
const weather_temp_display_p = document.querySelector(".tempDisplay")
const weather_humidity_display_p = document.querySelector(".humidityDisplay")
const weather_desc_display_p = document.querySelector(".descDisplay")
const weather_country_display_p = document.querySelector(".countryDisplay")


const weather_wind_display_p = document.querySelector(".windDisplay")
const weather_feels_like_temp_p = document.querySelector(".feelsliketempDisplay")

const weather_visibility_display_p = document.querySelector(".visibiltyDisplay")


const weather_precipitaion_prob_display_p = document.querySelector(".precipitationProbability")
const weather_rain_intensity_p = document.querySelector(".rainIntensity")
const weather_sleek_intensity_display_p = document.querySelector(".sleetIntensity")
const weather_snow_intensity_display_p = document.querySelector(".snowIntensity")
const weather_uv_Index_display_p = document.querySelector(".uvIndex")
const weather_code_display_p = document.querySelector(".weatherCode")
const weather_wind_direction_display_p = document.querySelector(".windDirection")
const weather_cloud_base_display_p = document.querySelector(".cloudBase")
const weather_cloud_cover_display_p = document.querySelector(".cloudCover")
const weather_cloud_ceiling_display_p = document.querySelector(".cloudCeiling")
const weather_dew_point_display_p = document.querySelector(".dewPoint")
const weather_lattitude_display_p = document.querySelector(".lattitude")
const weather_longitude_display_p = document.querySelector(".longitude")






const weather_city_input = document.getElementById("weather-city-input");

let weather_json;

function getTimeZone(seconds){
    let time_zone="";
    let sign ="";
    if(Math.sign(seconds)==1){
        sign="+";
    } 
    else{
        sign="-";
    }
    let hours = Math.floor(Math.abs(seconds)/3600);
    console.log(hours);

    let minutes = Math.floor((Math.abs(seconds) - hours*3600)/60);
    time_zone = `TIME ZONE - UTC: ${sign} ${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2,"0")} Hrs.`
    console.log(time_zone);
    return time_zone;
}

function try_reset(){

    weather_reset_button.style.display="none";
    weather_search_button.style.display="inline";
    weather_city_input.textContent="";
    weather_card.style.display="none";
    weather_data_details.style.display="none";
    weather_city_image.style.display="none";
    weather_city_name.style.display="none";
    trying_for_data_frame.style.display="none";
    weather_city_ip_button.style.display="inline";
    
}



async function auto_fetch_api(){
    
    try{
        try_reset();
        const api_key_tmrw_api = "sYS5mjFto1WNmhCSZ4eXlvwM6fL0yPNw"
        
        weather_search_button.style.display="none";
        

        weather_card.style.display="flex";
        trying_for_data_frame.style.display="block";
        
        trying_for_data_frame.innerHTML=
        "<p>TRYING TO GET A WEATHER REPORT.. PLEASE WAIT PATIENTLY 😌🙏 THANKYOU</p>";
        //calling the fetch_weather_data() fn to retreive data from api.


        let response_ip_api = await fetch(`https://freeipapi.com/api/json`)
            .then(response=>{
                console.log(response);
                if(!response.ok){
                    throw new Error("COULD NOT FETCH DATA BY IP");

                    }
                else{
                    return response;
                }
            })
            .then(response=>response.json());
        

        console.log(response_ip_api);
        weather_city_input.value=response_ip_api.cityName;
        
        let url_tomorrow_io_api = 
        `https://api.tomorrow.io/v4/weather/realtime?location=${response_ip_api.cityName}&apikey=`;
        
        // weather_json = await fetch_weather_data(give_url(response_ip_api.cityName));
        weather_json_2 = await fetch_weather_data(url_tomorrow_io_api+api_key_tmrw_api)
        // data_setter(weather_json , weather_json_2);
        data_setter(weather_json_2);
        
        weather_city_ip_button.style.display="none";
        
        weather_search_button.style.display="inline"

        }
        

        catch(error){
            
            weather_data_details.style.display="none";
            weather_city_img_name.style.display="none";
            weather_search_button.style.display="none";
            weather_reset_button.style.display="inline";


            trying_for_data_frame.innerHTML=
            "<p>COULD FETCH FOR DATA, TRY A NEARBY CAPITAL OR TRY AGAIN SOME TIME LATER😌🙏 THANKYOU</p>";
            console.error(error);
        }


    

}

async function main(){
    let weather_city_text="";
    try{
        const api_key_tmrw_api = "sYS5mjFto1WNmhCSZ4eXlvwM6fL0yPNw"
        
        
        weather_data_details.style.display="none";
        weather_reset_button.style.display="none";
        weather_city_img_name.style.display="none";
        weather_card.style.display="flex";
        trying_for_data_frame.style.display="block";

        if(weather_city_input.value==""){
            
            trying_for_data_frame.innerHTML=
            "<p>PLEASE PROVIDE A CITY NAME</p>"
            // throw new Error("PLEACE PROVIDE A CITY NAME");
            //invalid cases, error raised
            return;
        }
        
        weather_city_text=weather_city_input.value.toLowerCase().trim();
        console.log(weather_city_text);
        let url_tomorrow_io_api = 
        `https://api.tomorrow.io/v4/weather/realtime?location=${weather_city_text}&apikey=`;
       
        trying_for_data_frame.innerHTML=
        "<p>TRYING TO GET A WEATHER REPORT.. PLEASE WAIT PATIENTLY 😌🙏 THANKYOU</p>";
        //calling the fetch_weather_data() fn to retreive data from api.
        
        // weather_json = await fetch_weather_data(give_url(weather_city_text));
        weather_json_2 = await fetch_weather_data(url_tomorrow_io_api+api_key_tmrw_api)
                    
        
        // console.log(weather_json);
        console.log(weather_json_2);
        // data_setter(weather_json , weather_json_2);
        
        data_setter(weather_json_2);
        weather_search_button.style.display="inline";
        }
        catch(error){
            
            weather_data_details.style.display="none";
            weather_city_img_name.style.display="none";
            weather_search_button.style.display="none";
            weather_reset_button.style.display="inline";

            if(error.toString()=="TOO MANY REQUESTS, TRY AGAIN LATER"){
                trying_for_data_frame.innerHTML=
            "<p>TOO MANY REQUESTS, TRY AGAIN SOME TIME LATER 😌🙏 THANKYOU</p>";    
            }
            else{

            trying_for_data_frame.innerHTML=
            "<p>NO WEATHER DATA EXISTS FOR THE GIVEN CITY 😌🙏 or THANKYOU</p> ";
            console.log(error.toString());
            }
        }


}

function give_url(weather_city_text){
    const api_key = "1341799dafeb76f4a071b50e299923b1"; //OPENWEATHERAPI
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${weather_city_text}&appid=${api_key}`;
    return api_url;
}

async function fetch_weather_data(url){
        try{
            const response = await fetch(url);
            console.log(response);
            console.log(`STATUS : ${response.status}`)
            if(!response.ok){
                if(response.status==429){
                    throw new Error("TOO MANY REQUESTS, TRY AGAIN LATER");
                }
                else{

                throw new Error("COULD NOT FETCH DATA");
                }
            }
            else{
                
                return response.json();
            }
    
        }
        catch(error){
                console.log(error)
            throw new Error("COULD NOT FETCH DATA")
        }
        
}


// async function data_setter(weather_json , weather_json_2){
async function data_setter(weather_json_2){



    weather_search_button.style.display="none";
    
    // let weather_country_id;
    // if(weather_json.sys.id==undefined)
    //     weather_country_id=``;
    // else{
    //     weather_country_id=`, ID : ${weather_json.sys.id}`;
    // }


    
    trying_for_data_frame.style.display="none";
    // weather_card.style.display="block";

    weather_city_img_name.style.display="flex";
    weather_data_details.style.display="block";
    
    
    weather_address.innerHTML=
    `ADDRESS : <br>
    ${weather_json_2.location.name}<br><hr>TYPE : ${weather_json_2.location.type}`
    let country = weather_json_2.location.name.split(", ").slice(-1)[0];
    console.log(country , "wswhfshfsh;h;jhguho;")
    
    c2 = await fetch(
        
        `https://api.api-ninjas.com/v1/country?name=${country.toLowerCase()}`,{
            headers:{ 'X-Api-Key': 'QL16lvOP6qEKxyNk09cH/Q==NxVrGZLuRYDMUt6z'}})
            .then(response=>response.json())
            .then(c2=>c2[0].iso2.toLowerCase()) 
                //to get alpha2code by country name
    console.log(c2)
    weather_city_image.src = `https://flagcdn.com/240x180/${c2}.png`;
    weather_city_name.innerHTML=weather_city_input.value.toUpperCase();

    
    
    
    weather_temp_display_p.innerHTML=
    `TEMPERATURE: ${Number(((weather_json_2.data.values.temperature)).toFixed(1))} °C`;

    weather_humidity_display_p.innerHTML=
    `HUMIDITY : ${Number(weather_json_2.data.values.humidity)} %`;
    
    weather_wind_display_p.innerHTML=
    `WIND : ${Number(weather_json_2.data.values.windSpeed*3.6).toFixed(1)} Km/hr`;

    weather_time_of_zone.innerHTML=
    `DATE : ${arrange_time(weather_json_2.data.time.split("T")[0])}`

    function arrange_time(date){
        y_m_d = date.split("-")
        return `${y_m_d[2]}-${y_m_d[1]}-${y_m_d[0]}`
    }

    weather_date_of_zone.innerHTML=
    `TIME : ${weather_json_2.data.time.split("T")[1].slice(0,-1)} 
     ${weather_json_2.data.time.split("T")[1].slice(-1)}`
     //to add space between the 'Z' and the time
     
     console.log(`COUNTRY : ${weather_json_2.location.name}`)
     weather_country_display_p.innerHTML=
     `COUNTRY : ${country.toUpperCase()}`;
     
    
    weather_feels_like_temp_p.innerHTML=
    `FEELS LIKE : ${Number(((weather_json_2.data.values.temperatureApparent)).toFixed(1))} °C`;




    // weather_visibility_display_p.innerHTML=
    // `VISIBILITY : ${Number(weather_json.visibility/1000).toFixed(2)} Km`;
    weather_visibility_display_p.style.display="none";
    
    weather_additional_details.style.display="none";
    weather_show_less_button.style.display="none";


    


    console.log('WORKS')
    weather_precipitaion_prob_display_p.innerHTML=
    `PRECIPITATION PROBABILITY : ${weather_json_2.data.values.precipitationProbability} %`
    console.log('WORKS')
    weather_rain_intensity_p.innerHTML=
    `RAIN INTENSITY : ${weather_json_2.data.values.rainIntensity} mm/hr`
    console.log('WORKS')
    weather_sleek_intensity_display_p.innerHTML=
    `SLEET INTENSITY : ${weather_json_2.data.values.sleetIntensity} mm/hr`
    console.log('WORKS')
    weather_snow_intensity_display_p.innerHTML=
    `SNOW INTENSITY : ${weather_json_2.data.values.snowIntensity} mm/hr`
    console.log('WORKS')
    weather_uv_Index_display_p.innerHTML=
    `UV INDEX : ${weather_json_2.data.values.uvIndex}`
    console.log('WORKS')
    weather_code_display_p.innerHTML=
    `WEATHER CODE : ${weather_json_2.data.values.weatherCode}`
    console.log('WORKS')
    weather_wind_direction_display_p.innerHTML=
    `WIND DIRECTION : ${weather_json_2.data.values.windDirection} deg(°)`
    console.log('WORKS')
    weather_cloud_base_display_p.innerHTML=
    `CLOUD BASE : ${weather_json_2.data.values.cloudBase} Km`
    console.log('WORKS')
    weather_cloud_cover_display_p.innerHTML=
    `CLOUD COVER : ${weather_json_2.data.values.cloudCover} %`
    console.log('WORKS')
    weather_cloud_ceiling_display_p.innerHTML=
    `CLOUD CEILING : ${weather_json_2.data.values.cloudCeiling} Km`
    console.log('WORKS')
    weather_dew_point_display_p.innerHTML=
    `DEW POINT : ${weather_json_2.data.values.dewPoint} °C`
    console.log('WORKS')
    weather_lattitude_display_p.innerHTML=
    `LATTITUDE : ${weather_json_2.location.lat}`
    console.log('WORKS')
    weather_longitude_display_p.innerHTML=
    `LOGITUDE : ${weather_json_2.location.lon}`
    console.log('WORKS')


    
    
    
    
    
    
    // weather_desc_display_p.innerHTML=
    // `${weather_json.weather[0].description.toUpperCase()}`;

    // weather_city_name.innerHTML = 
    // `${weather_json.name.toUpperCase()}<br><hr>${country.toUpperCase()}`;

    // weather_time_zone.innerHTML = 
    // `${getTimeZone(weather_json.timezone)}`;
    weather_city_name.style.display="block";
    weather_reset_button.style.display="inline";
    
    // setTimeout(()=>{
    //     }
    //     ,1500
    // )           //adding time for img to load
    weather_city_image.style.display="flex";
    weather_city_ip_button.style.display="inline";
    weather_show_more_button.style.display="block";


    weather_precipitaion_prob_display_p.style.display="none";
    weather_rain_intensity_p.style.display="none";
    weather_sleek_intensity_display_p.style.display="none";
    weather_snow_intensity_display_p.style.display="none";
    weather_uv_Index_display_p.style.display="none";
    weather_code_display_p.style.display="none";
    // weather_wind_direction_display_p.style.display="none";
    weather_cloud_base_display_p.style.display="none";
    weather_cloud_cover_display_p.style.display="none";
    weather_cloud_ceiling_display_p.style.display="none";


}

const count=0;
function showMore(){

    weather_additional_details.style.display="block";
    weather_show_less_button.style.display="block";
    weather_show_more_button.style.display="none";
}
function showLess(){

    weather_additional_details.style.display="none";
    weather_show_less_button.style.display="none";
    weather_show_more_button.style.display="block";
}







