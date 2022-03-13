const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const fileName = 'info.json';
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);


app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response){
           
      response.render('bmi');
      
});


//RESTful GET web service
app.get('/process-data', function (request, response) {
      data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      response.send(data);
});

//RESTful POST web service
app.post('/process-data', urlEncodedParser, function(request, response) {

      //JSON CODE
      const fs = require('fs');
      const path = require('path');

      let info = [
            {
                  weight: request.body.weight,
                  height: request.body.height,
                  BMI: request.body.BMI,
                  Summary: request.body.summary
            }
      ];
      
      info.push(request.body);
      let data = JSON.stringify(info, null, 2);
      fs.writeFileSync('info.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
      });     
      
      response.end('Successfully recorded on database!'); //+ (request.body.weight + '' + request.body.height); 
});

app.listen(port);
console.log('Node server started on port 3000');