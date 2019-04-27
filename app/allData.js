var plug = require("./plugins");
module.exports = {
    allDataPost: (req, res) => {
    if(Object.keys(req.body).length > 0)
    var _d = plug.evaluate(req.body);
    else
    var _d = plug.evaluate({"city":{_:"city"},product:{_:"product"},"user":{ firstName:{_:"firstName"}, lastName:{_:"lastName"}, findName:{_:"findName"} }});
    res.send(_d);
    }
}