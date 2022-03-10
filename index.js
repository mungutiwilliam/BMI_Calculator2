const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response){
      response.render('bmi');
});

app.post('/process-data', urlEncodedParser, function(request, response){
      
      response.end('Successfully recorded on database!'); //+ (request.body.weight + '' + request.body.height);

      //JSON CODE
      const fs = require('fs');
      const path = require('path');

      let info = {
      weight: request.body.weight,
      height: request.body.height,
      BMI: request.body.BMI,
      Summary: request.body.summary
      };

      let data = JSON.stringify(info, null, 2);
      fs.writeFileSync('info.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
            });

});

app.listen(port);
console.log('Node server started on port 3000');