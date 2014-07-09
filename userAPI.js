var express = require('express'),
    app = express();
var dbobj = require('./dbhandle.js');
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies

app.get('/user',function(req,res){
    dbobj.getUserList(function(jsonObj){
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.get('/user/:id',function(req,res){
    dbobj.getUser(req.params.id,function(jsonObj){
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.post('/user',function(req,res){
    var userid = req.body.user_id;
    var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;
    dbobj.postUser(userid,name,age,city,function(jsonObj){
//        var json = JSON.stringify(jsonObj);
        res.end(jsonObj);
    });


});

app.delete('/user/:id',function(req,res){
    dbobj.deleteUser(req.params.id,function(jsonObj){
        res.end(jsonObj);
    });

app.put('/user/:id',function(req,res){
    var newid = req.body.user_id;
    var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;
    dbobj.putUser(req.params.id,newid,name,age,city,function(jsonObj){
        res.end(jsonObj);
    });
});

});

app.listen(7777);

/*app.get('/user:id',function(req,res){
    if(jsonObj.id===req.params.id)
    {

    }

});*/
