    const express = require('express')
    const app = express()
    var bodyParser = require('body-parser')
    var path = require('path');
    const mongoose = require('mongoose');
    var DataTable = require('mongoose-datatable');
    mongoose.plugin(DataTable.init);
    const port = process.env.PORT ||  3000;
    require('dotenv').config();
    app.use(bodyParser.json())
    mongoose.connect(process.env.SECRET, {useNewUrlParser: true});
    const Cat = mongoose.model('words', {
       en:String,
       mr:String
  });
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
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

    app.get('/words',function(req,res){
        Cat.find({}).exec(function(err,data){
            res.send(data);
        })
    });
    app.post('/wordsdb',function(req,res){
        Cat.dataTable(req.body,{}, function(err, data) {
            if(err) return manageError(err);
            res.send(data);
        });
    });

    app.listen(port, function(){
    console.log('listening on =',port);
    });

        
