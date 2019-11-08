const fs = require('fs');
const bodyParser = require('body-parser')
fs.readFile('json_demo.json',(err,data)=>
{
    if(err){'not found'}
    let abc = JSON.stringify(data);
    document.getElementById('name1').innerHTML = ` Loaction : ${abc.name}`;
    document.getElementById('weather_type').innerHTML = ` Weather Type :${abc.weather[0].main}`;
    document.getElementById('weather_desc').innerHTML =  `Weather Description :${abc.weather[0].description}`;
    document.getElementById('temp').innerHTML =  `Temperature : ${abc.main.temp}`;
    document.getElementById('pressure').innerHTML = `Pressure : ${abc.main.pressure}`;
    document.getElementById('humidity').innerHTML = `Humidity : ${abc.main.humidity}`;
    document.getElementById('temp_min').innerHTML = `Minimum Temperature : ${abc.main.temp_min}`;
    document.getElementById('temp_max').innerHTML = `Maximum Temperature : ${abc.main.temp_max}`;
    
});

