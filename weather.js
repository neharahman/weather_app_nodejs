const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(`${__dirname}/public`));

let text = '';
let xyz = '';


app.get('/',function(req,res)
{
    res.sendFile(`${__dirname}/form.html`);
    

});

app.get('/card',function(req,res)
{
    res.sendFile(`${__dirname}/card.html`);
    

});

app.get('/new',function(req,res)
{
    res.sendFile(`${__dirname}/new.html`);
    

});
app.get('/json',function(req,res)
{
    res.sendFile(`${__dirname}/forecast.html`);

});
app.get('/data',function(req,res)
{
    res.sendFile(`${__dirname}/weather_data.html`);
    

});
app.post('/abc',function(req,res)
{
    let name = {
        text1 : req.body.name1
    }
    let text = JSON.stringify(name);
    let text2 = JSON.parse(text);
    console.log(text2.text1);
    let url =`https://api.openweathermap.org/data/2.5/forecast?q=${text2.text1}&appid=a8049d773a0bc9bdbb7e0566048446e6`;
    console.log(url);
    https.get(url,(httpRes)=>
    {
        
        httpRes.on('data',(data)=>
        {

            let xyz = JSON.parse(data);
            console.log(xyz.name);
            let abc = JSON.stringify(xyz);
            fs.writeFile('./public/json_demo.json',abc,(err)=>
            {
                if(err){console.log(err)}
                console.log('data  inserted');
            })
            /*app.get('/data',function(req,res)
            {
                res.writeHead(200 , 'Conten-type','application/json');
                res.end(abc);
            })*/
            
        });
       
    });
    setTimeout(function() {
        res.redirect('/json');
    }, 5000);
    

});


app.listen(3600);
