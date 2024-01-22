var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors');

app.use(cors());

app.get('/list', function (req, res) {
   fs.readFile( __dirname + "/" + "words.json", 'utf8', (err, data) => {
      if (err) throw err;
      console.log( data );
      res.end(data);
   });
})

app.get('/:Word', function (req, res) {
  fs.readFile( __dirname + "/" + "words.json", 'utf8', function (err, data) {
     var words = JSON.parse( data );
     for(const key in words){
      if(words[key].Word === req.params.Word){
        const word = words[key];
        console.log(word);
        res.end(JSON.stringify(word))
        return
      }
     }
  });
})

app.listen(5008, () => {
  console.log('the server is running on the port number 5008')
})