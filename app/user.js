var plug = require("./plugins");
module.exports = {
    datatable: (req, res) => {
        
        if(req.params.id==undefined || req.params.id>100){
            req.params.id=10;
        }

        var n= plug.evaluate({_:"number"});
        var d = plug.evaluate({ "draw": {_:"number"},
    "recordsTotal": n,
    "recordsFiltered": n});
    d.data = [];
    if(Object.keys(req))
    for(var i=0;i<req.params.id;i++){
        var _d = plug.evaluate({"city":{_:"city"},product:{_:"product"},"user":{ firstName:{_:"firstName"}, lastName:{_:"lastName"}, findName:{_:"findName"} }});
        _d.id = i;
        d.data.push(_d);
    }
    res.send(d);
    }
}