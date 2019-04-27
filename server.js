    const express = require('express')
    const app = express()
    var bodyParser = require('body-parser')
    var path = require('path');
    app.use(bodyParser.json())
    const port = process.env.PORT ||  3000;
    
    var plug = require('./app/plugins');
    var datatable = require('./app/datatable');
    var allData = require('./app/allData')
    app.use(express.static('src'))
    app.use(express.static('node_modules'))
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    app.get('/datatable/:id?',datatable.datatable);
    app.post('/datatable/:id?', datatable.datatablePost);

    app.get('/getData',allData.allDataPost);
    app.post('/getData', allData.allDataPost);


    app.listen(port, function(){
    console.log('listening on =',port);
    });

        
