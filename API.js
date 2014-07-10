var express = require('express'),
    app = express();
var dbobj = require('./dbhandle.js');
var bodyParser = require('body-parser');

app.use(bodyParser());       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded()); // to support URL-encoded bodies



//User RESTful Web Services
app.get('/user', function (req, res) {
    dbobj.getUserList(function (jsonObj) {
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.get('/user/:id', function (req, res) {
    dbobj.getUser(req.params.id, function (jsonObj) {
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.post('/user', function (req, res) {
    var userid = req.body.user_id;
    var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;
    dbobj.postUser(userid, name, age, city, function (jsonObj) {
//        var json = JSON.stringify(jsonObj);
        res.end(jsonObj);
    });


});

app.delete('/user/:id', function (req, res) {
    dbobj.deleteUser(req.params.id, function (jsonObj) {
        res.end(jsonObj);
    });
});

app.put('/user/:id',function(req,res){

    /*var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;
*/
    dbobj.putUser(req.params.id,req.body,function(jsonObj){
        res.end(jsonObj);
    });
});



//Admin RESTful Web Services
app.get('/admin', function (req, res) {
    dbobj.getAdminList(function (jsonObj) {
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.get('/admin/:id', function (req, res) {
    dbobj.getAdmin(req.params.id, function (jsonObj) {
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.post('/admin', function (req, res) {
    var adminid = req.body.admin_id;
    var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;
    dbobj.postAdmin(adminid, name, age, city, function (jsonObj) {
//        var json = JSON.stringify(jsonObj);
        res.end(jsonObj);
    });


});

app.delete('/admin/:id', function (req, res) {
    dbobj.deleteAdmin(req.params.id, function (jsonObj) {
        res.end(jsonObj);
    });
});

app.put('/admin/:id',function(req,res){

   /* var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;*/

    dbobj.putAdmin(req.params.id,req.body,function(jsonObj){
        res.end(jsonObj);
    });
});


//Book RESTful Web Services
app.get('/book', function (req, res) {
    dbobj.getBookList(function (jsonObj) {
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.get('/book/:id', function (req, res) {
    dbobj.getBook(req.params.id, function (jsonObj) {
        var json = JSON.stringify(jsonObj);
        res.end(json);
    });

});

app.post('/book', function (req, res) {
    var bookid = req.body.book_id;
    var name = req.body.Name;
    var age = req.body.Age;
    var city = req.body.City;
    dbobj.postBook(bookid, name, age, city, function (jsonObj) {
//        var json = JSON.stringify(jsonObj);
        res.end(jsonObj);
    });


});

app.delete('/book/:id', function (req, res) {
    dbobj.deleteBook(req.params.id, function (jsonObj) {
        res.end(jsonObj);
    });
});

app.put('/book/:id',function(req,res){

    /*var title = req.body.Title;
    var author = req.body.Author;
    var price = req.body.Price;
*/
    dbobj.putBook(req.params.id,req.body,function(jsonObj){
        res.end(jsonObj);
    });
});



app.listen(7777);

