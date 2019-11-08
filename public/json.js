        var day= [];
        var temp = [];
    
      $.getJSON('/json_demo.json', function(emp) { 
        $('#name').html(emp.list[0].dt_txt);
        let v = 8;
        
        for(let i=0;i<5;i++)
        {
          if(i==0)
          {
            v=0;
          }
          else
          {
            v=(8*i)-1;

          }
          $(`#name${i}`).html(emp.list[v].dt_txt);
          console.log(`date : ${emp.list[v].dt_txt}`);
          $(`#temp${i}`).html(parseInt(emp.list[v].main.temp)/10+'&#8451;');
          console.log(`temp : ${emp.list[v].main.temp}`);
          day[i] = emp.list[v].dt_txt;
          temp[i] = (parseInt(emp.list[v].main.temp)/10);
         console.log(day[i]);
         console.log(temp[i]);
        
        }
         
        
        $('.abc').append(emp.city.name); 
        // $('#display').append('<p> Company: ' + emp.company+ '</p>'); 
    }); 