document.getElementById('submitButton').addEventListener('click',getData);
function getData(){
    //localStorage.removeItem("cityName1");
    document.getElementById('message').innerHTML='';

   const city=document.getElementById('nameInput');
   const cityName=city.value.toLowerCase();
   

   
      let url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=4595272a9ef9538531f427448a8d7baf";
      if(cityName!=='')
      localStorage.setItem('lastSearchedCity',url);
      else if(cityName==''){
          document.getElementById('message').innerHTML='If you will not enter city name above then you will get the waether report of last searched city';
        url=localStorage.getItem('lastSearchedCity'); // if user will not enter any city name then the data of last searched city will be the output
      }
     
     console.log(localStorage);

    

     fetch(url)
    .then(response=>response.json())
    .then((weatherdata)=>{
        if(cityName=='')
        document.getElementById('city').innerHTML='Last serached city : '+weatherdata.name;
        else
        document.getElementById('city').innerHTML=' City: '+weatherdata.name;
        document.getElementById('temperature').innerHTML='Temperature : '+Math.round(parseFloat(weatherdata.main.temp)-273.15)+'°C';
        const icon1=weatherdata.weather[0].icon;
        document.getElementById('image').src='http://openweathermap.org/img/wn/'+icon1+'.png';
        document.getElementById('image').style.height='100px';
        document.getElementById('wind-speed').innerHTML='Wind Speed: '+weatherdata.wind.speed+' m/s';
        document.getElementById('cloudy').innerHTML='Cloudiness: '+weatherdata.clouds.all+' %';
        const sunrise1=new Date (weatherdata.sys.sunrise*1000);
        const sunriseHours=sunrise1.getHours();
        const sunriseMinutes=sunrise1.getMinutes();
        const sunset1=new Date (weatherdata.sys.sunset*1000);
        const sunsetHours=sunset1.getHours();
        const sunsetMinutes=sunset1.getMinutes();
        document.getElementById('sunrise-sunset').innerHTML='Sunrise: '+sunriseHours+':'+sunriseMinutes+'<br><br>  '+'Sunset:'+sunsetHours+':'+sunsetMinutes;

        document.removeEventListener('click',getData)

    })
}

function geoFindMe() {

    document.getElementById('message').innerHTML='';
       function success(position) {
       const latitude  = position.coords.latitude;
       const longitude = position.coords.longitude;
  
       const url="https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=59878f461ffe6a5b97172813d5670522"
        fetch(url)
        .then(response=>response.json())
        .then((weatherdata)=>{
        document.getElementById('city').innerHTML='Your Location: '+weatherdata.name;
        document.getElementById('temperature').innerHTML='Temperature : '+Math.round(parseFloat(weatherdata.main.temp)-273.15)+'°C';
        const icon1=weatherdata.weather[0].icon;
        document.getElementById('image').src='http://openweathermap.org/img/wn/'+icon1+'.png';
        document.getElementById('image').style.height='100px';
        document.getElementById('wind-speed').innerHTML='Wind Speed: '+weatherdata.wind.speed+' m/s';
        document.getElementById('cloudy').innerHTML='Cloudiness: '+weatherdata.clouds.all+' %';
        const sunrise1=new Date (weatherdata.sys.sunrise*1000);
        const sunriseHours=sunrise1.getHours();
        const sunriseMinutes=sunrise1.getMinutes();
        const sunset1=new Date (weatherdata.sys.sunset*1000);
        const sunsetHours=sunset1.getHours();
        const sunsetMinutes=sunset1.getMinutes();
        document.getElementById('sunrise-sunset').innerHTML='Sunrise: '+sunriseHours+':'+sunriseMinutes+'<br><br>  '+'Sunset:'+sunsetHours+':'+sunsetMinutes;

        })
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

